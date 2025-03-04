const express = require("express");
const { EmployeeModel } = require("../model/employeeModel");
const employeeRouter = express.Router();

employeeRouter.post("/employee/add", async (req, res) => {
  const payload = req.body;
  try {
    let new_post = new EmployeeModel(payload);
    await new_post.save();
    res.status(200).send({ msg: "Employee added!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error" });
  }
});

employeeRouter.get("/employee/get", async (req, res) => {
  try {
    let data = await EmployeeModel.find();
    res.status(200).send({ msg: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error" });
  }
});
module.exports = { employeeRouter };

