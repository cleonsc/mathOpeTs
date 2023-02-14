import { add, divide, multiply, subtract } from '../index';

const number1 = 20;
const number2 = 10;
const zero = 0;

describe('Add method', () => {
  test('It should sum two numbers', () => {
    expect(add(number1, number2)).toBe(30);
  });
});

describe('Substract method', () => {
  test('It should substract two numbers', () => {
    expect(subtract(number1, number2)).toBe(10);
  });
});

describe('Multiply method', () => {
  test('It should multiply two numbers', () => {
    expect(multiply(number1, number2)).toBe(200);
  });
});
describe('Divide method', () => {
  test('It should divide two numbers', () => {
    expect(divide(number1, number2)).toBe(2);
  });

  test('It should throw an error when try to divide by zero', () => {
    expect(() => divide(number1, zero)).toThrow('El divisor no puede ser menor o igual a cero.');
  });
});
