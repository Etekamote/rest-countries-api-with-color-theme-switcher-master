import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: #000;
  font-family: "Nunito Sans";
  overflow-x: hidden;
  font-size: 1.6rem;
}
`