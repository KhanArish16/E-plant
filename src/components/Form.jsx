import React, { useState } from "react";
import "./ContactForm.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to your server (e.g., using fetch or axios)
      const response = await fetch(
        "https://e-plant-506c0-default-rtdb.firebaseio.com/submit-enquiry.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle successful submission (e.g., show a success message)
        alert("Enquiry submitted successfully!");
        // Clear the form
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Handle error (e.g., show an error message)
        console.error("Error submitting enquiry:", response.status);
        alert("Failed to submit enquiry. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-form">
      <h2>Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
