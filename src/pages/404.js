import React from "react"

import { Layout } from "~components"
import SEO from "~components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Error</h1>
    <p>this page does not exist (yet?)</p>
  </Layout>
)

export default NotFoundPage
