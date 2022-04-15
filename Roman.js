function convertRoman(romanNr) {
    if(romanNr.length > 1) {
        console.log('ssssss');
    }
    let twoSign = moreThenOne();
    return help(romanNr);
}

function moreThenOne(sign) {
    let unique = sign.replace("XC", "Y").replace("XL", "Q").replace("CD", "R").replace("CM", "H").replace("IX", "P").replace("IV", "K");
    console.log('unique', unique);
    if(unique === 'K') {
        return 4;
    } else if(sign === 'P') {
        return 9;
    } else {
        let signArr = unique.split('').map((value, index, array) => {
            console.log('value', value);
            if(value === 'I') {
                return 1;
            } else if(value === 'K') {
                return 4;
            } else if(value === 'V') {
                return 5;
            } else if( value === 'P') {
                return 9;
            } else if(value === 'X') {
                return 10;
            } else if(value === 'Q') {
                return 40;
            } else if(value === 'L') {
                return 50;
            } else if(value === 'Y') {
                return 90;
            } else if(value === 'C') {
                return 100;
            } else if(value === 'R') {
                return 400;
            } else if(value === 'D') {
                return 500;
            } else if(value === 'H')
                return 900;
            if(value === 'M') {
                return 1000;
            }
        });
        return signArr.reduce((prev, curr, index, arr) => {
            return prev + curr;
        }, 0);
    }
}
console.log('cool: ', moreThenOne('MCXIX'));
function help(asd) {
    let ninety = [
        'XC',
        'XCI',
        'XCII',
        'XCIII',
        'XCIV',
        'XCV',
        'XCVI',
        'XCVII',
        'XCVIII',
        'XCIX',
    ];
}
//console.log(convertRoman('II'));