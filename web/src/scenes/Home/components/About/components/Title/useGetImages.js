import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { decor } = useStaticQuery(graphql`
    query {
      decor: file(relativePath: { eq: "images/decor/double-slash-decor.svg" }) {
        publicURL
      }
    }
  `)

  return { decor: decor.publicURL }
}
