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
    let rl = req.body.ids;
    let countOf = 0;
    rl.forEach(id => {
      teachers.forEach((teacher, teacherindex) => {
        if (teacher.id === id) {
          teachers.splice(teacherindex, 1);
          countOf++;
        }
      });
    });
    if (countOf !== 0) {
      res
        .status(200)
        .send({
          message: `${countOf} Teachers detail removed from the list`
        });
    } 
    else
     {
      res.status(400).send({ error:  "Bad Request. Invalid Teacher IDs" });
    }
  });

module.exports = teachersrouter;