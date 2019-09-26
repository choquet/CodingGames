var L = +readline();
var H = +readline();
var text = readline().toUpperCase();
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?".split('');
var ascii = {};
var i;

for (i = 0 ; i < H ; i++) {
    let ROW = readline();
    alphabet.forEach((char, index)=>{
        if(!ascii[char]) ascii[char] = [];
        ascii[char].push(ROW.substring( index * L , (index + 1) * L));
    });
}

var toAscii = (str) => {
    let result = "";
    for (i = 0; i < H; i++) {
        str.split('').forEach((char)=> {
            result += (ascii[char]) ? ascii[char][i] : ascii['?'][i];
        });
        result += "\n";
    }
    return result;
}

print(toAscii(text));