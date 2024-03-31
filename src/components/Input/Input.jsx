export const Input = (props) => {
  return (
    <>
      <label for={props.ForId}>{props.Label}</label>
      <input
        type={props.Text}
        id={props.ForId}
        placeholder={props.Placeholder}
        name={props.Name}
        value={props.Value}
        onChange={props.handleChange}
      />
      <i
        style={{
          display: props.HasEmptyError ? "block" : "none",
        }}
      >
        {props.EmptyErrorMessage}
      </i>
      <i
        style={{
          display:
            !props.HasEmptyError && props.HasInvalidError ? "block" : "none",
        }}
      >
        {props.InvalidErrorMessage}
      </i>
      {/*RRC: Change from style to classname?*/}
    </>
  );
};
