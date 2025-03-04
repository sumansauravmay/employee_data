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


employeeRouter.put("/employee/update/:id", async (req, res) => {
    const ID = req.params.id;
    try {
      const updatedEmployee = await EmployeeModel.findByIdAndUpdate(ID, req.body, { new: true });
      if (!updatedEmployee) {
        return res.status(404).send({ msg: "Employee not found!" });
      }
      res.status(200).send({ msg: "Employee Updated!", employee: updatedEmployee });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Update failed!" });
    }
  });
  


employeeRouter.delete("/employee/delete/:id", async (req, res) => {
    const ID = req.params.id;
    try {
      await EmployeeModel.findByIdAndDelete({ _id: ID });
      res.status(200).send({ msg: "Employee Deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Can not be deleted" });
    }
  });
  



module.exports = { employeeRouter };

