const express = require("express");
const bodyParser = require("body-parser");
const teacherrouter = require("./routers/teacherrouter");
const teachersrouter = require("./routers/teachersrouter");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/teachers", teachersrouter);

app.use("/teacher", teacherrouter);

const server = app.listen(8080, () => {
  console.log(`Server running in port ${server.address().port}`);
});
