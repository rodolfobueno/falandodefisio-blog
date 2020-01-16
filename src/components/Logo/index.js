import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Logo = () => {
  const { logoImage } = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(height: 55, width: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <S.ImgWrapper fixed={logoImage.childImageSharp.fixed} />
}

export default Logo
