import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Footer, Nav, NavLink } from "./styles"
import "../../styles/globals.css"
import styled from "styled-components"

const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: ${p => p.theme.colors.beige};
  justify-content: center;
  align-items: center;
`

const menus = [
  {
    text: "home",
    to: "/",
    key: 0
  },
  {
    text: "contact",
    to: "/contact",
    key: 1
  },
  {
    text: "current",
    to: "/current",
    key: 2
  },
  {
    text: "gallery",
    to: "/gallery",
    key: 3
  },
  {
    text: "about",
    to: "/about",
    key: 4
  }
]

const Layout = ({ children }) => (
  <Background>
    <Nav>
      {menus.map(({ text, to, key }) => (
        <NavLink activeClassName="selected" to={to} key={key}>
          {text}
        </NavLink>
      ))}
    </Nav>
    <main>{children}</main>
    {/* <Footer>© Copyright 2019 brigitte-wuester.com</Footer> */}
  </Background>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
