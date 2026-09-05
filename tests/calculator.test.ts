import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    it("adds two positive numbers", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it("adds two negative numbers", () => {
      expect(calculator.add(-4, -6)).toBe(-10);
    });

    it("adds a positive and a negative number", () => {
      expect(calculator.add(10, -3)).toBe(7);
    });

    it("adds zero to a number", () => {
      expect(calculator.add(0, 42)).toBe(42);
      expect(calculator.add(42, 0)).toBe(42);
    });

    it("adds floating-point numbers", () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("subtract", () => {
    it("subtracts two positive numbers", () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    it("subtracts a larger number from a smaller one", () => {
      expect(calculator.subtract(3, 10)).toBe(-7);
    });

    it("subtracts two negative numbers", () => {
      expect(calculator.subtract(-5, -2)).toBe(-3);
    });

    it("subtracts zero from a number", () => {
      expect(calculator.subtract(7, 0)).toBe(7);
    });

    it("produces zero when subtracting equal numbers", () => {
      expect(calculator.subtract(9, 9)).toBe(0);
    });
  });

  describe("multiply", () => {
    it("multiplies two positive numbers", () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    it("multiplies two negative numbers", () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    it("multiplies a positive and a negative number", () => {
      expect(calculator.multiply(5, -2)).toBe(-10);
    });

    it("returns zero when multiplying by zero", () => {
      expect(calculator.multiply(0, 99)).toBe(0);
      expect(calculator.multiply(99, 0)).toBe(0);
    });

    it("returns the same number when multiplying by one", () => {
      expect(calculator.multiply(7, 1)).toBe(7);
    });
  });

  describe("divide", () => {
    it("divides two positive numbers", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it("divides producing a non-integer result", () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    it("divides a negative number by a positive number", () => {
      expect(calculator.divide(-9, 3)).toBe(-3);
    });

    it("divides two negative numbers", () => {
      expect(calculator.divide(-12, -4)).toBe(3);
    });

    it("returns zero when dividing zero by a number", () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    it("returns the same number when dividing by one", () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });
  });

  describe("divide by zero", () => {
    it("throws when dividing a positive number by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow("Division by zero is not allowed");
    });

    it("throws when dividing a negative number by zero", () => {
      expect(() => calculator.divide(-5, 0)).toThrow("Division by zero is not allowed");
    });

    it("throws when dividing zero by zero", () => {
      expect(() => calculator.divide(0, 0)).toThrow("Division by zero is not allowed");
    });

    it("throws an Error instance", () => {
      expect(() => calculator.divide(1, 0)).toThrow(Error);
    });
  });
});
