import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      noteStar: file(
        relativePath: { eq: "images/landing/note-star-icon.svg" }
      ) {
        publicURL
      }
      stroke: file(relativePath: { eq: "images/landing/stroke.svg" }) {
        publicURL
      }
      magic: file(relativePath: { eq: "images/landing/magic.svg" }) {
        publicURL
      }
    }
  `)

  return data
}
