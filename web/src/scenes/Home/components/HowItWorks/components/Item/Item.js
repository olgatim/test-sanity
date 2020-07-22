import React from "react"

import s from "./Item.module.scss"

const Item = ({ data, number }) => {
  const { title, description } = data

  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <span>0{number}</span>
      </div>
      <div className={s.content}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  )
}

export default Item
