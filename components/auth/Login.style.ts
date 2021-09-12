import styled from "styled-components";

const light =
  process.env.NEXT_PUBLIC_LIGHT_COLOR || process.env.STORYBOOK_LIGHT_COLOR;
const dark =
  process.env.NEXT_PUBLIC_DARK_COLOR || process.env.STORYBOOK_DARK_COLOR;

export const LoginBox = styled.form`
  min-height: 300px;
  width: 400px;
  /* background: blue; */
  border: 1px solid silver;
  margin: 150px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${light};
  padding-bottom: 10px;

  & > * {
    margin-bottom: 10px;
  }

  & > span {
    align-self: flex-start;
    margin-left: 5%;
  }

  & > input {
    width: 90%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid ${light};
  }

  & > button {
    width: 90%;
    height: 35px;
    background: ${dark};
    border: 1px solid ${dark};
    border-radius: 5px;
    color: ${light};
    cursor: pointer;
    margin-top: 10px;
  }

  & > a {
    text-decoration: none;
    color: ${dark};
  }
`;
