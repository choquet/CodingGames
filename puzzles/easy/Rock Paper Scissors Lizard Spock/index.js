const NUMBER_OF_PLAYER = +readline();
const NUMBER_OF_ROUND = Math.log2(NUMBER_OF_PLAYER)
const beatRock = () => ['P', 'S'];
const beatPaper = () => ['C', 'L'];
const beatScissors = () => ['R', 'S'];
const beatLizard = () => ['R', 'C'];
const beatSpock = () => ['P', 'L'];

class Player {
    constructor(number, sign) {
        this.number = number;
        this.sign = sign;
        this.opponents = [];
    }

    // return true if player a win otherwise false 
    static fight(a, b) {
        
        a.opponents.push(b.number);
        b.opponents.push(a.number);

        if(a.sign === b.sign) {
            return a.number < b.number
        }
        else {
            switch (b.sign) {
                case 'R':
                     return beatRock().includes(a.sign)
                case 'P':
                    return beatPaper().includes(a.sign)
                case 'C':
                    return beatScissors().includes(a.sign)
                case 'L':
                    return beatLizard().includes(a.sign)
                case 'S':
                    return beatSpock().includes(a.sign)
            }
        }
    }
}

// Get players
var players = [];
for (let i = 0; i < NUMBER_OF_PLAYER; i++) {
    [number, sign] = readline().split(' ');
    players.push(new Player(+number, sign));
}

// Play rounds
for (let i = 0; i < NUMBER_OF_ROUND; i++) {
    for (let j = players.length - 1; j >=0 ; j-=2 ) {
        let winner = Player.fight(players[j], players[j-1]);
        if (winner) {
            players.splice(j - 1, 1)
        } else {
            players.splice(j, 1)
        }
    }
}

console.log(players[0].number);
console.log(players[0].opponents.join(" "));
