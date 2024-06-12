import type { ErrorDescriptor } from "@nomicfoundation/hardhat-errors";

import assert from "node:assert/strict";
import path from "node:path";
import { after, before, beforeEach, describe, it } from "node:test";

import { HardhatError } from "@nomicfoundation/hardhat-errors";
import { ensureError } from "@nomicfoundation/hardhat-utils/error";

import { ResolverImplementation } from "../src/dependency-resolver.js";
import {
  ProjectResolvedFile,
  ResolvedFile,
  ResolvedFileType,
  Resolver,
} from "../src/types.js";

const TEST_FIXTURES_ROOT = path.resolve(import.meta.dirname, "test-fixtures");

const FIXTURE_HARDHAT_PROJECT_ROOT = path.resolve(
  TEST_FIXTURES_ROOT,
  "monorepo/packages/hardhat-project",
);

function assertResolvedProjectFile(
  resolvedFile: ResolvedFile,
  pathFromProjectRoot: string,
): asserts resolvedFile is ProjectResolvedFile {
  assert.ok(
    resolvedFile.type === ResolvedFileType.PROJECT_FILE,
    `Resolved file ${resolvedFile.path} is not a project file`,
  );
  assert.equal(resolvedFile.sourceName, pathFromProjectRoot);
  assert.equal(resolvedFile.sourceName, pathFromProjectRoot);
  assert.equal(
    resolvedFile.path,
    path.resolve(FIXTURE_HARDHAT_PROJECT_ROOT, pathFromProjectRoot),
  );

  const pathFromTestFixturesRoot = path.relative(
    TEST_FIXTURES_ROOT,
    resolvedFile.path,
  );

  assert.equal(resolvedFile.content, pathFromTestFixturesRoot + "\n");
}

function assertHardhatError<ReturnT, ErrorDescriptorT extends ErrorDescriptor>(
  f: () => ReturnT,
  errorDescriptor: ErrorDescriptorT,
  messageArguments: (typeof HardhatError<ErrorDescriptorT>)["arguments"],
) {
  try {
    f();
  } catch (e) {
    ensureError(e);

    if (!HardhatError.isHardhatError(e)) {
      // We rethrow the error so it's easier to debug
      throw e;
    }

    assert.deepEqual(e.descriptor, errorDescriptor);
    assert.deepEqual(e.messageArguments, messageArguments);
    return;
  }

  assert.fail("Function didn't throw");
}

async function assertHardhatErrorAsync<
  ReturnT,
  ErrorDescriptorT extends ErrorDescriptor,
>(
  f: (() => Promise<ReturnT>) | Promise<ReturnT>,
  errorDescriptor: ErrorDescriptorT,
  messageArguments: (typeof HardhatError<ErrorDescriptorT>)["arguments"],
) {
  try {
    if (typeof f === "function") {
      await f();
    } else {
      await f;
    }
  } catch (e) {
    ensureError(e);

    if (!HardhatError.isHardhatError(e)) {
      // We rethrow the error so it's easier to debug
      throw e;
    }

    assert.deepEqual(e.descriptor, errorDescriptor);
    assert.deepEqual(e.messageArguments, messageArguments);
    return;
  }

  assert.fail("Function didn't throw");
}

