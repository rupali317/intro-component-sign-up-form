export const formData = {
  FirstName: "",
  LastName: "",
  EmailAddress: "",
  Password: "",
};

export const formValidation = {
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
};

//RRC: may InputData is not needed
export const InputData = [
  {
    Id: 1,
    Label: "First Name",
    ForId: "firstName",
    Type: "text",
    Placeholder: "Alex",
    Name: "FirstName",
    Value: formData.FirstName,
    HasEmptyError: formValidation.FirstName.EmptyError.HasError,
    EmptyErrorMessage: formValidation.FirstName.EmptyError.Message,
  },
  {
    Id: 2,
    Label: "Last Name",
    ForId: "lastName",
    Type: "text",
    Placeholder: "Williams",
    Name: "LastName",
    Value: formData.LastName,
    HasEmptyError: formValidation.LastName.EmptyError.HasError,
    EmptyErrorMessage: formValidation.LastName.EmptyError.Message,
  },
  {
    Id: 3,
    Label: "Email Address",
    ForId: "emailAddress",
    Type: "email",
    Placeholder: "alex@williams.com",
    Name: "EmailAddress",
    Value: formData.EmailAddress,
    HasEmptyError: formValidation.EmailAddress.EmptyError.HasError,
    EmptyErrorMessage: formValidation.EmailAddress.EmptyError.Message,
    HasInvalidError: formValidation.EmailAddress.InvalidInput.HasError,
    InvalidErrorMessage: formValidation.EmailAddress.InvalidInput.Message,
  },
  {
    Id: 4,
    Label: "Password",
    ForId: "password",
    Type: "password",
    Placeholder: "",
    Name: "Password",
    Value: formData.Password,
    HasEmptyError: formValidation.Password.EmptyError.HasError,
    EmptyErrorMessage: formValidation.Password.EmptyError.Message,
  },
];
