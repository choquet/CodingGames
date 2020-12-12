var inputs = readline().split(' ');
const W = +inputs[0];
const H = +inputs[1];

var mat = [];
var solution = [];

for (let i = 0; i < H; i++) {
    const line = readline();
    mat[i] = line.split('');
}

var findExit = function(matrix, y, x){
    y = y + 1;
    x = x;
    while (matrix[y][x] === "|"){
        if(x + 1 < matrix[y].length && matrix[y][x+1] === "-"){
            x+=3;
        } else if (x - 1 > -1 && matrix[y][x-1] === "-"){
            x-=3;
        }
        y++;
    }
    return matrix[y][x];
}

var printSolution = (sol) => {
    for(let i in sol){
        console.log(sol[i]);
    }
}

for (let j = 0; j < W; j++) {
    if(mat[0][j] !== " "){
        solution.push(mat[0][j] + "" + findExit(mat, 0, j))
    }
}

printSolution(solution);