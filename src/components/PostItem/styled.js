import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border: 1px solid var(--borders);
  display: flex;
  margin: 1rem 2rem;
  width: 100%;
  padding: 1rem 0px;
  width: 100%;
`

export const PostItemTag = styled.div`
  font-size: 1rem;
  width: 135px;
  margin-bottom: 0.7rem;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  align-items: center;
  background: ${props =>
    props.background ? props.background : "var(--highlight)"};
  color: var(--postColor);
  display: flex;
  font-weight: 700;
  justify-content: center;
  text-transform: uppercase;
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
  color: #333;
  margin: 1.2rem 0rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
