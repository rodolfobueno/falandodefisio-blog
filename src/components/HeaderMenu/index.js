import React from "react"

import * as S from "./styled"
import links from "./content"

const HeaderMenu = () => (
  <S.HeaderMenuWrapper>
    <S.HeaderMenuList>
      {links.map((link, i) => (
        <S.HeaderMenuListItem key={i}>
          <S.HeaderMenuListItemLink to={link.url} activeClassName="active">
            {link.label}
          </S.HeaderMenuListItemLink>
        </S.HeaderMenuListItem>
      ))}
    </S.HeaderMenuList>
  </S.HeaderMenuWrapper>
)

export default HeaderMenu
