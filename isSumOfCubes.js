function divideByComma(randomStr) {
  let arrOfStrNum = [];
  let arrStr = randomStr.split("").map((value, index, arr) => {
    if (
      Number.isNaN(parseInt(arr[index])) &&
      arr[index + 1] === "-" &&
      !Number.isNaN(parseInt(arr[index + 2]))
    ) {
      return ",";
    }
    if (
      Number.isNaN(parseInt(arr[index])) &&
      !Number.isNaN(parseInt(arr[index + 1])) &&
      arr[index] !== "-"
    ) {
      return ",";
    }
    return value;
  });

  return arrStr;
}

function sumOfCubes(randomStr) {
  let arrOfNumbers = [];
  let arrStr = randomStr.split("");
  for (let x = 0; x < arrStr.length; x++) {
    console.log("qwe", parseInt(arrStr[x]));
    if (
      !Number.isNaN(parseInt(arrStr[x])) &&
      !Number.isNaN(parseInt(arrStr[x + 1])) &&
      !Number.isNaN(parseInt(arrStr[x + 2]))
    ) {
      arrOfNumbers.push(arrStr[x] + arrStr[x + 1] + arrStr[x + 2]);
    }
  }
  return arrOfNumbers;
}

function findStrOfNumbers(randomStr) {
  let arrOfStrNum = [];
  let arrStr = randomStr.split("").map((value, index, arr) => {
    if (
      Number.isNaN(parseInt(arr[index])) &&
      !Number.isNaN(parseInt(arr[index + 1]))
    ) {
      return ",";
    }
  });
  // for(let x = 0; x< arrStr.length; x++) {
  //     if(!Number.isNaN(parseInt(arrStr[x])) && !Number.isNaN(parseInt(arrStr[x + 1]))) {

  //     }
  // }
  console.log("xxx", arrStr);
  return arrStr;
}

function leaveNumbers(arrStr) {
  return arrStr.filter((value) => {
    if (value === ",") {
      return value;
    }
    if (value === "-") {
      return value;
    }
    if (!Number.isNaN(parseInt(value))) {
      return value;
    }
  });
}

function removeComma(arrComma) {
  if (arrComma[0] === ",") {
    arrComma.shift();
    return arrComma;
  }
  return arrComma;
}

function toThreeNum(arr) {
  let newArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (arr[x].length > 3) {
      let p = 3;
      let n = 3;
      for (let y = 0; y < Math.ceil(arr[x].length / 3); y++) {
        if (y === 0) {
          newArr.push(arr[x].slice(0, 3));
        } else if (y === Math.ceil(arr[x].length / 3) - 1) {
          //console.log('test', arr[x].slice(n, arr[x].length));
          newArr.push(arr[x].slice(n, arr[x].length));
        } else {
          p += 3;
          newArr.push(arr[x].slice(n, p));
          n += 3;
        }
      }
    } else {
      newArr.push(arr[x]);
    }
  }
  return newArr;
}

function checkCubic(value) {
  let result = value.split("").reduce((prev, next) => {
    return Math.pow(Number(next), 3) + prev;
  }, 0);
  return result;
}

module.exports = {
  sumOfCubes,
  findStrOfNumbers,
  divideByComma,
  leaveNumbers,
  removeComma,
  toThreeNum,
  checkCubic
};
