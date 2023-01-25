import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus,
  *:active {
    -webkit-tap-highlight-color: transparent;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;

  }


  input,
  button {
    outline: none;
  }
  a {
    text-decoration: none;
  }
  button,
  svg {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input,
  fieldset,
  button {
    border: unset;
    outline: unset;
  }


  // Positioning the buttons

  .scissors {
    margin: auto;
    left: 0;
    right: 0;
    top: -75px;
  }


  .spock {
    top: 129px;
    left: -75px;
  }

  .paper {
    top: 129px;
    right: -75px;
  }

  .lizard {
    top: 380px;
  }

  .rock {
    top: 380px;
    right: 0;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;