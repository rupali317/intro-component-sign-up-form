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
          aria-describedby={`error-message-${props.ForId}`}
          $isError={props.ErrorMessage !== ""}
        />
        <InputStyle.ErrorImage
          src="/images/icon-error.svg"
          alt=""
          role="presentation"
          className={props.ErrorMessage === "" ? "hide-error" : "show-error"}
        />
      </InputStyle.Section>
      <InputStyle.Error
        className={props.ErrorMessage === "" ? "hide-error" : "show-error"}
        id={`error-message-${props.ForId}`}
        aria-live="assertive"
      >
        {props.ErrorMessage}
      </InputStyle.Error>
    </>
  );
};
