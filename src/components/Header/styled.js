import styled from "styled-components"
import media from "styled-media-query"

export const HeaderWrapper = styled.header`
  display: block;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  width: 100%;
  z-index: 5;
  background-color: var(--background);
  border-bottom: 1px solid var(--borders);
`

export const Container = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  height: 4.8rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`
