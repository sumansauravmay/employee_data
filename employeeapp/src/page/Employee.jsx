import axios from "axios";
import React, { useEffect } from "react";
import "./employeelist.css";

const Employee = () => {
  const [data, setData] = React.useState([]);

  const getData = () => {
    axios
      .get("http://localhost:8000/employee/get")
      .then((response) => {
        setData(response?.data?.msg);
        console.log(response?.data?.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);


const handlleDelete = (id) => {
    axios.delete(`http://localhost:8000/employee/delete/${id}`)
    .then((response) => {
        console.log(response);
        alert("Employee Deleted!");	
        getData();
    })
    .catch((err) => {
        console.log(err);
    });
}







  return (
    <div className="container">
    <h2 className="title">Employee List</h2>
    <div className="employee-grid">
      {data.map((item) => (
        <div key={item._id} className="employee-card">
          <h3 className="employee-name">{item.name}</h3>
          <p className="employee-email">{item.email}</p>
          <p className="employee-info">
            <strong>Department:</strong> {item.department}
          </p>
          <p className="employee-info">
            <strong>Salary:</strong> ${item.salary}
          </p>
          <button onClick={()=>handlleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
  )
};

export default Employee;
