const { turnLeft, turnRight, movement, resetLocation } = require("./controls");

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
    if (rover.status === "ok") {
      switch (command.charAt(i)) {
        case "r":
          turnRight(rover);
          break;

        case "l":
          turnLeft(rover);
          break;

        case "f":
          if (!movement(rover)) break;
          break;

        case "b":
          if (!movement(rover, "b")) break;
          break;
      }
    }
    resetLocation(rover);
  }

  // return rover position
  return `New rover location:[${rover.location[0]},${rover.location[1]}]. 
  Direction: ${rover.direction}. 
  Grid: [${rover.grid}]. 
  Obstacles: [ ${rover.obstacles.map((e) => {
    return `[${e}]`;
  })} ]. 
  Status: ${rover.status} `;
};

module.exports = {
  mainFunction,
};
