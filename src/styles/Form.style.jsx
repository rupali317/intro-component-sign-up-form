import { styled } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const Form = styled.form`
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow-1);
  padding: var(--space-xs-2) var(--space-l-2) var(--space-l-2) var(--space-l-2);
  display: flex;
  flex-direction: column;
  background-color: var(--color-neutral-1);

  @media (min-width: ${DesktopWidth}) {
    padding: var(--space-l-1) var(--space-xl-1) var(--space-xl-1)
      var(--space-xl-1);
  }
`;

export const Button = styled.button`
  min-width: 17.4375rem; /* 279px */
  border-radius: var(--border-radius-soft);
  box-shadow: inset var(--box-shadow-2);
  text-transform: uppercase;
  color: var(--color-neutral-1);
  background-color: var(--color-action-1);
  padding: var(--space-s-2);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semi-bold);
  line-height: var(--line-height-base);
  letter-spacing: var(--letter-spacing-base);
  border-width: var(--border-width-none);
  margin-top: var(--space-base);

  &:hover {
    background-color: var(--color-action-2);
    cursor: pointer;
  }

  @media (min-width: ${DesktopWidth}) {
    min-width: 28.75rem; /* 460px */
    margin-top: var(--space-l-1);
  }
`;

export const Paragraph = styled.p`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xs);
  color: var(--color-neutral-5);
  margin-top: var(--space-xs-2);
  text-align: center;

  @media (min-width: ${DesktopWidth}) {
    line-height: var(--line-height-base);
  }
`;
