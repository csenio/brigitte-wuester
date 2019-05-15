import styled from "styled-components"
import { space, color, width, fontSize } from "styled-system"
import { darken } from "polished"

const Button = styled.button`
  ${space}
  ${color}
  ${width}
  ${fontSize}
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 6px rgba(253, 209, 41, 0.2);
  border: none;
  outline: none;
  border: 2px solid transparent;
  &:hover{
      background: ${p => darken(0.02, p.theme.colors.yellow)};
}
&:focus{
    outline: 1px solid ${p => darken(0.05, p.theme.colors.yellow)}
}
  `

Button.defaultProps = {
  py: "10px",
  px: "20px",
  bg: "yellow",
  fontSize: "18px",
}

export default Button
