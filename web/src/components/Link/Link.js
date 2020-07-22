import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { ReactSVG } from "react-svg"
import useGetImages from "./useGetImages"

import s from "./Link.module.scss"

const Link = ({ link, children }) => {
  const { icon } = useGetImages()
  return (
    <GatsbyLink to={link} className={s.link}>
      {children}
      <ReactSVG src={icon} className={s.icon} />
    </GatsbyLink>
  )
}

export default Link
