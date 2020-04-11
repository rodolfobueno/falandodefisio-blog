import React from "react"

import * as S from "./styled"

const Social = ({ link, title }) => {
  return (
    <S.Social>
      <S.SocialItem href={link} title={title}>
        <S.SocialInstagram />
      </S.SocialItem>
    </S.Social>
  )
}

export default Social
