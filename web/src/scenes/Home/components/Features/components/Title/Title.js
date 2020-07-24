import React from "react"

import s from "./Title.module.scss"

const Highlighted = ({ children }) => {
  return <span className={s.highlighted}>{children}</span>
}

const Title = () => {
  return (
    <div className={s.wrap}>
      Idea and <br />
      <span className={s.shiftedText}>a bit of</span> <br />
      <Highlighted>wizardry</Highlighted>
    </div>
  )
}

export default Title
