import React from "react"

import Social from "../Social"

import * as S from "./styled"

const Footer = () => (
  <S.FooterWrapper>
    <Social />
    <S.FooterByWho>
      Um blog por:{" "}
      <a target="_blank" href="http://www.instagram.com.br/pleni_saude">
        @plenisaude
      </a>
    </S.FooterByWho>
  </S.FooterWrapper>
)

export default Footer
