const express = require("express");
const app = express();
const controlsRoute = require("./routes/index");

app.use(express.json());


app.use("/api/controls", controlsRoute);
const PORT = 8080;

app.listen(PORT, () =>
  console.log(`Backend server is running at PORT: ${PORT}`)
);
