import React, { useState } from "react"
import qs from "qs"
import ReactGA from "react-ga"

import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"
import * as S from "./styled"

const trackSearch = term => {
  ReactGA.event({
    category: "Search",
    action: "search",
    label: `Search - ${term}`,
  })
}

const urlToSearchState = ({ search }) => qs.parse(search.slice(1))

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = ({ props }) => {
  const { location } = props

  const [searchState, setSearchState] = useState(urlToSearchState(location))

  const onSearchStateChange = updatedSearchState => {
    trackSearch(updatedSearchState.query)
    setSearchState(updatedSearchState)
  }

  return (
    <S.SearchWrapper>
      <InstantSearch
        searchClient={searchClient}
        indexName={algolia.indexName}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >
        <SearchBox translations={{ placeholder: "Pesquisar..." }} />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
