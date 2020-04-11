import React from "react"
import ReactGA from "react-ga"
import { graphql, useStaticQuery } from "gatsby"

import Social from "../Social"

import * as S from "./styled"

const trackClick = item => {
  ReactGA.event({
    category: "Social",
    action: "click",
    label: `Social - Footer - ${item}`,
  })
}

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagramLink
          }
        }
      }
    }
  `)

  return (
    <S.FooterWrapper>
      <Social
        title="Instagram Pleni"
        link={site.siteMetadata.social.instagramLink}
        onClick={() => trackClick("Instagram Pleni")}
      />
      <S.FooterByWho>
        Um blog por{" "}
        <S.Link
          title="Site Pleni Saúde"
          href="http://www.plenifisioterapia.com.br"
          onClick={() => trackClick("Site Pleni")}
        >
          Pleni Saúde Integrada
        </S.Link>
      </S.FooterByWho>
    </S.FooterWrapper>
  )
}

export default Footer
