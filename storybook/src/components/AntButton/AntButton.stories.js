import React from "react";
import { Button, PowerOffOutlined } from "antd";
import { action, actions } from "@storybook/addon-actions";
import "./AntButton.less";

export default {
  title: "Antd/Button",
  component: Button,
  argTypes: {
    type: { control: "text" },
    onClick: { action: "clicked" },
    size: { control: "text" },
  },
};
export const MouseOver = () => (
  <Button type="primary" danger {...actions("onClick", "onMouseOver")}>
    On mouse over
  </Button>
);
const Template = (args) => <Button {...args} />;
export const Success = Template.bind({});
Success.args = {
  type: "primary",
  children: "Success",
};
//export const Success = () => <Button type="primary">Success</Button>;
//export const Danger = () => <Button type="primary">Danger</Button>;
export const Danger = Template.bind({});
Danger.args = {
  type: "dashed",
  size: "large",
  children: "Danger",
};
export const Download = Template.bind({});
Download.args = {
  type: "link",
  children: "Download",
};
