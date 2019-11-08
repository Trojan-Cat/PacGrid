// Tests if pacman is in a valid place at first
// Runs through a positive or negative direction for placement as well as reseting at 0 or 3
module.exports = direction = (d, Pacman) => {
  if (Pacman.f != -1) {
    if (Pacman.f === 0 && d === "LEFT") {
      Pacman.f = 3;
    } else if (Pacman.f === 3 && d === "RIGHT") {
      Pacman.f = 0;
    } else if (d === "RIGHT") {
      Pacman.f++;
    } else {
      Pacman.f--;
    }
  }
};
