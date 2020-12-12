var matrix = [];
var gridValid = true;

for (let i = 0; i < 9; i++) {
    matrix[i] = readline().split(' ');
}

/*
 * Line Number
 * ┏━━━┳━━━┳━━━┓
 * ┃111┃111┃111┃
 * ┃222┃222┃222┃
 * ┃333┃333┃333┃
 * ┣━━━╋━━━╋━━━┫
 * ┃444┃444┃444┃
 * ┃555┃555┃555┃
 * ┃666┃666┃666┃
 * ┣━━━╋━━━╋━━━┫
 * ┃777┃777┃777┃
 * ┃888┃888┃888┃
 * ┃999┃999┃999┃
 * ┗━━━┻━━━┻━━━┛
 */
var isLineValid = (mat, i) => {
    return [...mat[i]].sort().join("") === "123456789"
}

/*
 * Column Number
 * ┏━━━┳━━━┳━━━┓
 * ┃123┃456┃789┃
 * ┃123┃456┃789┃
 * ┃123┃456┃789┃
 * ┣━━━╋━━━╋━━━┫
 * ┃123┃456┃789┃
 * ┃123┃456┃789┃
 * ┃123┃456┃789┃
 * ┣━━━╋━━━╋━━━┫
 * ┃123┃456┃789┃
 * ┃123┃456┃789┃
 * ┃123┃456┃789┃
 * ┗━━━┻━━━┻━━━┛
 */
var isColumnValid = (mat, i) => {
    var column = []
    for (let j = 0; j < 9; j++) {
        column.push(mat[j][i])
    }
    return column.sort().join("") === "123456789"
}

/*
 * SubGrid Number
 * ┏━━━┳━━━┳━━━┓
 * ┃111┃222┃333┃
 * ┃111┃222┃333┃
 * ┃111┃222┃333┃
 * ┣━━━╋━━━╋━━━┫
 * ┃444┃555┃666┃
 * ┃444┃555┃666┃
 * ┃444┃555┃666┃
 * ┣━━━╋━━━╋━━━┫
 * ┃777┃888┃999┃
 * ┃777┃888┃999┃
 * ┃777┃888┃999┃
 * ┗━━━┻━━━┻━━━┛
 */
var isSubGridValid = (mat, i) => {
    var subGrid = []
    for (let j = parseInt(i / 3) * 3; j < parseInt(i / 3) * 3 + 3; j++) {
        for (let k = (i * 3) % 9; k < (i * 3) % 9 + 3; k++) {
            console.error(j,k)
            subGrid.push(mat[j][k])
        }
    }
    return subGrid.sort().join("") === "123456789"
}

for (let i = 0; i < 9; i++) {
    if(!isLineValid(matrix, i)
      || !isColumnValid(matrix, i)
      || !isSubGridValid(matrix, i)) {
        gridValid = false
        break;
    }
}

console.log(gridValid);
