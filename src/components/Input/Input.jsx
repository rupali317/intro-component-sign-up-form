import * as InputStyle from "../../styles/Input.style";

export const Input = (props) => {
  return (
    <>
      <InputStyle.Section>
        <InputStyle.Label htmlFor={props.ForId}>{props.Label}</InputStyle.Label>
        <InputStyle.Input
          type={props.Type}
          id={props.ForId}
          placeholder={props.Placeholder}
          name={props.Name}
          value={props.Value}
          onChange={props.handleChange}
        />
      </InputStyle.Section>
      <InputStyle.Error>{props.ErrorMessage}</InputStyle.Error>
    </>
  );
};
