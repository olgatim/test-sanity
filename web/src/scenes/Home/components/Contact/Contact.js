import React from "react"
import { Link } from "gatsby"
import Note from "@components/Note"
import { ReactSVG } from "react-svg"
import useGetImages from "./useGetImages"
import Title from "./components/Title"

import s from "./Contact.module.scss"

const Contact = () => {
  const { icon, decor } = useGetImages()
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.title}>
          <Title />
        </div>

        <div className={s.box}>
          <div className={s.boxContent}>
            <div className={s.decorWrap}>
              <ReactSVG src={icon.publicURL} className={s.starImage} />
            </div>
            <Link to="/" className={s.text}>
              contact us
            </Link>
            <div className={s.note}>
              <Note>How we operate?</Note>
            </div>
          </div>
        </div>
      </div>
      <ReactSVG src={decor.publicURL} className={s.decor} />
    </div>
  )
}

export default Contact
