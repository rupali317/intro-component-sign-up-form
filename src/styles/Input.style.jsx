import { styled } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-xs-1);
  min-width: 17.4375rem; /* 279px */
  margin-top: var(--space-base);
`;

export const Label = styled.label`
  color: var(--color-neutral-2);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-base);
`;

//RRC: Find out if caret width and distance between caret and text can be managed?
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
`;

export const Error = styled.i`
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  font-style: var(--font-style-italic);
  line-height: var(--line-height-normal);
  text-align: right;
  margin-top: var(--space-xs-1);

  &.show-error {
    display: block;
  }

  &.hide-error {
    display: none;
  }
`;
