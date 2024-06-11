import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { resolve } from "../src/node-resolution.js";

describe("Node.js resolution", () => {
  it("Should resolve modules correctly", () => {
    const resolved = resolve({
      toResolve: "@nomicfoundation/hardhat-utils/error",
      from: import.meta.dirname,
    });

    // We don't actually validate this behavior, we just want to make sure that
    // it finds it.
    assert.notEqual(resolved, undefined);
  });

  it("Should return undefined for non-existent modules", () => {
    const resolved = resolve({
      toResolve: "fooo",
      from: import.meta.dirname,
    });

    assert.equal(resolved, undefined);
  });
});
