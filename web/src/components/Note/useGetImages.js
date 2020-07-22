import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { icon } = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "images/landing/note-star-icon.svg" }) {
        publicURL
      }
    }
  `)

  return { icon: icon.publicURL }
}
