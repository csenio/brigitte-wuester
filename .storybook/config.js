import React from "react"
import { ThemeProvider } from "styled-components"
import { configure, addDecorator } from "@storybook/react"
import theme from "../src/styles/theme"
import { withKnobs } from "@storybook/addon-knobs"
import "../src/styles/globals.css"

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories.js$/)

/////////////////////////////////////////////////////////////// gatsby specifics
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

global.__PATH_PREFIX__ = ""

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
///////////////////////////////////////////////////////////////
addDecorator(withKnobs)

function loadStories() {
  req.keys().forEach(filename => req(filename))
  addDecorator(story => (
    <ThemeProvider theme={theme}>
      <div style={{ width: "100%", padding: "1rem" }}>{story()}</div>
    </ThemeProvider>
  ))
}

configure(loadStories, module)
