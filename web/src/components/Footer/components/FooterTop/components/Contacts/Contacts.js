import React from "react"

import s from "./Contacts.module.scss"

const Contacts = () => {
  return (
    <div className={s.wrap}>
      <div className={s.title}>Contacts</div>
      <div className={s.list}>
        <div className={s.item}>
          <div className={s.itemTitle}>Phone</div>
          <a
            href="tel:+1(345)964-5354"
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            +1 (345) 964-5354
          </a>
        </div>
        <div className={s.item}>
          <div className={s.itemTitle}>E-mail</div>
          <a
            href="mailto:Divelement@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            Divelement@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts
