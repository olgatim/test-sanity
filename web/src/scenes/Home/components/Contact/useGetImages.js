import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "images/decor/contact-star.svg" }) {
        publicURL
      }

      decor: file(relativePath: { eq: "images/decor/contact-magic.svg" }) {
        publicURL
      }
    }
  `)

  return data
}
