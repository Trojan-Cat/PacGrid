// Creating a basic map that is five by five with just manually entering the numbers at first
// TODO: Change so that Map Height and width can be parameters to enter at start of new game
let maps = [[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]];
const face = [0, 1, 2, 3];
// Rather than north, east, etc.. I am using 0, 1, 2, 3 that way if it is left, 
// I can just minus 1 and if right I just add 1, and when it is > 3 it resets to 0, and < 0 changes to 3

//  Default start position
let Pacman = { x: -1, y: -1, f: -1 }

function PLACE(x, y, f) {
    if (x > 4 || x < 0) {
        Pacman = { x: -1, y: -1, f: -1 }
        console.log('x Value has to be between 0 and 4')
    }
    else if (y > 4 || y < 0) {
        Pacman = { x: -1, y: -1, f: -1 }
        console.log('y Value has to be between 0 and 4')
    } else if (f > 3 || f < 0) {
        Pacman = { x: -1, y: -1, f: -1 }
        console.log('f Value has to be between 0 and 3')
    } else {
        Pacman.x = x;
        Pacman.y = y;
        Pacman.f = f;
        console.log(Pacman);
    }
}

// Left and right commands just turns where pacman is facing
function LEFT() {
    if (Pacman.x != -1) {
        if (Pacman.f === 0) {
            Pacman.f = 3
        } else {
            Pacman.f--
        }
        console.log(Pacman);
    }
}

function RIGHT() {
    if (Pacman.x != -1) {
        if (Pacman.f === 3) {
            Pacman.f = 0
        } else {
            Pacman.f++
        }
    }
}

function MOVE() {
    if (Pacman.x != -1) {
        let oldMan = Pacman;
        if (Pacman.f === 0 && Pacman.y != 0) {
            Pacman = { x: oldMan.x, y: oldMan.y - 1, f: 0 }
        } else if (Pacman.f === 1 && Pacman.x != 4) {
            Pacman = { x: oldMan.x + 1, y: oldMan.y, f: 1 }
        } else if (Pacman.f === 2 && Pacman.y != 4) {
            Pacman = { x: oldMan.x, y: oldMan.y + 1, f: 2 }
        } else if (Pacman.f === 3 && Pacman.x != 0) {
            Pacman = { x: oldMan.x - 1, y: oldMan.y, f: 3 }
        }
        console.log(Pacman);
    }

}

function REPORT() {
    if (Pacman.f === 0) {
        console.log(`X = ${Pacman.x}, Y = ${Pacman.y}, NORTH`)
    } else if (Pacman.f === 1) {
        console.log(`X = ${Pacman.x}, Y = ${Pacman.y}, EAST`)
    } else if (Pacman.f === 2) {
        console.log(`X = ${Pacman.x}, Y = ${Pacman.y}, SOUTH`)
    } else if (Pacman.f === 3) {
        console.log(`X = ${Pacman.x}, Y = ${Pacman.y}, WEST`)
    }
}


// We want to map through the array of commands, and have a special stop on taking any other commands until a valid place command is placed
function commands(arr) {
    if (arr) {

    }
}
