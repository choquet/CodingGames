const HAPPY = ':)'
const SAD = ':('

let sumOfSquare = (digitAsString) => digitAsString.split("").reduce((sum, digit) => sum + (+digit)**2 , 0)

const N = parseInt(readline());

for (let i = 0; i < N; i++) {
    var x = readline();
    var values = new Set();
    y = x
    while (y !== '1') {
        y = '' + y
        if (values.has(y)) break;
        values.add(y);
        y = sumOfSquare(y);
    }

    if (y === '1') {
        console.log(x, HAPPY);
    } else {
        console.log(x, SAD);
    }
}