describe("Resolver", () => {
  // Some of the error messages in the resolver use a file path based on the
  // CWD, so we set it for these tests
  let originalCwd: string;

  before(() => {
    originalCwd = process.cwd();
    process.chdir(FIXTURE_HARDHAT_PROJECT_ROOT);
  });

  after(() => {
    process.chdir(originalCwd);
  });

  describe("Project files resolution", () => {
    it("Should throw if the file isn't part of the project", async () => {
      const resolver = await ResolverImplementation.create(
        FIXTURE_HARDHAT_PROJECT_ROOT,
        [],
      );

      let file = "foo.sol";
      await assertHardhatErrorAsync(
        () => resolver.resolveProjectFile(file),
        HardhatError.ERRORS.SOLIDITY.RESOLVING_INCORRECT_FILE_AS_PROJECT_FILE,
        { file },
      );

      file = "/asd/asd/foo.sol";
      await assertHardhatErrorAsync(
        () => resolver.resolveProjectFile(file),
        HardhatError.ERRORS.SOLIDITY.RESOLVING_INCORRECT_FILE_AS_PROJECT_FILE,
        { file },
      );
    });

    it("Should resolve them to project files with their path from the project root as sourceName", async () => {
      const resolver = await ResolverImplementation.create(
        FIXTURE_HARDHAT_PROJECT_ROOT,
        [],
      );

      assertResolvedProjectFile(
        await resolver.resolveProjectFile(
          path.join(FIXTURE_HARDHAT_PROJECT_ROOT, "contracts/File.sol"),
        ),
        "contracts/File.sol",
      );

      assertResolvedProjectFile(
        await resolver.resolveProjectFile(
          path.join(FIXTURE_HARDHAT_PROJECT_ROOT, "File.sol"),
        ),
        "File.sol",
      );

      assertResolvedProjectFile(
        await resolver.resolveProjectFile(
          path.join(FIXTURE_HARDHAT_PROJECT_ROOT, "npm/File.sol"),
        ),
        "npm/File.sol",
      );
    });

    it("Should validate that the files exists", async () => {
      const resolver = await ResolverImplementation.create(
        FIXTURE_HARDHAT_PROJECT_ROOT,
        [],
      );

      await assertHardhatErrorAsync(
        resolver.resolveProjectFile(
          path.join(FIXTURE_HARDHAT_PROJECT_ROOT, "nope.sol"),
        ),
        HardhatError.ERRORS.SOLIDITY.RESOLVING_NONEXISTENT_PROJECT_FILE,
        {
          file: "nope.sol",
        },
      );
    });
  });

  describe("Imports resolution", () => {
    describe("Without user remappings", () => {
      let resolver: Resolver;

      beforeEach(async () => {
        resolver = await ResolverImplementation.create(
          FIXTURE_HARDHAT_PROJECT_ROOT,
          [],
        );
      });

      describe("Imports from the project", () => {
        let contractsFileSol: ProjectResolvedFile;

        beforeEach(async () => {
          contractsFileSol = await resolver.resolveProjectFile(
            path.resolve(FIXTURE_HARDHAT_PROJECT_ROOT, "contracts/File.sol"),
          );
        });

        describe("Imports of project files", () => {
          describe("Relative imports", () => {
            it("Should resolve them to project files with their path from the project root as sourceName", async () => {
              assertResolvedProjectFile(
                await resolver.resolveImport(contractsFileSol, "./File2.sol"),
                "contracts/File2.sol",
              );

              assertResolvedProjectFile(
                await resolver.resolveImport(contractsFileSol, "../File.sol"),
                "File.sol",
              );

              assert.deepEqual(resolver.getRemappings(), []);
            });

            it("Should validate that the files exists with the right casing", async () => {
              await assertHardhatErrorAsync(
                resolver.resolveImport(contractsFileSol, "./nope.sol"),
                HardhatError.ERRORS.SOLIDITY.IMPORTED_FILE_DOESNT_EXIST,
                { importPath: "./nope.sol", from: "contracts/File.sol" },
              );

              await assertHardhatErrorAsync(
                resolver.resolveImport(contractsFileSol, "../file.sol"),
                HardhatError.ERRORS.SOLIDITY.IMPORTED_FILE_WITH_ICORRECT_CASING,
                {
                  importPath: "../file.sol",
                  from: "contracts/File.sol",
                  correctCasing: "File.sol",
                },
              );

              assert.deepEqual(resolver.getRemappings(), []);
            });
          });

          describe("Direct imports", () => {
            it("Should resolve them to project files with the direct import as sourceName", async () => {
              assertResolvedProjectFile(
                await resolver.resolveImport(
                  contractsFileSol,
                  "contracts/File.sol",
                ),
                "contracts/File.sol",
              );

              assertResolvedProjectFile(
                await resolver.resolveImport(
                  contractsFileSol,
                  "contracts/File2.sol",
                ),
                "contracts/File2.sol",
              );

              assertResolvedProjectFile(
                await resolver.resolveImport(contractsFileSol, "npm/File.sol"),
                "npm/File.sol",
              );

              assertResolvedProjectFile(
                await resolver.resolveImport(contractsFileSol, "File.sol"),
                "File.sol",
              );

              assert.deepEqual(resolver.getRemappings(), []);
            });

            it("Should validate that the files exist with the right casing", async () => {
              // Note that the imports here are considered local imports,
              // otherwise they would be validated as npm imports

              await assertHardhatErrorAsync(
                resolver.resolveImport(contractsFileSol, "contracts/nope.sol"),
                HardhatError.ERRORS.SOLIDITY.IMPORTED_FILE_DOESNT_EXIST,
                {
                  importPath: "contracts/nope.sol",
                  from: "contracts/File.sol",
                },
              );

              await assertHardhatErrorAsync(
                resolver.resolveImport(contractsFileSol, "contracts/file2.sol"),
                HardhatError.ERRORS.SOLIDITY.IMPORTED_FILE_WITH_ICORRECT_CASING,
                {
                  importPath: "contracts/file2.sol",
                  from: "contracts/File.sol",
                  correctCasing: "contracts/File2.sol",
                },
              );

              assert.deepEqual(resolver.getRemappings(), []);
            });

            it("Should treat files in the project root as local imports, even if they don't exist", async () => {
              assertResolvedProjectFile(
                await resolver.resolveImport(contractsFileSol, "File.sol"),
                "File.sol",
              );

              await assertHardhatErrorAsync(
                resolver.resolveImport(contractsFileSol, "nope.sol"),
                HardhatError.ERRORS.SOLIDITY.IMPORTED_FILE_DOESNT_EXIST,
                {
                  importPath: "nope.sol",
                  from: "contracts/File.sol",
                },
              );

              assert.deepEqual(resolver.getRemappings(), []);
            });

            it("Should treat files whose first directory exists in the project root as local imports, even if they don't exist", async () => {
              await assertHardhatErrorAsync(
                resolver.resolveImport(contractsFileSol, "npm/nope.sol"),
                HardhatError.ERRORS.SOLIDITY.IMPORTED_FILE_DOESNT_EXIST,
                {
                  importPath: "npm/nope.sol",
                  from: "contracts/File.sol",
                },
              );

              assert.deepEqual(resolver.getRemappings(), []);
            });
          });
        });

        describe("Imports of npm files", () => {
          it.todo("Should always treat hardhat/console.sol as an npm file");

          it.todo("Should validate that the files exist with the right casing");

          describe("Of a monorepo file", () => {
            it.todo("Should be resolved with npm/package@local/path/from/root");
          });

          describe("Of a direct npm dependency file", () => {
            it.todo(
              "Should be resolved with npm/package@version/path/from/root",
            );
          });

          describe("Of a hoisted npm dependency file", () => {
            it.todo(
              "Should be resolved with npm/package@version/path/from/root",
            );
          });

          describe("Of a scoped dependency file", () => {
            it.todo(
              "Should be resolved with npm/@scope/package@version/path/from/root",
            );
          });

          describe("Of package that's installed with an alternative name", () => {
            it.todo(
              "Should be resolved with npm/package@version/path/from/root using the package.json's name",
            );
          });
        });
      });

      describe("Imports from an npm package", () => {
        describe("Imports of the own package files", () => {
          describe("Relative imports", () => {
            it.todo("Should resolve it without needing a new remapping");
          });

          describe("Direct imports", () => {
            it.todo("Should resolve it and create a new remapping");
          });
        });

        describe("Imports of npm files", () => {
          describe("Of a monorepo file", () => {
            it.todo(
              "Should be resolved with npm/@scope/package@version/path/from/root",
            );
          });

          describe("Of a direct npm dependency file", () => {
            it.todo(
              "Should be resolved with npm/package@version/path/from/root",
            );
          });

          describe("Of a file within the hardhat project", () => {
            it.todo(
              "Should resolve them to project files with the direct import as sourceName",
            );
          });

          describe("Of the same dependency than the hardhat project but a different version", () => {
            it.todo(
              "Should be resolved with npm/package@version/path/from/root using the package.json's name",
            );
          });
        });
      });
    });

    describe("With user remappings", () => {
      describe("Resolver initialization", () => {
        it.todo("Should validate forbid remappings with npm/... context");

        it.todo("Should allow remappings with npm/... targets");

        it.todo(
          "Should validate and resolve npm/... targets of npm dependencies",
        );

        it.todo(
          "Should validate and resolve npm/... targets of monorepo dependencies",
        );
      });

      describe("Imports from the project", () => {
        describe("Imports into project files", () => {
          it.todo(
            "Should throw if the resulting sourceName would be considered an npm import if used as a direct import",
          );

          it.todo(
            "Should validate that the resulting sourceName exists and has the correct casing as a relative path from the project root",
          );

          it.todo("Should resolve it to the remapped sourceName");
        });

        describe("Imports into npm files", () => {
          describe("Using the npm/ prefix", () => {
            it.todo(
              "Should be equivalent to just importing that file through npm",
            );
          });
        });
      });

      describe("Imports from an npm package", () => {
        describe("Direct imports", () => {
          it.todo(
            "It should not be affected by a user remapping, even if the prefix matches",
            async () => {},
          );
        });
      });
    });
  });
});
