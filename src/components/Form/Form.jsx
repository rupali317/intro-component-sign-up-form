import React from "react";
import { Input } from "../Input";

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
        Message: "First Name cannot be empty",
      },
    },
    LastName: {
      EmptyError: {
        HasError: false,
        Message: "Last Name cannot be empty",
      },
    },
    EmailAddress: {
      EmptyError: {
        HasError: false,
        Message: "Email Address cannot be empty",
      },
      InvalidInput: {
        HasError: false,
        Message: "Looks like this is not an email",
      },
    },
    Password: {
      EmptyError: {
        HasError: false,
        Message: "Password cannot be empty",
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    resetFormValidation();
    checkFormValidationEmptyInputs();
    checkFormValidationInvalidInputs();
  };

  const resetFormValidation = () => {
    formValidation.FirstName.EmptyError.HasError = false;
    formValidation.LastName.EmptyError.HasError = false;
    formValidation.EmailAddress.EmptyError.HasError = false;
    formValidation.EmailAddress.InvalidInput.HasError = false;
    formValidation.Password.EmptyError.HasError = false;
  };

  const checkFormValidationEmptyInputs = () => {
    if (formData.FirstName === "") {
      formValidation.FirstName.EmptyError.HasError = true;
      setFormValidation((previousValidation) => {
        return checkFormValidation(
          previousValidation,
          previousValidation.FirstName.EmptyError.HasError,
          formValidation.FirstName.EmptyError.HasError
        );
      });
    }
    if (formData.LastName === "") {
      formValidation.LastName.EmptyError.HasError = true;
      setFormValidation((previousValidation) => {
        return checkFormValidation(
          previousValidation,
          previousValidation.LastName.EmptyError.HasError,
          formValidation.LastName.EmptyError.HasError
        );
      });
    }
    if (formData.EmailAddress === "") {
      formValidation.EmailAddress.EmptyError.HasError = true;
      setFormValidation((previousValidation) => {
        return checkFormValidation(
          previousValidation,
          previousValidation.EmailAddress.EmptyError.HasError,
          formValidation.EmailAddress.EmptyError.HasError
        );
      });
    }
    if (formData.Password === "") {
      formValidation.Password.EmptyError.HasError = true;
      setFormValidation((previousValidation) => {
        return checkFormValidation(
          previousValidation,
          previousValidation.Password.EmptyError.HasError,
          formValidation.Password.EmptyError.HasError
        );
      });
    }
  };

  const checkFormValidation = (
    previousValidation,
    previousValidationHasError,
    currentValidationHasError
  ) => {
    return {
      ...previousValidation,
      [previousValidationHasError]: currentValidationHasError,
    };
  };

  const checkFormValidationInvalidInputs = () => {
    if (!IsEmailValid(formData.EmailAddress)) {
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

  const IsEmailValid = (email) => {
    const validEmailRegex =
      /^[^\s@._-](?:[._-]{0,1}[A-Za-z0-9]+)*@[^\s@.](?:[-_]{0,1}[A-Za-z0-9]+)*\.(?:com|org|cc)$/; /*RRC: example@com <- will not work */
    if (validEmailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

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
      <Input
        Label="First Name"
        ForId="firstName"
        Type="text"
        Placeholder="Alex"
        Name="FirstName"
        Value={formData.FirstName}
        HasEmptyError={formValidation.FirstName.EmptyError.HasError}
        EmptyErrorMessage={formValidation.FirstName.EmptyError.Message}
        handleChange={handleChange}
      />
      <Input
        Label="Last Name"
        ForId="lastName"
        Type="text"
        Placeholder="Williams"
        Name="LastName"
        Value={formData.LastName}
        HasEmptyError={formValidation.LastName.EmptyError.HasError}
        EmptyErrorMessage={formValidation.LastName.EmptyError.Message}
        handleChange={handleChange}
      />
      <Input
        Label="Email Address"
        ForId="emailAddress"
        Type="email"
        Placeholder="alex@williams.com"
        Name="EmailAddress"
        Value={formData.EmailAddress}
        HasEmptyError={formValidation.EmailAddress.EmptyError.HasError}
        EmptyErrorMessage={formValidation.EmailAddress.EmptyError.Message}
        HasInvalidError={formValidation.EmailAddress.InvalidInput.HasError}
        InvalidErrorMessage={formValidation.EmailAddress.InvalidInput.Message}
        handleChange={handleChange}
      />
      <Input
        Label="Password"
        ForId="password"
        Type="password"
        Placeholder=""
        Name="Password"
        Value={formData.Password}
        HasEmptyError={formValidation.Password.EmptyError.HasError}
        EmptyErrorMessage={formValidation.Password.EmptyError.Message}
        handleChange={handleChange}
      />
      <button>Claim your free trial</button>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <a href="terms-and-services" target="_blank">
          Terms and Services
        </a>
      </p>
    </form>
  );
};
