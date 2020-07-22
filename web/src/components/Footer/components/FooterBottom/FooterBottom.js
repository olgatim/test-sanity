import React from "react"

import Socials from "./components/Socials"

import s from "./FooterBottom.module.scss"

const FooterBottom = () => {
  return (
    <div className={s.wrap}>
      <div className={s.socials}>
        <Socials />
      </div>
      <div className={s.copyright}>© Divelement Studio 2020</div>
    </div>
  )
}

export default FooterBottom
