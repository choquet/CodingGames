const n = +readline();

let decodeTable = { maxLengthCode: 0 };
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    decodeTable[inputs[0]] = String.fromCharCode(+inputs[1])
}

const s = readline().split("");

let curCode = "";
let solution = "";
for (let i = 0; i < s.length; i++) {
    curCode += s[i];
    if (decodeTable[curCode]) {
        solution += decodeTable[curCode];
        curCode = "";
    }
}

if (curCode.length) {
    console.log('DECODE FAIL AT INDEX',s.length - curCode.length);
} else {
    console.log(solution);
}
