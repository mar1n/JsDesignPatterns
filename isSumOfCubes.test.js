const {sumOfCubes, findStrOfNumbers, divideByComma, leaveNumbers, removeComma } = require("./isSumOfCubes");

describe('sum of cubes', () => {
    test('remove first comma in array', () => {
        let arrWithCommas = [',', '2', '9', ',', '4', '5', ',', '9', '0', '2', '6', '3', '1', '5'];
        expect(removeComma(arrWithCommas)).toEqual(['2', '9', ',', '4', '5', ',', '9', '0', '2', '6', '3', '1', '5']);
    });
    test('leave Numbers', () => {
        let divideArr = ['Q', ',', '2', '9', ',', '4', '5', '[', '&', 'e', 'r', 'u', ',', '9', '0', '2', '6', '3', '1', '5'];
        expect(leaveNumbers(divideArr)).toEqual([',', '2', '9', ',', '4', '5', ',', '9', '0', '2', '6', '3', '1', '5']);
    });
    test('divide by comma', () => { 
        let randomStr = 'QK29a45[&erui9026315';
        expect(divideByComma(randomStr)).toEqual(['Q', ',', '2', '9', ',', '4', '5', '[', '&', 'e', 'r', 'u', ',', '9', '0', '2', '6', '3', '1', '5']);
     })
    test.skip('find all str of numbers in str', () => {
        let randomStr = 'QK29a45[&erui9026315';
        expect(findStrOfNumbers(randomStr)).toEqual([29, 45, 9026315])
     })
    test.skip('devide array', () => {
        let randomStr = 'QK29a45[&erui9026315';
        expect(sumOfCubes(randomStr)).toEqual('0 1 153 154 Lucky');
    });
    test.skip('find numbers', () => {
        let randomStr = 'QK29a45[&erui9026315';
        expect(sumOfCubes(randomStr)).toEqual('0 1 153 154 Lucky');
    });
    test.skip('cubes', () => {
        expect(sumOfCubes(randomStr)).toEqual('0 1 153 154 Lucky');
    });
});