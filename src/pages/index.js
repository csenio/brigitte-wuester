import React from "react"
import { Layout, HeroImage, Text, Box } from "~components"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const Card = styled(Box)`
  box-shadow: ${p => p.theme.shadows.z3};
  background: ${p => p.theme.colors.white};
  height: 500px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  text-align: center;
  padding-left: 40%;
  padding-right: 50px;
  width: 70%;
  margin-bottom: 30px;
  h1 {
    margin-bottom: 15px;
    font-size: 35px;
  }
  ${p => p.theme.breakpoints.maxlaptop} {
    margin-top: 100px;
    padding: 30px;
    width: 80%;
    height: auto;
    h1 {
      font-size: 35px;
    }
  }
  ${p => p.theme.breakpoints.maxmobile} {
    height: auto;
    padding: 0;
    width: 95%;
    margin-top: 140px;
    h1 {
      margin-bottom: 0;
      margin-top: 5px;
      font-size: 30px;
    }
  }
`

const Body = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  font-size: 18px;
  ${p => p.theme.breakpoints.maxlaptop} {
    font-size: 18px;
    margin: 15px;
  }
  ${p => p.theme.breakpoints.maxmobile} {
    font-size: 15px;
    margin: 15px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Welcome"
      keywords={[
        `Keramik`,
        `Brigitte Wuester`,
        `Aidling`,
        `Riegsee`,
        `Art`,
        `Kunst`,
        `Pottery`,
        `Skulptur`
      ]}
    />
    <Body>
      <Card>
        <HeroImage />
        <Text color="brown" as="h1">
          Brigitte Wüster
        </Text>
        <Content>
          <Text as="p">
            „Wahrscheinlich ist wichtig, dass die Sachen einfach und komplex
            sind. Es ist nicht so, dass das Komplexe durch eine komplizierte
            Form ausgedrückt wird, sondern das Komplexe ist vielleicht besser
            durch eine einfache Form auszudrücken. In der Einfachheit und
            Reduzierung ist für mich eine größere Vielfalt enthalten als in
            einer nach außen hin vielgestaltigen, komplizierten Form.“
          </Text>
          <Text mt="20px" as="p">
            Norbert Prangenberg (1949-2012)
          </Text>
        </Content>
      </Card>
    </Body>
  </Layout>
)

export default IndexPage
