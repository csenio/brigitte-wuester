import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  /* min-width: 500px; */
  width: 60%;
  left: -100px;
  position: absolute;
  ${p => p.theme.breakpoints.maxlaptop} {
    width: 100%;
    left: auto;

    position: relative;
  }
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "landing.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Img fluid={data.logo.childImageSharp.fluid} />
      </Container>
    )}
  />
)
export default HeroImage
