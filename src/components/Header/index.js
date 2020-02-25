import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import HeaderMenu from "../HeaderMenu"
import Logo from "../Logo"
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

const Header = () => (
  <S.HeaderWrapper>
    <S.Container>
      <AniLink
        to="/"
        cover
        direction="top"
        bg={getThemeColor()}
        duration={0.6}
        title="Página inicial"
      >
        <Logo />
      </AniLink>

      <HeaderMenu />
    </S.Container>
  </S.HeaderWrapper>
)

export default Header
