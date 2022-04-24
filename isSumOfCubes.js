function divideByComma(randomStr) {
    let arrOfStrNum = [];
    let arrStr = randomStr.split('').map((value, index, arr) => {
        if(Number.isNaN(parseInt(arr[index])) && arr[index + 1] === "-" &&  !Number.isNaN(parseInt(arr[index + 2]))) {
            return ","
        }
        if(Number.isNaN(parseInt(arr[index])) && !Number.isNaN(parseInt(arr[index + 1])) && arr[index] !== "-") {
            return ","
        }
        return value;
    });

    return arrStr;
}

function sumOfCubes(randomStr) {
    let arrOfNumbers = [];
    let arrStr = randomStr.split('');
    for(let x = 0; x < arrStr.length; x++) {
        console.log('qwe', parseInt(arrStr[x]));
        if(!Number.isNaN(parseInt(arrStr[x])) && !Number.isNaN(parseInt(arrStr[x + 1])) && !Number.isNaN(parseInt(arrStr[x + 2]))) {
            arrOfNumbers.push(arrStr[x] + arrStr[x + 1] + arrStr[x + 2]);
        }
    }
    return arrOfNumbers;
}

function findStrOfNumbers(randomStr) {
    let arrOfStrNum = [];
    let arrStr = randomStr.split('').map((value, index, arr) => {
        if(Number.isNaN(parseInt(arr[index])) && !Number.isNaN(parseInt(arr[index + 1]))) {
            return ",";
        }
    });
    // for(let x = 0; x< arrStr.length; x++) {
    //     if(!Number.isNaN(parseInt(arrStr[x])) && !Number.isNaN(parseInt(arrStr[x + 1]))) {

    //     }
    // }
    console.log('xxx',arrStr);
    return arrStr;
}

function leaveNumbers(arrStr) {
    return arrStr.filter(value => {
        if(value === ',') {
            return value;
        }
        if(value === "-") {
            return value;
        }
        if(!Number.isNaN(parseInt(value))) {
            return value;
        }
    });
}

module.exports = {sumOfCubes, findStrOfNumbers, divideByComma, leaveNumbers };