import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={logoImage.childImageSharp.fixed} />
}

export default Logo
