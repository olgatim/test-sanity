import React from "react"
import { Link } from "gatsby"

import s from "./Card.module.scss"

const Card = ({ data }) => {
  const { name, image, tags, year } = data

  return (
    <div className={s.wrap}>
      <div className={s.title}>{name}</div>
      <Link to="/" className={s.imageBlock}>
        <div className={s.imageWrap}>
          <img src={image.asset.fluid.src} className={s.image} alt={name} />
        </div>
      </Link>
      <div className={s.footer}>
        <div className={s.tags}>{tags}</div>
        <div className={s.year}>{year}</div>
      </div>
    </div>
  )
}

export default Card
