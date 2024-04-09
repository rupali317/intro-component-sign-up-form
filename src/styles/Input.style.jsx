import { styled, css } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs-1);
  min-width: 17.4375rem; /* 279px */
  margin-top: var(--space-base);
  position: relative;

  @media (min-width: ${DesktopWidth}) {
    margin-top: var(--space-l-1);
  }
`;

export const Label = styled.label`
  color: var(--color-neutral-2);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-base);
`;

export const Input = styled.input`
  border: var(--border-width-s) solid var(--color-neutral-4);
  border-radius: var(--border-radius-soft);
  padding: var(--space-s-2) var(--space-m-3);
  color: var(--color-neutral-2);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-semi-bold);
  letter-spacing: var(--letter-spacing-xs);
  line-height: var(--line-height-base);
  caret-color: var(--color-secondary);

  &::placeholder {
    color: var(--color-neutral-3);
  }

  &:focus-visible {
    outline: none;
    border-color: var(--color-secondary);
  }

  ${(props) =>
    props.$isError &&
    css`
      border: var(--border-width-m) solid var(--color-primary-2);

      &:focus-visible {
        border: var(--border-width-m) solid var(--color-primary-2);
      }

      ${props.type === "email" &&
      css`
        color: var(--color-primary-1);
      `}
    `}

  @media (min-width: ${DesktopWidth}) {
    padding: var(--space-s-2) var(--space-l-4) var(--space-s-2) var(--space-l-3);
  }
`;

export const ErrorImage = styled.img`
  position: absolute;
  width: 1.5rem; //24px;
  bottom: 1.125rem; //18px;
  right: 1.375rem; //22px

  @media (min-width: ${DesktopWidth}) {
    right: 1.8125rem; //29px
  }
`;

export const Error = styled.i`
  color: var(--color-primary-1);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  font-style: var(--font-style-italic);
  line-height: var(--line-height-normal);
  text-align: right;
  margin-top: var(--space-xs-1);
`;
