import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont,'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 20px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
}

button {
  font-family: -apple-system, BlinkMacSystemFont, 'Josefin Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  height: 22px;
}

input {
  margin-left: 10px;
}

`;