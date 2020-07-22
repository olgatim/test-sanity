import React from "react"
import { ReactSVG } from "react-svg"
import useGetImages from "./useGetImages"

import s from "./Socials.module.scss"

const Socials = () => {
  const { gmail, instagram, facebook } = useGetImages()
  const data = [
    {
      title: "Gmail",
      icon: gmail,
      url: "/",
    },
    {
      title: "Instagram",
      icon: instagram,
      url: "/",
    },
    {
      title: "Facebook",
      icon: facebook,
      url: "/",
    },
  ]
  return (
    <div className={s.wrap}>
      {data.map(({ title, url, icon }) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
          key={title}
        >
          <ReactSVG src={icon.publicURL} className={s.socialIcon} />
        </a>
      ))}
    </div>
  )
}

export default Socials
