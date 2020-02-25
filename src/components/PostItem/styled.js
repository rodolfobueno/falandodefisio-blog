import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Tag } from "styled-icons/boxicons-regular/Tag"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border: 1px solid var(--borders);
  display: flex;
  margin: 1rem 2rem;
  width: 100%;
  padding: 1rem 0px;
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
  padding-top: 0.2rem;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 1.5rem;
`

export const PostItemDate = styled.time`
  color: #757575;
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

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`

export const TagIcon = styled(Tag)`
  display: block;
  margin-right: 0.2rem;
  width: 1rem;
`

export const TagCategoryWrapper = styled.div`
  display: inline-flex;
  padding-top: 1rem;
`
