import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { logo, logoMobile } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo.svg" }) {
        publicURL
      }
      logoMobile: file(relativePath: { eq: "images/logo-mobile.svg" }) {
        publicURL
      }
    }
  `)

  return { logo: logo.publicURL, logoMobile: logoMobile.publicURL }
}
