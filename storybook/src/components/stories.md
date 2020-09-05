# Storybook to add reusable components to app

## Installation of storybook in a project

After creating app with CRA, install sb

    * npx sb init

## Creating a story

- Delete the original story folder
- Add a components folder
- Add Button folder. In that folder add:
  - Add Button.js file
  - Add Button.css file
  - Add Button.stories.js file

## Adding Decorators to stories

Decotaros are utility functions that help other componets styles. Ex:

- You can create a Center decotaror to help buttons or inputs to be centered in a page
  You can add decotators to a particular story, at a component level or at a global level.

## Theming

We can use other libraries to help with styling. We add Chakra to this project.
** chakra-ui/getting started
** yarn add @chakra-ui/core @emotion/core @emotion/styled emotion-theming
To use chakra library:

- First add a new folder to components - ChakraButton
- Since we are using chakra library we don't need to create a js and css files only the stories one:
  - Add a js file to ChakraButton - ChakraButton.stories.js
- In that file:
  - import { Button } from "@chakra-ui/core"
  - Create a story for Succes and Danger Buttons
- We need to import themes into preview.js
  - import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";
  - Then we wrap every component in decotaror with the ThemeProvider
    ```js
    addDecorator((story) => (
      <ThemeProvider theme={theme}>
        <CSSReset>{story()}</CSSReset>
      </ThemeProvider>
    ));
    ```

## Add Ant Design to the stories

- Install Antd
  - yarn add antd
  - yarn add @craco/craco
    Now you can create a story adding components and styles from Antd library

## Customize themes with Antd

According to the Customize Theme documentation, we need to modify less variables via loader like less-loader. We can use craco-less to achieve that,

- First we should modify src/App.css to src/App.less, then import less file instead.

```js
/* src/App.js */
- import './App.css';
+ import './App.less';
/* src/App.less */
- @import '~antd/dist/antd.css';
+ @import '~antd/dist/antd.less';
```

Then install craco less in project:

- yarn add craco-less
