import * as FreeTrialStyle from "../../styles/FreeTrial.style";

export const FreeTrial = () => {
  return (
    <FreeTrialStyle.Container>
      <span>
        <b>Try it free 7 days</b> then $20/<span aria-hidden="true">mo.</span>
        <span className="visually-hidden">month</span> thereafter
      </span>
    </FreeTrialStyle.Container>
  );
};
