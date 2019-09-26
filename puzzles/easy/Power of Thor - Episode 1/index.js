var inputs = readline().split(' ');

var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var X = parseInt(inputs[2]); // Thor's starting X position
var Y = parseInt(inputs[3]); // Thor's starting Y position

var remainingTurns, direction;

// game loop
while (true) {
    
    // The remaining amount of turns Thor can move. Do not remove this line.
    remainingTurns = parseInt(readline()); 

    // Direction to the light
    direction = "";
    
    if (lightY > Y) {
        direction += "S";
        Y ++;
    } else if (lightY < Y) {
        direction += "N";
        Y --;
    }

    if (lightX > X) {
        direction += "E";
        X ++;
    } else if(lightX < X) {
        direction += "W";
        X --;
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(direction);
}