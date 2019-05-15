import styled from "styled-components"
import { space, color, width, fontSize } from "styled-system"

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  color,
  width,
  fontSize
)

export default Box
