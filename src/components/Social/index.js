import React from "react"
import ReactGA from "react-ga"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styled"

const trackClick = item => {
  ReactGA.event({
    category: "Social",
    action: "click",
    label: `Social - ${item}`,
  })
}

const Social = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitterLink
            instagramLink
          }
        }
      }
    }
  `)

  return (
    <S.Social>
      {/*     <S.SocialItem
        href={site.siteMetadata.social.twitterLink}
        title="Twitter"
        onClick={() => trackClick("Twitter")}
      >
        <S.SocialTwitter />
      </S.SocialItem> */}
      <S.SocialItem
        href={site.siteMetadata.social.instagramLink}
        title="Instagram"
        onClick={() => trackClick("Instagram Pleni")}
      >
        <S.SocialInstagram />
      </S.SocialItem>
    </S.Social>
  )
}

export default Social
