const nthFibo = require("./nthFibonacci");

describe('test fibonacci', () => {
    test('fibo rocks', () => {
        let result = nthFibo(2);
        expect(result).toEqual(2);
    });
});