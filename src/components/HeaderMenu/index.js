import React, { useState, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

import { Lightbulb as Light } from "styled-icons/remix-line/Lightbulb"
import { Search } from "styled-icons/boxicons-regular/Search"

const HeaderMenu = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])
  return (
    <S.HeaderMenuWrapper>
      <S.HeaderMenuIcons>
        <S.HeaderMenuIconSpan>
          <AniLink
            to="/search/"
            cover
            direction="top"
            bg={getThemeColor()}
            duration={0.6}
            title="Pesquisar"
          >
            <Search />
          </AniLink>
        </S.HeaderMenuIconSpan>
        <S.HeaderMenuIconSpan
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
          className={theme}
        >
          <Light />
        </S.HeaderMenuIconSpan>
      </S.HeaderMenuIcons>
    </S.HeaderMenuWrapper>
  )
}

export default HeaderMenu
