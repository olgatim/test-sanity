import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo.svg" }) {
        publicURL
      }
    }
  `)

  return { logo: logo.publicURL }
}
