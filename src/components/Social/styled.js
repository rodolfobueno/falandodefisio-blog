import styled from "styled-components"
import { Instagram } from "styled-icons/fa-brands"

const Icon = `
  display: block;
  height: 1.5rem;
  width: 1.5rem;
`

export const Social = styled.div`
  display: flex;
`

export const SocialItem = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  align-items: center;
  margin: 0 auto;
  color: var(--primaryColor);
  display: inline-flex;
  height: 3rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  transition: color 0.25s;
  will-change: color;
  &:focus,
  &:hover {
    color: var(--highlightColor);
  }
`
export const SocialInstagram = styled(Instagram)`
  ${Icon}
`
