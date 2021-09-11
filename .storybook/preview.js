import React from "react"

import {GlobalStyle, lightTheme, darkTheme} from "../shared/global"
import {addDecorator} from "@storybook/react"
import {withThemesProvider} from "storybook-addon-styled-component-theme"
import {ThemeProvider} from "styled-components"

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]

const themes = [lightTheme, darkTheme]
addDecorator(withThemesProvider(themes), ThemeProvider)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}