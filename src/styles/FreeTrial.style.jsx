import { styled } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const Container = styled.div`
  background-color: var(--color-secondary);
  color: var(--color-neutral-1);
  padding: var(--space-m-2);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow-1);
  max-width: 20.4375rem; /* 327px */
  display: flex;
  justify-content: center;
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  letter-spacing: var(--letter-spacing-s);

  span {
    max-width: 12.125rem; /* 194px */
    text-align: center;
  }

  @media (min-width: ${DesktopWidth}) {
    max-width: 33.75rem; /* 540px */
    padding: var(--space-m-1);

    span {
      max-width: initial;
    }
  }
`;
