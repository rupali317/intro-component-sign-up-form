import React from "react";

export const Form = () => {
  const [formData, setFormData] = React.useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Password: "",
  });

  const [formValidation, setFormValidation] = React.useState({
    FirstName: {
      EmptyError: {
        HasError: false,
        message: "First Name cannot be empty",
      },
    },
    LastName: {
      EmptyError: {
        HasError: false,
        message: "Last Name cannot be empty",
      },
    },
    EmailAddress: {
      EmptyError: {
        HasError: false,
        message: "Email Address cannot be empty",
      },
      InvalidInput: {
        HasError: false,
        message: "Looks like this is not an email",
      },
    },
    Password: {
      EmptyError: {
        HasError: false,
        message: "Password cannot be empty",
      },
    },
  });

  const handleSubmit = () => {
    if (formData.FirstName === "") {
      // setValidation(formValidation.FirstName.EmptyError.HasError);  <-- RRC: may not be needed
      formValidation.FirstName.EmptyError.HasError = true;
      setFormValidation((prevValidation) => {
        return {
          ...prevValidation,
          [prevValidation.FirstName.EmptyError.HasError]:
            formValidation.FirstName.EmptyError.HasError,
        };
      });
    }
    if (formData.LastName === "") {
      formValidation.LastName.EmptyError.HasError = true;
      setFormValidation((prevValidation) => {
        return {
          ...prevValidation,
          [prevValidation.LastName.EmptyError.HasError]:
            formValidation.LastName.EmptyError.HasError,
        };
      });
    }
    if (formData.EmailAddress === "") {
      formValidation.EmailAddress.EmptyError.HasError = true;
      setFormValidation((prevValidation) => {
        return {
          ...prevValidation,
          [prevValidation.EmailAddress.EmptyError.HasError]:
            formValidation.EmailAddress.EmptyError.HasError,
        };
      });
    }
    if (formData.Password === "") {
      formValidation.Password.EmptyError.HasError = true;
      setFormValidation((prevValidation) => {
        return {
          ...prevValidation,
          [prevValidation.Password.EmptyError.HasError]:
            formValidation.Password.EmptyError.HasError,
        };
      });
    }
    if (IsEmailInvalid(formData.EmailAddress)) {
      formValidation.EmailAddress.InvalidInput.HasError = true;
      setFormValidation((prevValidation) => {
        return {
          ...prevValidation,
          [prevValidation.EmailAddress.InvalidInput.HasError]:
            formValidation.EmailAddress.InvalidInput.HasError,
        };
      });
    }
  };

  const IsEmailInvalid = (email) => {
    return false;
  };

  //   const setValidation = (isError) => {
  //       isError = true;
  //       setFormValidation(prevValidation => {
  //           return {
  //               ...prevValidation,
  //               [prevValidation.FirstName.EmptyError.HasError]: isError
  //           }
  //       });
  //   }

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
      <i></i>
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
