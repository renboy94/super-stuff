import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Login from "../components/auth/Login";

export default {
  title: "Components/Auth",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login />;

export const LoginBox = Template.bind({});
// Header1.args = { title: "SUPER STUFF" };

// export const Header2 = Template.bind({});
// Header2.args = { title: "Header2" };
