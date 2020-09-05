import React from "react";
import { Button } from "@chakra-ui/core";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => (
  <ThemeProvider theme={theme}>
    <CSSReset>
      <Button variantColor="green">Success</Button>
    </CSSReset>
  </ThemeProvider>
);
export const Danger = () => (
  <ThemeProvider theme={theme}>
    <CSSReset>
      <Button variantColor="red">Danger</Button>
    </CSSReset>
  </ThemeProvider>
);
