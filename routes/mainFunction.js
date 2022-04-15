const { turnLeft, turnRight, move, resetLocation } = require("./controls");

const mainFunction = (location, direction, grid, command, obstacles) => {
  //Rover Data
  let rover = {
    location: location ? location : [0, 0],
    direction: direction ? direction : "N",
    grid: grid ? grid : [100, 100],
    obstacles: obstacles ? obstacles : [],
    status: "ok",
  };

  // Execution
  for (let i = 0; i < command.length; i++) {
    switch (command.charAt(i)) {
      case "r":
        turnRight(rover);
        break;

      case "l":
        turnLeft(rover);
        break;

      case "f":
        if (!move(rover)) break;
        break;

      case "b":
        if (!move(rover, "b")) break;
        break;
    }
    resetLocation(rover);
  }

  // return rover position
  return `New rover position:[${rover.location[0]},${rover.location[1]}]. Direction: ${rover.direction}. Status: ${rover.status}  `;
};

module.exports = {
  mainFunction,
};
