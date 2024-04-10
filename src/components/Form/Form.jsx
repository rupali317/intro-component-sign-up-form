import React from "react";
import { Input } from "../Input";
import * as Data from "./data";
import { MESSAGES } from "../../constants/Strings";
import * as FormStyles from "../../styles/Form.style";

export const Form = () => {
  const [formData, setFormData] = React.useState(Data.formData);

  const [formValidation, setFormValidation] = React.useState(
    Data.formValidation
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    resetFormValidation();
    checkFormValidationInvalidInputs();
    checkFormValidationEmptyInputs();
  };

  const resetFormValidation = () => {
    setFormValidation({
      firstName: MESSAGES.EMPTY,
      lastName: MESSAGES.EMPTY,
      emailAddress: MESSAGES.EMPTY,
      password: MESSAGES.EMPTY,
    });
  };

  const checkFormValidationEmptyInputs = () => {
    if (formData.firstName === "") {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          firstName: MESSAGES.FIRST_NAME_EMPTY_ERROR,
        };
      });
    }
    if (formData.lastName === "") {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          lastName: MESSAGES.LAST_NAME_EMPTY_ERROR,
        };
      });
    }
    if (formData.emailAddress === "") {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          emailAddress: MESSAGES.EMAIL_ADDRESS_EMPTY_ERROR,
        };
      });
    }
    if (formData.password === "") {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          password: MESSAGES.PASSWORD_EMPTY_ERROR,
        };
      });
    }
  };

  const checkFormValidationInvalidInputs = () => {
    if (!IsEmailValid(formData.emailAddress)) {
      setFormValidation((previousValidation) => {
        return {
          ...previousValidation,
          emailAddress: MESSAGES.EMAIL_ADDRESS_INVALID_ERROR,
        };
      });
    }
  };

  const IsEmailValid = (email) => {
    const validEmailRegex =
      /^[^\s@._-](?:[._-]{0,1}[A-Za-z0-9]+)*@[^\s@.](?:[-_]{0,1}[A-Za-z0-9]+)*\.(?:com|org|cc)$/i; /* example@com <- will not work, #abc@gmail.com will be valid */
    return validEmailRegex.test(email);
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
    <FormStyles.Form onSubmit={handleSubmit}>
      <Input
        Label="First Name"
        ForId="firstName"
        Type="text"
        Placeholder="Alex"
        Name="firstName"
        Value={formData.firstName}
        ErrorMessage={formValidation.firstName}
        handleChange={handleChange}
      />
      <Input
        Label="Last Name"
        ForId="lastName"
        Type="text"
        Placeholder="Williams"
        Name="lastName"
        Value={formData.lastName}
        ErrorMessage={formValidation.lastName}
        handleChange={handleChange}
      />
      <Input
        Label="Email Address"
        ForId="emailAddress"
        Type="email"
        Placeholder="alex@williams.com"
        Name="emailAddress"
        Value={formData.emailAddress}
        ErrorMessage={formValidation.emailAddress}
        handleChange={handleChange}
      />
      <Input
        Label="Password"
        ForId="password"
        Type="password"
        Placeholder=""
        Name="password"
        Value={formData.password}
        ErrorMessage={formValidation.password}
        handleChange={handleChange}
      />
      <FormStyles.Button>Claim your free trial</FormStyles.Button>
      <FormStyles.Paragraph>
        By clicking the button, you are agreeing to our{" "}
        <a href="terms-and-services" target="_blank">
          Terms and Services
        </a>
      </FormStyles.Paragraph>
    </FormStyles.Form>
  );
};
