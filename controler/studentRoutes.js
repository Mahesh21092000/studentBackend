const express = require("express");
const router = express.Router();

const studentSchema = require("../model/studentSchema");

router.get("/", (req, res, next) => {
  studentSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.delete("/delete.student/:id", (req, res, next) => {
  studentSchema.findlByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router
  .route("/update-student/:id")
  .get((req, res, next) => {
    studentSchema.findById(req.params.id, (err, data) => {
      if (err) {
        return next(err);
      } else {
        return res.json(data);
      }
    });
  })
  .put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, data) => {
        if (err) {
          return next(err);
        } else {
          return res.json(data);
        }
      }
    );
  });

router.post("/login", (req, res, next) => {
  const {email} = req.body;
  studentSchema.findOne({ email :email}).then((student) => {
    if (student) {
      if(student.email === email){
      res.json("login success");
      
    } else {
      res.json("contact incorrect");
    }
  }else{
    res.json("no record found");
  }
  });
});

module.exports = router;
