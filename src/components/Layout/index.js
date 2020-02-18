import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import * as S from "./styled"
import Header from "../Header"
import Footer from "../Footer"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <S.LayoutMain>
        <TransitionPortal level="top">
          <Header />
        </TransitionPortal>
        <S.BodyWrapper>{children}</S.BodyWrapper>
        <Footer />
      </S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
