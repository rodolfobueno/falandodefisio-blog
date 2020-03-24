import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"
import Img from "gatsby-image"

const PostItem = ({
  slug,
  category,
  date,
  timeToRead,
  title,
  description,
  thumbnail,
}) => (
  <S.PostItemLink to={slug}>
    <S.ImgWrapper fluid={thumbnail} />
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <S.TagCategoryWrapper>
          <S.TagIcon />
          <S.PostItemTag>{category}</S.PostItemTag>
        </S.TagCategoryWrapper>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
