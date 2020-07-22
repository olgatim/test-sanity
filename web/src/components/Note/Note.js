import React from "react"
import { ReactSVG } from "react-svg"
import useGetImages from "./useGetImages"

import s from "./Note.module.scss"

const Note = ({ children }) => {
  const { icon } = useGetImages()
  return (
    <div className={s.wrap}>
      {children}
      <ReactSVG src={icon} className={s.noteIcon} />
    </div>
  )
}

export default Note
