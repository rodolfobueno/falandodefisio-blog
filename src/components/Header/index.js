import React from "react"

import HeaderMenu from "../HeaderMenu"
import HeaderLogo from "../HeaderLogo"
import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapper>
    <HeaderLogo />

    <HeaderMenu />
  </S.HeaderWrapper>
)

export default Header
