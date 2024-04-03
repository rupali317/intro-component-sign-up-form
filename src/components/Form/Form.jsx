import React from "react";
import { Input } from "../Input";
import * as Data from "./data";

export const Form = () => {
  const [formData, setFormData] = React.useState(Data.formData);

  const [formValidation, setFormValidation] = React.useState(
    Data.formValidation
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    resetFormValidation();
    checkFormValidationEmptyInputs();
    checkFormValidationInvalidInputs();
  };

  // RRC: Ask why [previousValidation.FirstName.EmptyError.HasError]: false, will not work inspite of the []
  const resetFormValidation = () => {
    setFormValidation((previousValidation) => {
      return {
        ...previousValidation,
        FirstName: {
          EmptyError: {
            ...previousValidation.FirstName.EmptyError,
            HasError: false,
          },
        },
      };
    });
    setFormValidation((previousValidation) => {
      return {
        ...previousValidation,
        LastName: {
          EmptyError: {
            ...previousValidation.LastName.EmptyError,
            HasError: false,
          },
        },
      };
    });
    setFormValidation((previousValidation) => {
      return {
        ...previousValidation,
        EmailAddress: {
          EmptyError: {
            ...previousValidation.EmailAddress.EmptyError,
            HasError: false,
          },
          InvalidInput: {
            ...previousValidation.EmailAddress.InvalidInput,
            HasError: false,
          },
        },
      };
    });
    // setFormValidation((previousValidation) => {
    //   return {
    //     ...previousValidation,
    //     EmailAddress: {
    //       InvalidInput: {
    //         ...previousValidation.EmailAddress.InvalidInput,
    //         HasError: false,
    //       },
    //     },
    //   };
    // });
    setFormValidation((previousValidation) => {
      return {
        ...previousValidation,
        Password: {
          EmptyError: {
            ...previousValidation.Password.EmptyError,
            HasError: false,
          },
        },
      };
    });
  };

  const checkFormValidationEmptyInputs = () => {
    if (formData.FirstName === "") {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          FirstName: {
            EmptyError: {
              ...previousValidation.FirstName.EmptyError,
              HasError: true,
            },
          },
        };
      });
    }
    if (formData.LastName === "") {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          LastName: {
            EmptyError: {
              ...previousValidation.LastName.EmptyError,
              HasError: true,
            },
          },
        };
      });
    }
    if (formData.EmailAddress === "") {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          EmailAddress: {
            ...previousValidation.EmailAddress,
            EmptyError: {
              ...previousValidation.EmailAddress.EmptyError,
              HasError: true,
            },
          },
        };
      });
    }
    if (formData.Password === "") {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          Password: {
            EmptyError: {
              ...previousValidation.Password.EmptyError,
              HasError: true,
            },
          },
        };
      });
    }
  };

  const checkFormValidationInvalidInputs = () => {
    if (!IsEmailValid(formData.EmailAddress)) {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          EmailAddress: {
            ...previousValidation.EmailAddress,
            InvalidInput: {
              ...previousValidation.EmailAddress.InvalidInput,
              HasError: true,
            },
          },
        };
      });
    }
  };

  const IsEmailValid = (email) => {
    const validEmailRegex =
      /^[^\s@._-](?:[._-]{0,1}[A-Za-z0-9]+)*@[^\s@.](?:[-_]{0,1}[A-Za-z0-9]+)*\.(?:com|org|cc)$/; /*RRC: example@com <- will not work, #abc@gmail.com will be valid */
    if (validEmailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {Inputs} */}
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
