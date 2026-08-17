import { describe, expect, test } from "vitest";
import {
  add,
  subtract,
  multiply,
  divide,
} from "../src/calculator.js";

describe("Calculator", () => {
  test("add should return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtract should return the difference of two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiply should return the product of two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divide should return the quotient of two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide by zero should throw an error", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});