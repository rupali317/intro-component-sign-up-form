import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary: hsl(0, 100, 74); /* #FF7979 */
        --color-secondary: hsl(248, 33, 49); /* #5E54A4 */
        --color-action-1: hsl(154, 59, 51); /* #38CC8B */
        --color-action-2: hsl(154, 65, 68); /* #77E2B3 */
        --color-neutral-1: hsl(0, 0, 100); /* #ffffff */
        --color-neutral-2: hsl(248, 9, 26, 100%); /* #3D3B48 */
        --color-neutral-3: hsl(248, 9, 26, 75%); /* #3D3B48 */
        --color-neutral-4: hsl(0, 0, 87); /* #DEDEDE */
        --color-neutral-5: hsl(247, 25, 77); /* #BAB7D4 */

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
        --letter-spacing-m: -0.018125rem; /* -0.29px */
        --letter-spacing-l: -0.0325rem; /* -0.52px */

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
        --space-xl-1: 2.5rem; /* 40px */
        --space-xl-2: 2.8125rem; /* 45px */
        --space-xl-3: 4rem; /* 64px */

        /* Borders */
        --border-radius-none: 0rem;
        --border-radius-soft: 0.3125rem; /* 5px */
        --border-radius-medium: 0.625rem; /* 10px */
        --border-width-s: 0.0625rem; /* 1px */
        --border-width-m: 0.125rem; /* 2px */

        /* Shadows */
        --box-shadow-1: 0rem 0.5rem 0rem 0rem hsl(0, 0, 0, 14.69%); /* 0px 8px 0px 0px */
        --box-shadow-2: 0rem -0.25rem 0rem 0rem hsl(0, 0, 0, 9.09%); /* 0px -4px 0px 0px */
    }
`;
