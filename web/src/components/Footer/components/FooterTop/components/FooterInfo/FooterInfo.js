import React from "react"

import s from "./FooterInfo.module.scss"

const FooterInfo = () => {
  return (
    <div className={s.wrap}>
      <div className={s.title}>We’re ready, let’s do this</div>
      <div className={s.description}>
        Keen to chat about an opportunity or interested in working with us on
        something right away?
        <br />
        Let’s grab a coffee.
      </div>
    </div>
  )
}

export default FooterInfo
