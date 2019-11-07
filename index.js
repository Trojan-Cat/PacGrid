// Needed a way to make this terminal based
const readline = require("readline");
//Using associative arry for the faces, so to easily change and check the input of a face to the array
const faces = { NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3 };

// The readline is fairly boilerplate from nodejs.org
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// This function will call itself again to get the new input, unless Q is entered which closes the readline
var recursiveAsyncReadLine = function() {
  rl.question(
    "Please input a command for pacman? (H for controls):",
    answer => {
      let testStr = answer.substring(0, 5);
      if (testStr === "PLACE") {
        breakPlace(answer);
        //PLACE();
        recursiveAsyncReadLine();
      } else {
        switch (answer) {
          case "MOVE":
            MOVE();
            recursiveAsyncReadLine();
            break;
          case "LEFT":
            LEFT();
            recursiveAsyncReadLine();
            break;
          case "RIGHT":
            RIGHT();
            recursiveAsyncReadLine();
            break;
          case "REPORT":
            REPORT();
            recursiveAsyncReadLine();
            break;
          case "Q":
            rl.close();
            break;
          case "H":
            Welcome();
            recursiveAsyncReadLine();
            break;
          default:
            console.log("Sorry that is not a command");
            recursiveAsyncReadLine();
            break;
        }
      }
    }
  );
};

// Starting the read line
recursiveAsyncReadLine();

//  Default start position will be out of the map therefore the Pacman won't move till a valid pacman is initialized
let Pacman = { x: -1, y: -1, f: -1 };

// Welcome shows the user how to play the game
const Welcome = () =>
  console.log(`Welcome to Pacman, you will control a pacman placed onto a 5x5 grid
Commands:
PLACE, will take in an X, Y, and direction cord
e.g: PLACE 1,2,NORTH
MOVE will move the pacman forwards by one step
LEFT will turn the packman to their left
RIGHT will turn the packman to their right
REPORT will tell you where the pacman is
H will bring up the controls
Q will exit the program`);

// If placements are to be made as a singlestring this will check through and break it up
// This does not do any checking but just returning where a value should be in the string
// TODO: Check if value of x and y are a number
let breakPlace = ans => {
  let placement = ans.trim().substring(5, 15);
  let x = parseInt(placement.substring(1, 2));
  let y = parseInt(placement.substring(3, 4));
  let f = placement.substring(5, 10);

  PLACE(x, y, f);
};

// This parses the string that was entered, it checks to see for a match in the associate array and then if it's there get's the value returned
let convertFace = f => {
  if (faces[f] === undefined) {
    return -1;
  } else {
    return faces[f];
  }
};

// Some of this checking is not that relevant anymore
function PLACE(x, y, f) {
  f = convertFace(f);
  if (x > 4 || x < 0 || x === NaN) {
    Pacman = { x: -1, y: -1, f: -1 };
    console.log("x Value has to be between 0 and 4");
  } else if (y > 4 || y < 0 || y === NaN) {
    Pacman = { x: -1, y: -1, f: -1 };
    console.log("y Value has to be between 0 and 4");
  } else if (f > 3 || f < 0) {
    Pacman = { x: -1, y: -1, f: -1 };
    console.log("f Value has to be between 0 and 3");
  } else {
    Pacman.x = x;
    Pacman.y = y;
    Pacman.f = f;
  }
  return Pacman;
}

module.exports = PLACE;

// Left and right commands just turns where pacman is facing
// The first if statement checks if the pacman last placed in valid, if not it skips the command
// TODO: Change the first if to be a check function?
function LEFT() {
  if (Pacman.f != -1) {
    if (Pacman.f === 0) {
      Pacman.f = 3;
    } else {
      Pacman.f--;
    }
  }
}

function RIGHT() {
  if (Pacman.f != -1) {
    if (Pacman.f === 3) {
      Pacman.f = 0;
    } else {
      Pacman.f++;
    }
  }
}

function MOVE() {
  if (Pacman.f != -1) {
    let oldMan = Pacman;
    if (Pacman.f === 0 && Pacman.y != 4) {
      Pacman = { x: oldMan.x, y: oldMan.y + 1, f: 0 };
    } else if (Pacman.f === 1 && Pacman.x != 4) {
      Pacman = { x: oldMan.x + 1, y: oldMan.y, f: 1 };
    } else if (Pacman.f === 2 && Pacman.y != 0) {
      Pacman = { x: oldMan.x, y: oldMan.y - 1, f: 2 };
    } else if (Pacman.f === 3 && Pacman.x != 0) {
      Pacman = { x: oldMan.x - 1, y: oldMan.y, f: 3 };
    }
  }
}

function REPORT() {
  if (Pacman.f === 0) {
    console.log(`X = ${Pacman.x}, Y = ${Pacman.y}, NORTH`);
  } else if (Pacman.f === 1) {
    console.log(`X = ${Pacman.x}, Y = ${Pacman.y}, EAST`);
  } else if (Pacman.f === 2) {
    console.log(`X = ${Pacman.x}, Y = ${Pacman.y}, SOUTH`);
  } else if (Pacman.f === 3) {
    console.log(`X = ${Pacman.x}, Y = ${Pacman.y}, WEST`);
  }
}
