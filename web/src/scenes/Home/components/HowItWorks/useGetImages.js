import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      curlyBrace: file(relativePath: { eq: "images/decor/curly-brace.svg" }) {
        publicURL
      }
      decor: file(relativePath: { eq: "images/decor/how-it-works-magic.svg" }) {
        publicURL
      }
    }
  `)

  return data
}
