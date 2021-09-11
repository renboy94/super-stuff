import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  /* /* box-sizing: border-box;
  background: #F5F4F0; */
  /* display:block; */
  /* height: 100%; */
  /* max-width: 640px; */
  /* margin:0 auto; */
  margin:0;
  box-sizing: border-box;
  padding: 0;
}

body{
  /* background-color:#fafafa;
  min-height:100vh; */
  /* padding: 1rem; */
 /* margin:0;
  margin-left: 0;
  font-family:Verdana; */
  //////
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.85);
  background-color: #f9f9f9;
}
`;

export const lightTheme = {
    name: "Light",
    bgColor: process.env.STORYBOOK_LIGHT_COLOR,
    color: process.env.STORYBOOK_DARK_COLOR,
  }
  export const darkTheme = {
    name: "Dark",
    bgColor: process.env.STORYBOOK_DARK_COLOR,
    color: process.env.STORYBOOK_LIGHT_COLOR,
  }