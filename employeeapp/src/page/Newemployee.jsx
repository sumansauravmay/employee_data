import React, { useState } from "react";
import "./addemployee.css";


const NewEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department:"",
    salary:""
  });
  const [message, setMessage] = useState(""); // Success/Error Message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      try {
        const response = await fetch("http://localhost:8000/employee/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to add employee");
        }

        setMessage("Employee added successfully!");
        alert("Employee added successfully!");	
        setFormData({ name: "", email: "", department:"", salary:"" }); // Reset form
      } catch (error) {
        setMessage("Error: " + error.message);
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      {message && <p className="message">{message}</p>} {/* Display message */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter Department"
            required
          />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter salary"
            required
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default NewEmployee;
