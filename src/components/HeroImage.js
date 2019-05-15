import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "landing.png" }) {
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
