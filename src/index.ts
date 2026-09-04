import { Calculator } from "./calculator";

const calc = new Calculator();
const a = 10;
const b = 5;

console.log(`Addition: ${a} + ${b} = ${calc.add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${calc.subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${calc.multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${calc.divide(a, b)}`);

try {
  calc.divide(a, 0);
} catch (e) {
  if (e instanceof Error) {
    console.log(`Error handled: ${e.message}`);
  }
}
