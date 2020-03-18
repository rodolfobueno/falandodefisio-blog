import React from "react"
import ReactGA from "react-ga"

import Social from "../Social"

import * as S from "./styled"

const trackClick = item => {
  ReactGA.event({
    category: "Social",
    action: "click",
    label: `Social - ${item}`,
  })
}

const Footer = () => (
  <S.FooterWrapper>
    <Social />
    <S.FooterByWho>
      Um blog por{" "}
      <S.FooterByWhoLink
        href="http://www.plenifisioterapia.com.br"
        onClick={() => trackClick("Site Pleni")}
      >
        Pleni Saúde Integrada
      </S.FooterByWhoLink>
      <S.FooterByWhoLink
        href="http://www.instagram.com.br/pleni_saude"
        onClick={() => trackClick("Instagram Pleni")}
      ></S.FooterByWhoLink>
    </S.FooterByWho>
  </S.FooterWrapper>
)

export default Footer
