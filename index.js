// Needed a way to make this terminal based
const readline = require("readline");

//Importing custom modules
const direction = require("./direction");
const myConstants = require("./constants");

const {
  Welcome,
  PacmanFalse,
  faceWrong,
  yWrong,
  xWrong,
  question,
  notCommand
} = myConstants;

//Using associative arry for the faces, so to easily change and check the input of a face to the array
const faces = { NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3 };

// The readline is fairly boilerplate from nodejs.org
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// This function will call itself again to get the new input, unless Q is entered which closes the readline
var recursiveAsyncReadLine = function() {
  rl.question(question, answer => {
    let ans = answer.toUpperCase();
    let testStr = ans.substring(0, 5);
    if (testStr === "PLACE") {
      breakPlace(ans);
      recursiveAsyncReadLine();
    } else {
      switch (ans) {
        case "Q":
          rl.close();
          break;
        case "H":
          Welcome();
          recursiveAsyncReadLine();
          break;
        case "MOVE":
          MOVE();
          recursiveAsyncReadLine();
          break;
        case "LEFT":
          callTurn("LEFT");
          recursiveAsyncReadLine();
          break;
        case "RIGHT":
          callTurn("RIGHT");
          recursiveAsyncReadLine();
          break;
        case "REPORT":
          REPORT();
          recursiveAsyncReadLine();
          break;

        default:
          console.log(notCommand);
          recursiveAsyncReadLine();
          break;
      }
    }
  });
};

// Need this for the closing of the readline function for jest, I did use --forceExit at first but changed to just exporting a module
closeRead = () => {
  rl.close();
};

// Starting the read line
recursiveAsyncReadLine();

//  Default start position will be out of the map therefore the Pacman won't move till a valid pacman is initialized
let Pacman = { x: -1, y: -1, f: -1 };

// If placements are to be made as a singlestring this will check through and break it up
// This does not do any checking but just returning where a value should be in the string
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
    return false;
  } else {
    return faces[f];
  }
};

// Will palce the pacman, goes through some checks here
function PLACE(x, y, f) {
  f = convertFace(f);
  if (x > 4 || x < 0 || isNaN(x)) {
    Pacman = PacmanFalse;
    console.log(xWrong);
  } else if (y > 4 || y < 0 || isNaN(y)) {
    Pacman = PacmanFalse;
    console.log(yWrong);
  } else if (f > 3 || f < 0 || f === false) {
    Pacman = PacmanFalse;
    console.log(faceWrong);
  } else {
    Pacman.x = x;
    Pacman.y = y;
    Pacman.f = f;
  }
  return Pacman;
}

// Calls the direction function which will change the direction that the pacman is facing
callTurn = d => {
  Pacman.f === direction(d, Pacman);
  return Pacman;
};

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
  return Pacman;
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
  return Pacman;
}

module.exports = { PLACE, closeRead, MOVE, callTurn };
