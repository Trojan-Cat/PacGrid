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

const faceWrong = `f Value has to be between North, East, South, West`;
const yWrong = `y Value has to be between 0 and 4`;
const xWrong = `x Value has to be between 0 and 4`;
const question = `Please input a command for pacman? (H for controls):`;
const notCommand = `Sorry that is not a command`;

const PacmanFalse = { x: -1, y: -1, f: -1 };

module.exports = {
  Welcome,
  PacmanFalse,
  faceWrong,
  yWrong,
  xWrong,
  question,
  notCommand
};
