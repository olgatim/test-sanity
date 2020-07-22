import React from "react"
import classnames from "classnames"

import s from "./Card.module.scss"

export const VARIANTS = {
  GREEN: "green",
  INDIGO: "indigo",
}

const Card = ({ data }) => {
  const { title, description, variant } = data

  const wrapClasses = classnames(s.wrap, {
    [s[variant]]: variant,
  })
  return (
    <div className={wrapClasses}>
      <div className={s.title}>{title}</div>
      <div className={s.content}>
        <div className={s.pixel}></div>
        <div className={s.subtitle}>{title}</div>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  )
}

export default Card
