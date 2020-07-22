import React from "react"
import { ReactSVG } from "react-svg"
import useGetImages from "./useGetImages"

import s from "./Tiile.module.scss"

const Title = () => {
  const { decor } = useGetImages()

  return (
    <div className={s.wrap}>
      About us
      <ReactSVG src={decor} className={s.decor} />
    </div>
  )
}

export default Title
