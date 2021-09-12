import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Register from "../components/auth/Register";

export default {
  title: "Components/Auth",
  component: Register,
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = (args) => <Register />;

export const RegisterBox = Template.bind({});
// Header1.args = { title: "SUPER STUFF" };

// export const Header2 = Template.bind({});
// Header2.args = { title: "Header2" };
