import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

import * as S from "../components/Post/styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.PostsWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                thumbnail,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={slug}
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              thumbnail={
                thumbnail && thumbnail.childImageSharp
                  ? thumbnail.childImageSharp.fixed
                  : undefined
              }
            />
          )
        )}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          currentPage={currentPage}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </S.PostsWrapper>
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
            thumbnail {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
