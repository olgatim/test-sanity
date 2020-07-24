import React from "react"
import Logo from "./components/Logo"
import { Link } from "gatsby"

import LanguageSwitcher from "./components/LanguageSwitcher"
import Burger from "./components/Burger"

import s from "./Header.module.scss"

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <div className={s.navigation}>
          <LanguageSwitcher />
          <Link to="/" className={s.quoteButton}>
            Quote now
          </Link>
          <div className={s.burgerWrap}>
            <Burger />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
