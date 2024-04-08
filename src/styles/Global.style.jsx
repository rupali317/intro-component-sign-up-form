import { createGlobalStyle, styled } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary-1: hsl(0, 58%, 51%); /* #cb3a3a */
        --color-primary-2: hsl(0, 100%, 74%); /* #ff7a7a */
        --color-secondary: hsl(248, 33%, 49%); /* #5e54a4 */
        --color-action-1: hsl(154, 74%, 30%); /* #148554 */
        --color-action-2: hsl(154, 74%, 40%); /* #1bb170 */
        --color-neutral-1: hsl(0, 0%, 100%); /* #ffffff */
        --color-neutral-2: hsl(248, 9%, 26%, 100%); /* #3D3B48 */
        --color-neutral-3: hsl(248, 9%, 26%, 75%); /* #3D3B48 */
        --color-neutral-4: hsl(0, 0%, 87%); /* #DEDEDE */
        --color-neutral-5: hsl(247, 25%, 77%); /* #BAB7D4 */
        --color-neutral-6: hsl(0, 0%, 20%) /* #333333 */

        /* Typography */
        --font-weight-regular: 400;
        --font-weight-medium: 500;
        --font-weight-semi-bold: 600;
        --font-weight-bold: 700;

        --font-style-normal: normal;
        --font-style-italic: italic;

        --font-size-xs: 0.6875rem; /* 11px */
        --font-size-s: 0.875rem; /* 14px */
        --font-size-base: 0.9375rem; /* 15px */
        --font-size-m: 1rem; /* 16px */
        --font-size-l: 1.75rem; /* 28px */
        --font-size-xl: 3.125rem; /* 50px */

        --line-height-normal: normal;
        --line-height-xs: 1.3125rem; /* 21px */
        --line-height-base: 1.625rem; /* 26px */
        --line-height-l: 2.25rem; /* 36px */
        --line-height-xl: 3.4375rem; /* 55px */

        --letter-spacing-none: 0rem;
        --letter-spacing-xs: 0.015625rem; /* 0.25px */
        --letter-spacing-s: 0.016875rem; /* 0.27px */
        --letter-spacing-base: 0.0625rem; /* 1px */
        --letter-spacing-negative-s: -0.018125rem; /* -0.29px */
        --letter-spacing-negative-xs: -0.0325rem; /* -0.52px */

        /* Spacing */
        --space-xs-1: 0.375rem; /* 6px */
        --space-xs-2: 0.5rem; /* 8px */
        --space-s-1: 0.6875rem; /* 11px */
        --space-s-2: 0.9375rem; /* 15px */
        --space-base: 1rem; /* 16px */
        --space-m-1: 1.0625rem; /* 17px */
        --space-m-2: 1.125rem; /* 18px */
        --space-m-3: 1.213125rem; /* 19.41px */
        --space-l-1: 1.25rem; /* 20px */
        --space-l-2: 1.5rem; /* 24px */
        --space-l-3: 2rem; /* 32px */
        --space-l-4: 1.6875rem; /* 27px */
        --space-xl-1: 2.5rem; /* 40px */
        --space-xl-2: 2.8125rem; /* 45px */
        --space-xl-3: 4rem; /* 64px */

        /* Borders */
        --border-radius-none: 0rem;
        --border-radius-soft: 0.3125rem; /* 5px */
        --border-radius-medium: 0.625rem; /* 10px */
        --border-width-none: 0rem;
        --border-width-s: 0.0625rem; /* 1px */
        --border-width-m: 0.125rem; /* 2px */

        /* Shadows */
        --box-shadow-1: 0rem 0.5rem 0rem 0rem hsl(0, 0%, 0%, 14.69%); /* 0px 8px 0px 0px */
        --box-shadow-2: 0rem -0.25rem 0rem 0rem hsl(0, 0%, 0%, 9.09%); /* 0px -4px 0px 0px */
        --box-shadow-3: 0rem 0rem 0rem 0.25rem var(--color-primary-2)
    }

    @font-face {
        font-family: "Poppins";
        font-weight: 700;
        src: url("/fonts/Poppins-Bold.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Poppins";
        font-weight: 600;
        src: url("/fonts/Poppins-SemiBold.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Poppins";
        font-weight: 500;
        src: url("/fonts/Poppins-Medium.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Poppins";
        font-weight: 500;
        src: url("/fonts/Poppins-MediumItalic.ttf") format("truetype");
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: "Poppins";
        font-weight: 400;
        src: url("/fonts/Poppins-Regular.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }
`;

export const ResetStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default spaces */
    * {
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
    }

    /* Avoid text overflows */
    body,
    h1,
    p {
        overflow-wrap: break-word;
    }

    /* Prevent font size inflation */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* Set shorter line heights on headings and interactive elements, Balance text wrapping on headings*/
    h1, button {
        line-height: 1.1;
    }

    /* Inherit font for inputs and buttons */
    input, button {
        font-family: inherit;
        font-size: inherit;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture,
    svg {
        max-width: 100%;
        display: block;
    }
    
`;

export const DefaultStyles = createGlobalStyle`
    body {
        font-family: "Poppins";
        font-style: var(--font-style-normal);
        font-weight: var(--font-weight-regular);
        background-color: var(--color-primary-2);
        letter-spacing: var(--letter-spacing-none);
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: var(--space-l-3);
        padding-bottom: var(--space-l-3);
        background-image: url("/images/bg-intro-mobile.png");
    }

    main {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl-3);
        justify-content: center;
        align-items: center;
    }

    a {
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-xs);
        line-height: var(--line-height-xs);
        color: var(--color-primary-1);
        text-align: center;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    a:focus-visible {
        outline: none;
        box-shadow: var(--box-shadow-3);
    }

    .show-error {
        display: block;
    }

    .hide-error {
        display: none;
    }

    @media (min-width: ${DesktopWidth}) {
        body {
            background-image: url("/images/bg-intro-desktop.png");
        }

        main {
            flex-direction: row;
            gap: var(--space-xl-2);
        }
    }
`;

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-base);
  color: var(--color-neutral-2);
  text-align: center;
  max-width: 20.4375rem; /* 327px */

  h1 {
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-l);
    letter-spacing: var(--letter-spacing-negative-s);
  }

  p {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-base);
  }

  @media (min-width: ${DesktopWidth}) {
    gap: var(--space-l-3);
    text-align: left;
    max-width: 32.8125rem; /* 525px */

    h1 {
      font-size: var(--font-size-xl);
      line-height: var(--line-height-xl);
      letter-spacing: var(--letter-spacing-negative-xs);
    }
  }
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-l-2);
  max-width: 20.4375rem; /* 327px */

  @media (min-width: ${DesktopWidth}) {
    max-width: 33.75rem; /* 540px */
  }
`;
