import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = props => (
  <Layout>
    <SEO title="Busca de artigos" />
    <Search props={props} />
  </Layout>
)

export default SearchPage
