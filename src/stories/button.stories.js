import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { select, text } from "@storybook/addon-knobs"
import { Button } from "~components"

storiesOf("Button", module).add("default", () => (
  <Button onClick={action("clicked")}>{text("text", "Button")}</Button>
))
