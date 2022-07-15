import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
  --primary: #13182D;
  --secondary: #69b3ac;
  --highlight:  rgb(182,188,189);
  --box-shadow-secondary: rgba(105, 179, 172, 0.5);
  --font-primary: "Futura PT";
  --font-secondary: "Operator Mono";
  --font-title-size: 4rem;
  --font-title-weight: 700;
  --font-text-size: 1.6rem;
  --font-text-weight: 300;
}

@font-face {
  font-family: "Futura PT";
  src: local("FuturaPT-Light.woff2") format("woff2"),
    local("FuturaPT-Light.woff") format("woff"),
    local("FuturaPT-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Operator Mono';
  src: local('OperatorMono-Book.woff2') format('woff2'),
      local('OperatorMono-Book.woff') format('woff'),
      local('OperatorMono-Book.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Operator Mono';
  src: local('OperatorMono-BookItalic.woff2') format('woff2'),
      local('OperatorMono-BookItalic.woff') format('woff'),
      local('OperatorMono-BookItalic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

html,
body {
  font-size: calc(60% + 0.8vmin);
  background-color: var(--primary);
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0;
  margin: 0;
}

`;

export default GlobalStyle
