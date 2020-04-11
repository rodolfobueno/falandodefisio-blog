import styled from "styled-components"

export const FooterWrapper = styled.footer`
  align-items: center;
  background-color: var(--gray);
  bottom: 0px;
  box-shadow: 2px 3px 4px rgba(18, 18, 18, 0.12);
  border-top: 1px solid var(--borders);
  color: var(--white);
  display: flex;
  height: 3rem;
  justify-content: center;
  left: 0px;
  right: 0px;
  position: fixed;
`

export const FooterByWho = styled.div`
  font-size: 0.8rem;
`
export const Link = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: var(--white);
`
