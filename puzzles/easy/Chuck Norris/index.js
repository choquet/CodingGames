print(readline()
    .split('')
    .map(c => (128 | c.charCodeAt(0)).toString(2).slice(1))
    .join('')
    .match(/(.)\1*/g)
    .map(c => ["00 ","0 "][c[0]] + '0'.repeat(c.length))
    .join(' '));