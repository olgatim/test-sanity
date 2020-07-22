import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import s from "./Layout.module.scss"
import "@styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div className={s.wrap}>
      <Header />
      <div className={s.body}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
