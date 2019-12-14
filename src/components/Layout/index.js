import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"
import Header from "../Header"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <S.LayoutMain>
        <Header />

        {children}
      </S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
