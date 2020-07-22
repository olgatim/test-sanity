import React from "react"
import { ReactSVG } from "react-svg"
import Title from "./components/Title"
import Link from "@components/Link"

import useGetImages from "./useGetImages"

import s from "./About.module.scss"

const About = () => {
  const { image, decor } = useGetImages()

  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.title}>
          <Title />
        </div>
        <p className={s.description}>
          Divelement is a high-qualified team of talented developers and
          designers. Every project is a challenge to do better that all we have
          already done!
        </p>

        <div className={s.block}>
          <div className={s.imageWrap}>
            <img
              src={image.childImageSharp.fluid.src}
              className={s.aboutImage}
              alt="about us"
            />
          </div>
          <div className={s.content}>
            <div className={s.text}>
              Time is accelerating. Marketing trends and business traditions are
              getting out of date, forcing companies to adapt themselves to the
              new reality of the future. Divelement mission is to help the
              chosen brands and companies to acquire a powerful, modern that
              would help face whatever challenge tomorrow may bring.
            </div>
            <div className={s.buttonWrap}>
              <Link link="/">explore more</Link>
            </div>
          </div>
        </div>
      </div>

      <ReactSVG src={decor.publicURL} className={s.decor} />
    </div>
  )
}

export default About
