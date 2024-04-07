import { styled } from "styled-components";

export const Form = styled.form`
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow-1);
  padding: var(--space-l-2);
  display: flex;
  flex-direction: column;
  gap: var(--space-base);
  background-color: var(--color-neutral-1);
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

  &:hover {
    background-color: var(--color-action-2);
  }
`;

export const Paragraph = styled.p`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-xs);
  color: var(--color-neutral-5);
  margin-top: -8px;
  text-align: center;
`;
