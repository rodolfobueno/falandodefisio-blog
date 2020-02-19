import React from "react"

import Social from "../Social"

import * as S from "./styled"

const Footer = () => (
  <S.FooterWrapper>
    <Social />
    <S.FooterByWho>
      Um blog por{" "}
      <S.FooterByWhoLink
        target="_blank"
        href="http://www.plenifisioterapia.com.br"
        rel="noopener noreferrer"
      >
        Pleni Saúde Integrada
      </S.FooterByWhoLink>
      <S.FooterByWhoLink
        target="_blank"
        href="http://www.instagram.com.br/pleni_saude"
        rel="noopener noreferrer"
      ></S.FooterByWhoLink>
    </S.FooterByWho>
  </S.FooterWrapper>
)

export default Footer
