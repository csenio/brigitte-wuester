import styled from "styled-components"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.white};
  font-size: 14px;
  letter-spacing: 0.2em;
  margin-right: 30px;
`

const Logo = styled(Link)`
  color: ${p => p.theme.colors.white};
  margin-right: auto;
  display: flex;
  align-items: center;
  font-size: 30px;
  img {
    margin-right: 15px;
  }
`

const Footer = styled.footer`
  padding: 240px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${p => p.theme.colors.grey};
  background: ${p => p.theme.colors.brand};
  color: ${p => p.theme.colors.white};
`

const Nav = styled.nav`
  padding: 0 144px;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
`

export { Footer, Nav, NavLink, Logo }
