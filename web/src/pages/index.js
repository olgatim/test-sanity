import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    allSanityBlogPost: { edges },
  } = useStaticQuery(graphql`
    query {
      allSanityBlogPost {
        totalCount
        edges {
          node {
            _id
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>
        {edges.map(({ node }) => {
          return <div key={node._id}>{node.name}</div>
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
