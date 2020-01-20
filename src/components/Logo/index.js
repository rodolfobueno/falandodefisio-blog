import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Logo = () => {
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 180) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <S.ImgWrapper fluid={logoImage.childImageSharp.fluid} />
}

export default Logo
