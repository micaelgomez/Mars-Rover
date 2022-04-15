const router = require("express").Router();
const { mainFunction } = require("./mainFunction");

router.get("/", (req, res) => {
  const { location, direction, grid, command, obstacles } = req.body;

  if (!command) {
    res.status(503).send("Command are required!");
  } else {
    let response = mainFunction(location, direction, grid, command, obstacles);
    res.status(200).send(response);
  }

});

module.exports = router;
