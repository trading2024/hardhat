import path from "node:path";
import { beforeEach, describe, it } from "node:test";

import { ResolverImplementation } from "../src/dependency-resolver.js";
import { Resolver } from "../src/types.js";

const FIXTURE_HARDHAT_PROJECT_ROOT = path.resolve(
  import.meta.dirname,
  "test-fixtures/monorepo/packages/hardhat-project",
);

describe("Resolver", () => {
  describe("Project files resolution", () => {
    it.todo(
      "Should resolve them to project files with their path from the project root as sourceName",
    );

    it.todo("Should validate that the files exists with the right casing");
  });

  describe("Without user remappings", () => {
    let resolver: Resolver;

    beforeEach(async () => {
      resolver = await ResolverImplementation.create(
        FIXTURE_HARDHAT_PROJECT_ROOT,
        [],
      );
    });

    describe("Imports from the project", () => {
      describe("Imports of project files", () => {
        describe("Relative imports", () => {
          it.todo(
            "Should resolve them to project files with their path from the project root as sourceName",
          );

          it.todo(
            "Should validate that the files exists with the right casing",
          );
        });

        describe("Direct imports", () => {
          it.todo(
            "Should resolve them to project files with the direct import as sourceName",
          );

          it.todo("Should validate that the files exist with the right casing");

          it.todo("Should treat files in the project root as local imports");

          it.todo(
            "Should treat files whose first directory exists in the project root as local imports",
          );
        });
      });

      describe("Imports of npm files", () => {
        it.todo("Should always treat hardhat/console.sol as an npm file");

        it.todo("Should validate that the files exist with the right casing");

        describe("Of a monorepo file", () => {
          it.todo("Should be resolved with npm/package@local/path/from/root");
        });

        describe("Of a direct npm dependency file", () => {
          it.todo("Should be resolved with npm/package@version/path/from/root");
        });

        describe("Of a hoisted npm dependency file", () => {
          it.todo("Should be resolved with npm/package@version/path/from/root");
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
        describe("Relative imports", () => {});

        describe("Direct imports", () => {});
      });

      describe("Imports of npm files", () => {
        describe("Of a monorepo file", () => {});

        describe("Of a direct npm dependency file", () => {});

        describe("Of a file within the hardhat project", () => {});

        describe("Of the same dependency than the hardhat project but a different version", () => {});
      });
    });
  });

  describe("With user remappings", () => {
    describe("Resolver initialization", () => {});

    describe("Imports from the project", () => {
      describe("Imports into project files", () => {});

      describe("Imports into npm files", () => {
        describe("Using the npm/ prefix", () => {});

        describe("Trying to resolve npm package names", () => {});
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
