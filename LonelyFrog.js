let counter = 0;
function jumpTo(x,y) {
    counter+= 1;
    if(x === y) {
        return counter;
    } else {
        return x * 2 === y ? counter : jumpTo(x * 2, y);
    }

}

console.log(jumpTo(1,8));