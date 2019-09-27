var n = +readline(); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

var min = Infinity;

if(!temps) min = 0

temps = temps.split(" ");

for(var i = 0 ; i < temps.length ; i++){
    if(Math.abs(+temps[i]) < Math.abs(min)){
        min = temps[i];
    } else if(+temps[i] == Math.abs(min)){
        min = Math.abs(min);
    }
}

print(min);