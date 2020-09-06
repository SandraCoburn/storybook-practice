import React from "react";
import { Button } from "@chakra-ui/core";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    variantColor: { control: "text" },
  },
};

// export const Success = () => (
//   <ThemeProvider theme={theme}>
//     <CSSReset />
//     <Box m="10">
//       <Button variantColor="green">Success</Button>
//     </Box>
//   </ThemeProvider>
// );
// export const Danger = () => (
//   <ThemeProvider theme={theme}>
//     <CSSReset />
//     <Button variantColor="red">Danger</Button>
//   </ThemeProvider>
// );
//const Template = (args) => <ThemeProvider theme={theme}><CSSReset /><Button {...args} /></ThemeProvider>
const Template = (args) => <Button {...args} />;
export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};
export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};
