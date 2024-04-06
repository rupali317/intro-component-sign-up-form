import * as InputStyle from "../../styles/Input.style";

export const Input = (props) => {
  return (
    <>
      <InputStyle.Label htmlFor={props.ForId}>{props.Label}</InputStyle.Label>
      <InputStyle.Input
        type={props.Type}
        id={props.ForId}
        placeholder={props.Placeholder}
        name={props.Name}
        value={props.Value}
        onChange={props.handleChange}
      />
      <InputStyle.Error className={props.HasEmptyError ? "show-error" : "hide-error"}>
        {props.EmptyErrorMessage}
      </InputStyle.Error>
      <InputStyle.Error className={!props.HasEmptyError && props.HasInvalidError ? "show-error" : "hide-error"}>
        {props.InvalidErrorMessage}
      </InputStyle.Error>
    </>
  );
};
