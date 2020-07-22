import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      bracket: file(relativePath: { eq: "images/decor/bracket-icon.svg" }) {
        publicURL
      }
      decor: file(relativePath: { eq: "images/decor/projects-magic.svg" }) {
        publicURL
      }
    }
  `)

  return data
}
