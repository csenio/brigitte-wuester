import React from "react"
import { Layout, Text, Box } from "~components"
import SEO from "../components/seo"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  min-width: 100%;
  max-height: 100vh;
  overflow: hidden;
  position: absolute;
  ${p => p.theme.breakpoints.maxlaptop} {
    display: none;
  }
`

const Card = styled(Box)`
  box-shadow: ${p => p.theme.shadows.z3};
  background: ${p => p.theme.colors.whiteTransparent};
  height: 500px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  text-align: center;
`

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div``

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "contact.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
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

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[
        `Keramik`,
        `Brigitte Wuester`,
        `Aidling`,
        `Riegsee`,
        `Art`,
        `Kunst`,
        `Pottery`,
        `Skulptur`,
        `Contact`
      ]}
    />
    <Body>
      <HeroImage />
      <Card pl="50px" pr="50px" width="70%">
        <Text fontSize="30px" color="brown" mb="10px" as="h1">
          Contact
        </Text>
        <Content>
          <Text as="h3" mt="20px">
            Mailing adress:
          </Text>
          <Text as="p">Mesnerhauserstr. 8 - 82418 Aidling</Text>
          <Text as="p">bwuester(at)posteo.de</Text>
          <Text as="p">+491754789297</Text>
          <Text as="h3" mt="20px">
            Workshop:
          </Text>
          <Text as="p">Dorfstr.11 Rgb. 82418 Hofheim</Text>
          <Text as="h3" mt="20px">
            opening hours
          </Text>
          <Text as="p">by arrangement</Text>
        </Content>
      </Card>
    </Body>
  </Layout>
)

export default ContactPage
