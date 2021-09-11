import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavBar from "../components/nav/NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Header1 = Template.bind({});
Header1.args = { title: "Header1" };

export const Header2 = Template.bind({});
Header2.args = { title: "Header2" };
