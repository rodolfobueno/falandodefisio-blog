import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const PresentationWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 650px;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 1.5em;
  padding-top: 0.5rem;
  text-align: justify;
  ${media.lessThan("large")`
    padding: 0 2rem;
  `}
`
export const DivImgWrapper = styled.div`
  padding-bottom: 1.5rem;
`
export const ImgWrapper = styled(Img)`
  width: 12rem;
  margin: auto;
`
export const Title = styled.h2`
  text-align: center;
  padding-bottom: 20px;
`
export const Link = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: blue;
`
export const DivPerfil = styled.div`
  padding: 20px 0;
`
