const validators = require('./../../src/Helpers/validators');

test('should return true for valid number', () => {
    expect(validators.validateNumber(200)).toBe(true);
});
test('should return false for invalid number', () => {
    expect(validators.validateNumber('abc')).toBe(false);
});
test("should return true for valid email", () => {
    expect(validators.validateEmail("mukherjee_pronoy@yahoo.in")).toBe(true);
});
test("should return false for invalid Email", () => {
    expect(validators.validateEmail("a@@sADH@.COM")).toBe(false);
});
test("Should return false for empty array", () => {
    expect(validators.validateArray([])).toBe(false);
});