import styled from "styled-components"
import { Link } from "gatsby"

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

export const HeaderMenuListItemLink = styled(Link)`
  color: #637a97;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`
