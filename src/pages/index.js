import React from "react"
import { Layout, HeroImage, Section } from "~components"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroImage />
    <Section dark>
      <h1>Blossom works for you</h1>
      <p>So you can work on bringing your community together</p>
    </Section>
  </Layout>
)

export default IndexPage
