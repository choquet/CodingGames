/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = +readline();

var arr = [];
var minDistance = Infinity;
var curDistance;

var distance = (a, b) => Math.abs(a-b)

for (var i = 0 ; i < N ; i++) {
    arr.push(+readline());
}

arr.sort((a, b) => a - b)

for (var i = 0 ; i < N - 1 ; i++) {
    curDistance = distance(arr[i], arr[i+1]);
    if(curDistance < minDistance) minDistance = curDistance;
}

print(minDistance);