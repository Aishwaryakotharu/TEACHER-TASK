const express = require("express");
const teachers = require("../models/Teachers");

const teachersrouter = express.Router();

teachersrouter
  .get("/", (req, res) => {
    res.status(200).json({ teachers });
  })
  .post("/", (req, res) => {
   console.log(req.body);
  if (!req.body.content) {
    teachers.push(req.body);

    res.status(200).json({ message: "teacher created successfully" });
  } else {
    res.status(400).send("Bad Request");
  }
})
.delete("/", (req, res) => {
  res.status(200).json({ teachers:id });
  const { id } = req.params;
  let requiredteacherIndex;
  const requiredteacher = teachers.find((teacher, teacherIndex) => {
    if (parseInt(id) === teacher.id) {
      requiredteacherIndex = teacherIndex;
      return true;
    }
    return false;
  });
  if (requiredteacher) {
    teachers.splice(requiredteacherIndex, 1);
    res.status(200).json({ message: "teacher has been deleted" });
  } else {
    res.status(400).send("Bad Request");
  }
});

module.exports = teachersrouter;