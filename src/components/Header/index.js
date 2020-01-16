import React from "react"

import HeaderMenu from "../HeaderMenu"
import Logo from "../Logo"
import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapper>
    <Logo />

    <HeaderMenu />
  </S.HeaderWrapper>
)

export default Header
