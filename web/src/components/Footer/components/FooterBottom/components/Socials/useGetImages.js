import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      gmail: file(relativePath: { eq: "images/socials/gmail.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "images/socials/instagram.svg" }) {
        publicURL
      }
      facebook: file(relativePath: { eq: "images/socials/facebook.svg" }) {
        publicURL
      }
    }
  `)

  return data
}
