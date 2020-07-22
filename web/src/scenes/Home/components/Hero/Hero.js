import React from "react"
import { ReactSVG } from "react-svg"
import useGetImages from "./useGetImages"

import s from "./Hero.module.scss"

const Hero = () => {
  const { noteStar, stroke, magic } = useGetImages()

  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.description}>
          We are <span className={s.highlighted}>Divelement</span>, a creative
          studio based in Mexico.
        </div>
        <h1 className={s.title}>
          <span className={s.highlighted}>Idea</span> driven{" "}
          <span className={s.titleShift}>development</span>
        </h1>
        <div className={s.note}>
          With a little bit of wizardy!
          <ReactSVG src={noteStar.publicURL} className={s.noteIcon} />
        </div>
      </div>
      <ReactSVG src={stroke.publicURL} className={s.stroke} />
      <ReactSVG src={magic.publicURL} className={s.magic} />
    </div>
  )
}

export default Hero
