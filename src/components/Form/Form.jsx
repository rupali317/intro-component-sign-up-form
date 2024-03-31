import React from "react";

export const Form = () => {
  const [formData, setFormData] = React.useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Password: "",
  });

  const handleSubmit = () => {};

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevformData) => {
      return {
        ...prevformData,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        placeholder="Alex"
        name="FirstName"
        value={formData.FirstName}
        onChange={handleChange}
      />
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        placeholder="Williams"
        name="LastName"
        value={formData.LastName}
        onChange={handleChange}
      />
      <label for="emailAddress">Email Address</label>
      <input
        type="email"
        id="emailAddress"
        placeholder="alex@williams.com"
        name="EmailAddress"
        value={formData.EmailAddress}
        onChange={handleChange}
      />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        name="Password"
        value={formData.Password}
        onChange={handleChange}
      />
      <button>claim your free trial</button>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <a href="terms-and-services" target="_blank">
          Terms and Services
        </a>
      </p>
    </form>
  );
};
