import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const image = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/landing/about-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      decor: file(relativePath: { eq: "images/decor/about-magic.svg" }) {
        publicURL
      }
    }
  `)
  return image
}
