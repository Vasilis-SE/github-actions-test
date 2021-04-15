const {addition,multiply} = require('../../../src/models/operations');

test('Add 1 + 2 is equal to 3', () => {
    expect(addition(1,2)).toBe(3);
}); 

test('Multiply 1 * 2 is equal to 2', () => {
    expect(multiply(1,2)).toBe(4);
}); 