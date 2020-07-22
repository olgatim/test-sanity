import React from "react"
import { ReactSVG } from "react-svg"

import s from "./Title.module.scss"

export const Highlighted = ({ children }) => {
  return <span className={s.highlighted}>{children}</span>
}

const Title = ({ children, icon }) => {
  return (
    <div className={s.wrap}>
      <div className={s.title}>{children}</div>
      <ReactSVG src={icon} className={s.icon} />
    </div>
  )
}

export default Title
