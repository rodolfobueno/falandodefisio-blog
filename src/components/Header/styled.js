import styled from "styled-components"
import media from "styled-media-query"

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 5rem;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid var(--borders);
  z-index: 1030;
  background-color: var(--background);

  ${media.lessThan("small")`
    padding: 0.8rem 1rem;
  `};
`
