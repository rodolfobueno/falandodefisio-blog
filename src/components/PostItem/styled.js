import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

import { Tag } from "styled-icons/boxicons-regular/Tag"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
`

export const PostItemWrapper = styled.div`
  align-items: center;
  border: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 100%;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  background-color: var(--background);
  &:hover {
    box-shadow: 1px 1px 2px -1px rgba(0, 0, 0, 0.3);
  }
`

export const PostItemTag = styled.div`
  align-items: center;
  letter-spacing: 2px;
  font-size: 11px;
  text-transform: lowercase;
  vertical-align: top;
  padding-top: 0.3rem;
  display: inline-block;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`

export const PostItemDate = styled.time`
  color: var(--gray);
  display: block;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: var(--postColor);
  margin: 1rem 0rem;
`

export const PostItemDescription = styled.div`
  font-size: 0.9rem;
  color: var(--gray);
  line-height: 1.2;
`

export const TagIcon = styled(Tag)`
  display: inline-block;
  margin-right: 0.2rem;
  width: 1rem;
`

export const TagCategoryWrapper = styled.div`
  display: inline-block;
  padding-top: 1rem;
`
export const ImgWrapper = styled(Img)`
  width: 100%;
  height: 250px;
  margin: 0;
  padding-bottom: 1rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
