import { expect, test } from "bun:test";
import { foo } from ".";

test("foo", () => {
  expect(foo()).toBe(42);
});
