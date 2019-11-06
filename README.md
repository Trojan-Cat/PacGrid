This is a pacman simulator using JS, it is to be run in the terminal and uses the readline module in order to do this (A poor mans Colossal Cave Adventure)

# Instalation

NODE.js needs to be installed

- Clone the git
- Navigate to the file and open a terminal
- npm install
- npm start to run the application

# Test Data

The commands are case sensitive

PLACE 0,0,NORTH
MOVE --- 0,1,NORTH
MOVE --- 0,2,NORTH
MOVE --- 0,3,NORTH
REPORT --- EXPECTED X = 0, Y = 3, NORTH
MOVE -- Should be ignored
REPORT --- EXPECTED X = 0, Y = 3, NORTH
LEFT --- Should be facing the WEST wall
REPORT --- EXPECTED X = 0, Y = 3, WEST
MOVE -- 0,3,WEST
RIGHT --- 0,3,NORTH
RIGHT --- 0,3,EAST
MOVE --- 1,3,EAST
MOVE --- 2,3,EAST
MOVE --- 3,3,EAST
MOVE --- 3,3,EAST
REPORT --- expected X = 4, Y = 3, EAST

## Expected fails

PLACE 0,0,NORTHasdasd --- Will ignore the command
PLACE 0,0,NORTh --- Will ignore the command
PLACE 0,6,NORTH --- msg: y Value has to be between 0 and 4
PLACE 0,-1,NORTH ---

# Commands for the game

Welcome to Pacman, you will control a pacman placed onto a 5x5 grid
PLACE, will take in an X, Y, and direction cord
e.g: PLACE 1,2,NORTH
MOVE will move the pacman forwards by one step
LEFT will turn the packman to their left
RIGHT will turn the packman to their right
REPORT will tell you where the pacman is
H will bring up the controls
Q will exit the program

# TODO/Improvements

- Do checking to see if x and y are a number
- Write up boundary variables to test
- Unit tests
- Add in a check for if f is -1 and use it where an if has been repeated
- Ability to change the size of the grid, maybe ask for input on start
- A cool terminal output of the grid would be neat
