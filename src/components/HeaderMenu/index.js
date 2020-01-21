import React from "react"

import * as S from "./styled"
import links from "./content"

import { Lightbulb as Light } from "styled-icons/remix-line/Lightbulb"
import { Search } from "styled-icons/boxicons-regular/Search"

const HeaderMenu = () => (
  <S.HeaderMenuWrapper>
    {/* <S.HeaderMenuList>
      {links.map((link, i) => (
        <S.HeaderMenuListItem key={i}>
          <S.HeaderMenuListItemLink to={link.url} activeClassName="active">
            {link.label}
          </S.HeaderMenuListItemLink>
        </S.HeaderMenuListItem>
      ))}
    </S.HeaderMenuList> */}
    <S.HeaderMenuIcons>
      <S.HeaderMenuIconSpan>
        <Search />
      </S.HeaderMenuIconSpan>
      <S.HeaderMenuIconSpan>
        <Light />
      </S.HeaderMenuIconSpan>
    </S.HeaderMenuIcons>
  </S.HeaderMenuWrapper>
)

export default HeaderMenu
