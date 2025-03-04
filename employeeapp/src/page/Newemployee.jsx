import React from 'react'

const Newemployee = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email) {
          onAddEmployee(formData); // Callback function to add employee
          setFormData({ name: "", email: "" }); // Reset form
        }
      };
  return (
    <div>
      new employee
    </div>
  )
}

export default Newemployee
