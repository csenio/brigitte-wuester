import {
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
} from "styled-system"
import styled from "styled-components"

const Text = styled.span(
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing
)

Text.defaultProps = {
  color: "inherit",
}

export default Text
