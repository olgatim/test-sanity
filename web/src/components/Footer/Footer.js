import React from "react"
import FooterTop from "./components/FooterTop"
import FooterBottom from "./components/FooterBottom"

import s from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerTop}>
        <FooterTop />
      </div>
      <div className={s.footerBottom}>
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
