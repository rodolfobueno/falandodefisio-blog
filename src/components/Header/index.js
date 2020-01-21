import React from "react"
import { Link } from "gatsby"

import HeaderMenu from "../HeaderMenu"
import Logo from "../Logo"
import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapper>
    <S.Container>
      <Link to="/">
        <Logo />
      </Link>

      <HeaderMenu />
    </S.Container>
  </S.HeaderWrapper>
)

export default Header
