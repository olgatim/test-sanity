import React from "react"
import { ReactSVG } from "react-svg"
import { useStaticQuery, graphql } from "gatsby"
import Title, { Highlighted } from "./components/Title"
import useGetImages from "./useGetImages"
import Card from "./components/Card"
import Link from "@components/Link"
import Note from "@components/Note"

import s from "./Projects.module.scss"

const Projects = () => {
  const {
    data: { edges },
  } = useStaticQuery(graphql`
    query {
      data: allSanityProject(
        limit: 4
        sort: { fields: _createdAt, order: ASC }
      ) {
        totalCount
        edges {
          node {
            _id
            name
            image {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            tags
            year
            _createdAt(fromNow: false)
          }
        }
      }
    }
  `)

  const { bracket, decor } = useGetImages()
  return (
    <div className={s.wrap}>
      <div className={s.title}>
        <Title icon={bracket.publicURL}>
          Recent <br />
          <Highlighted>projects</Highlighted>
        </Title>
      </div>
      <div className={s.box}>
        {edges.map(({ node }) => (
          <div className={s.card} key={node._id}>
            <Card data={node} />
          </div>
        ))}

        <div className={s.note}>
          <Note>
            It will make you <br />
            WOW!
          </Note>
        </div>
      </div>
      <div className={s.linkWrap}>
        <Link link="/">All Projects</Link>
      </div>

      <ReactSVG src={decor.publicURL} className={s.decor} />
    </div>
  )
}

export default Projects
