const { add, subtract, multiply, divide } = require('../src/math');

describe('Math functions', () => {
    test('should add two numbers', () => {
        expect(add(2, 2)).toBe(4);
    });

    test('should subtract two numbers', () => {
        expect(subtract(2, 2)).toBe(0);
    });

    test('should multiply two numbers', () => {
        expect(multiply(2, 2)).toBe(4);
    });

    test('should divide two numbers', () => {
        expect(divide(2, 2)).toBe(1);
    });
});