import styled from "styled-components"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  &.selected {
    &::after {
      content: "";
      position: absolute;
      left: 48%;
      bottom: -10px;
      height: 4px;
      width: 4px;
      border-radius: 100%;
      background: ${p => p.theme.colors.brown};
    }
  }
  position: relative;
  color: ${p => p.theme.colors.dark};
  font-size: 14px;
  letter-spacing: 0.2em;
  margin-right: 30px;
`

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${p => p.theme.colors.grey};
  background: ${p => p.theme.colors.brand};
  color: ${p => p.theme.colors.white};
`

const Nav = styled.nav`
  flex-wrap: wrap;
  padding: 0 120px;
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
  height: 80px;
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${p => p.theme.breakpoints.maxlaptop} {
    justify-content: center;
  }
  ${p => p.theme.breakpoints.maxmobile} {
    /* flex-direction: column; */
    height: auto;
    a {
      margin: 10px;
    }
  }
`

export { Footer, Nav, NavLink }
