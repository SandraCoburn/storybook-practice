import React from "react";
import { Button } from "@chakra-ui/core";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m="10">
      <Button variantColor="green">Success</Button>
    </Box>
  </ThemeProvider>
);
export const Danger = () => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Button variantColor="red">Danger</Button>
  </ThemeProvider>
);
