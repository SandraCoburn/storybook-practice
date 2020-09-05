import React from "react";
import { Button } from "antd";
import "./AntButton.less";

export default {
  title: "Antd/Button",
  component: Button,
};
export const Success = () => <Button type="primary">Success</Button>;
export const Danger = () => <Button>Danger</Button>;
