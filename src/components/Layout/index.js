import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Footer, Nav, NavLink, Logo } from "./styles"
import LOGO from "../../images/logo.svg"
import "../../styles/globals.css"

const Layout = ({ children }) => (
  <>
    <Nav>
      <Logo to="/">
        <img src={LOGO} alt="logo" /> blossom
      </Logo>
      <NavLink to="/signup">SIGN UP</NavLink>
      <NavLink to="#">MENU</NavLink>
    </Nav>
    <main>{children}</main>
    <Footer>© Copyright 2019 Blossom.com</Footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
