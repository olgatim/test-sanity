import React from "react"
import FooterInfo from "./components/FooterInfo"
import Contacts from "./components/Contacts"

import s from "./FooterTop.module.scss"

const FooterTop = () => {
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.infoBlock}>
          <FooterInfo />
        </div>
        <div className={s.contacts}>
          <Contacts />
        </div>
      </div>
    </div>
  )
}

export default FooterTop
