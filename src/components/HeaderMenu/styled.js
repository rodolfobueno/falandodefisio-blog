import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const HeaderMenuWrapper = styled.nav`
  display: flex;
`

export const HeaderMenuIcons = styled.div`
  color: #6a809a;
`

export const HeaderMenuIconSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  height: 2rem;
  width: 1.5rem;
  margin-left: 1rem;
  padding-top: 0.5rem;

  a {
    color: #6b819b;
  }
`

export const HeaderMenuList = styled.ul`
  display: flex;
`

export const HeaderMenuListItem = styled.li`
  margin-left: 1.5rem;

  .active {
    color: #dc77a3;
  }
`

export const HeaderMenuItemLink = styled(AniLink)`
  cursor: pointer;
  display: inline-block;
  height: 2rem;
  width: 1.5rem;
  margin-left: 1rem;
  padding-top: 0.8rem;
  color: #6b819b;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
