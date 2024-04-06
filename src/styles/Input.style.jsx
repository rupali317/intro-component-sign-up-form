import { styled } from "styled-components";

export const Label = styled.label``;

export const Input = styled.input`
  border: var(--border-width-s) solid var(--color-neutral-4);
  border-radius: var(--border-radius-soft);
  padding: var(--space-s-2) var(--space-m-3);
  color: var(--color-neutral-2);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-semi-bold);
  letter-spacing: var(--letter-spacing-xs);
  line-height: var(--line-height-base);
  caret-color: var(--color-secondary); //RRC: Find out if caret width and distance between caret and text can be managed?

  &::placeholder {
    color: var(--color-neutral-3);
  }

  &:focus-visible {
    outline: none;
    border-color: var(--color-secondary);
  }
`;

export const Error = styled.i`
  &.show-error {
      display: block;
  }

  &.hide-error {
      display: none;
  }
`;
