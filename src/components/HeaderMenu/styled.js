import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderMenuWrapper = styled.nav``

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
