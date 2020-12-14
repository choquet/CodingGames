const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const OPERATION = readline();
const PSEUDO_RANDOM_NUMBER = +readline();
const ROTOR1 = readline();
const ROTOR2 = readline();
const ROTOR3 = readline();
const MESSAGE = readline();

const CAESAR_SHIFT = (string, number) => {
    return string.split("").reduce((acc, val, index) => {
        return acc + ALPHABET[(ALPHABET.indexOf(val) + number + index) % 26];
    }, "")
}

const CAESAR_UNSHIFT = (string, number) => {
    return string.split("").reduce((acc, val, index) => {
        return acc + ALPHABET[(ALPHABET.indexOf(val) - (number + index) % 26 + 26) % 26];
    }, "")
}

const ENCODE_ROTOR = (string, rotor) => {
    return string.split("").reduce((acc, val) => {
        return acc + rotor[ALPHABET.indexOf(val)];
    }, "")
}

const DECODE_ROTOR = (string, rotor) => {
    return string.split("").reduce((acc, val) => {
        return acc + ALPHABET[rotor.indexOf(val)];
    }, "")
}

const ENIGMA_ENCODE = (message, number, rotor1, rotor2, rotor3) => {
    message = CAESAR_SHIFT(message, number);
    message = ENCODE_ROTOR(message, rotor1);
    message = ENCODE_ROTOR(message, rotor2);
    message = ENCODE_ROTOR(message, rotor3);
    return message;
}

const ENIGMA_DECODE = (message, number, rotor1, rotor2, rotor3) => {
    message = DECODE_ROTOR(message, rotor3);
    message = DECODE_ROTOR(message, rotor2);
    message = DECODE_ROTOR(message, rotor1);
    message = CAESAR_UNSHIFT(message, number);
    return message;
}


switch(OPERATION) {
    case 'ENCODE': 
        console.log(ENIGMA_ENCODE(MESSAGE, PSEUDO_RANDOM_NUMBER, ROTOR1, ROTOR2, ROTOR3))
        break;
    case 'DECODE': 
        console.log(ENIGMA_DECODE(MESSAGE, PSEUDO_RANDOM_NUMBER, ROTOR1, ROTOR2, ROTOR3))
        break;
}