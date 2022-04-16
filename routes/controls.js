const turnLeft = (rover) => {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
};

const turnRight = (rover) => {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
};

const movement = (rover, b) => {
  console.log("Move was called!");
  let moveBackward = b ? b : "f";
  let xIncrease = 0;
  let yIncrease = 0;

  switch (rover.direction) {
    case "N":
      yIncrease = -1;
      break;
    case "E":
      xIncrease = 1;
      break;
    case "S":
      yIncrease = 1;
      break;
    case "W":
      xIncrease = -1;
      break;
  }

  if (moveBackward === "b") {
    xIncrease *= -1;
    yIncrease *= -1;
  }

  let newLocation = [
    rover.location[0] + xIncrease,
    rover.location[1] + yIncrease,
  ];

  if (isObstacle(newLocation, rover)) {
    return false;
  }

  rover.location = newLocation;
  return true;
};

const isObstacle = (newLocation, rover) => {
  for (let i = 0; i < rover.obstacles.length; i++) {
    if (newLocation.toString() == rover.obstacles[i].toString()) {
      console.log("obstacle!");
      rover.status = "obstacle";
      return true;
    }
  }

  return false;
};

const resetLocation = (rover) => {
  rover.location = [
    (rover.location[0] + rover.grid[0]) % rover.grid[0],
    (rover.location[1] + rover.grid[1]) % rover.grid[1],
  ];
};

module.exports = {
  turnLeft,
  turnRight,
  movement,
  resetLocation,
};
