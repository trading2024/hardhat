import path from "node:path";
import { describe, it } from "node:test";

import { ResolverImplementation } from "../src/index.js";
import { formatRemapping } from "../src/remappings.js";

describe("Resolver", () => {
  describe("Without user remappings", () => {
    const packageRoot = path.resolve(
      import.meta.dirname,
      "test-fixtures/without-remappings",
    );

    it("Should resolve local modules correctly", async () => {
      const resolver = await ResolverImplementation.create(packageRoot, []);

      const localFile = await resolver.resolveProjectFile(
        path.resolve(packageRoot, "A.sol"),
      );

      console.log("Local file 'A.sol'");
      console.log(localFile);

      const dependencyDepSol = await resolver.resolveImport(
        localFile,
        "dependency/Dep.sol",
      );

      console.log("'dependency/Dep.sol' imported from 'A.sol'");
      console.log(dependencyDepSol);

      const scopeDependencyDepSol = await resolver.resolveImport(
        dependencyDepSol,
        "@scope/dependency/Dep.sol",
      );

      console.log(
        "'@scope/dependency/Dep.sol' imported from 'dependency/Dep.sol'",
      );
      console.log(scopeDependencyDepSol);

      const scopeDependencyDepSolFromLocal = await resolver.resolveImport(
        localFile,
        "@scope/dependency/Dep.sol",
      );

      console.log("'@scope/dependency/Dep.sol' imported from 'A.sol'");
      console.log(scopeDependencyDepSolFromLocal);

      console.log(
        "The local file A.sol imported as 'without-remappings/A.sol' from 'dependency/Dep.sol'",
      );
      const localFileAsDependency = await resolver.resolveImport(
        dependencyDepSol,
        "without-remappings/A.sol",
      );
      console.log(localFileAsDependency);

      console.log("Automatically generated remappings for that to work");
      console.log(resolver.getRemappings().map(formatRemapping));
    });

    it.only("Should not apply user remappings without context to local direct imports within npm packages", async () => {
      const resolver = await ResolverImplementation.create(packageRoot, [
        "contracts/=",
      ]);

      const localFile = await resolver.resolveProjectFile(
        path.resolve(packageRoot, "A.sol"),
      );

      const localRemappedFile = await resolver.resolveImport(
        localFile,
        "contracts/A.sol",
      );

      console.log(
        `localFile === localRemappedFile`,
        localFile === localRemappedFile,
      );

      const dependencyDepSol = await resolver.resolveImport(
        localFile,
        "dependency/Dep.sol",
      );

      const maybeRemappedDependencyFile = await resolver.resolveImport(
        dependencyDepSol,
        "contracts/Dep.sol",
      );

      const _ = await resolver.resolveImport(
        dependencyDepSol,
        "@scope/dependency/Dep.sol",
      );

      console.log(await resolver.resolveImport(dependencyDepSol, "Dep.sol"));

      console.log(maybeRemappedDependencyFile);

      console.log("Automatically generated remappings for that to work");
      console.log(resolver.getRemappings().map(formatRemapping));
    });
  });
});
