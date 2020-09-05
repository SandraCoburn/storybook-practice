import React from "react";
import Button from "./Button";

//args can be appliat at a component leve to be applied to all components stories ex:
export default {
  title: "form/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

//passing arguments to a template
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  //   children: "Primary Args",
};

//you can extend the props from other stories
// args at a story level will override the global component's args
export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.orgs,
  // children: "Long Primary Args"
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  //   children: "Secondary Args",
};
