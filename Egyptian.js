var decimal = 0.666,
    numerator = decimal,
    denominator = 1;

while (numerator % 1) numerator *= 10;
denominator = numerator / decimal;

console.log(numerator + " / " + denominator);