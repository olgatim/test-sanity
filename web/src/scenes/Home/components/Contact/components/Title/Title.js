import React from "react"

import s from "./Title.module.scss"

const Title = () => {
  return (
    <div className={s.wrap}>
      Let’s build something <span className={s.highlighted}>magical</span>{" "}
      together
    </div>
  )
}

export default Title
