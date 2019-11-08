This is a pacman simulator using JS, it is to be run in the terminal and uses the readline module in order to do this (A poor mans Colossal Cave Adventure)

# Instalation

NODE.js needs to be installed

- Clone the git
- Navigate to the file and open a terminal
- npm install
- npm start to run the application

# Testing

    Jest is being used to test for placements
    - Terminal
    - npm test

# Test Data

The commands are case sensitive

- PLACE 0,0,NORTH
- MOVE
- MOVE
- MOVE
- REPORT --- EXPECTED X = 0, Y = 3, NORTH
- MOVE -- Should be ignored
- REPORT --- EXPECTED X = 0, Y = 3, NORTH
- LEFT
- REPORT --- EXPECTED X = 0, Y = 3, WEST
- MOVE
- RIGHT
- RIGHT
- MOVE
- MOVE
- MOVE
- MOVE
- REPORT --- expected X = 4, Y = 3, EAST

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

[x] Do checking to see if x and y are a number
[x] Write up boundary variables for place to test
[x] Unit tests
[ ] Need more testing
[x] Add in a check for if f is -1 and use it where an if has been repeated
[ ] Ability to change the size of the grid, maybe ask for input on start
