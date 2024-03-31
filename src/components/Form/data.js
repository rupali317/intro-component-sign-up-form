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
