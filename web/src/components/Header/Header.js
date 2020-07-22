import React from "react"
import { Link } from "gatsby"
import { ReactSVG } from "react-svg"
import useGetLogo from "./useGetImages"

import LanguageSwitcher from "./components/LanguageSwitcher"
import Burger from "./components/Burger"

import s from "./Header.module.scss"

const Header = () => {
  const { logo } = useGetLogo()
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <Link to="/" className={s.link}>
            <ReactSVG src={logo} className={s.logoImage} />
          </Link>
        </div>
        <div className={s.navigation}>
          <LanguageSwitcher />
          <button className={s.quoteButton}>Quote now</button>
          <div className={s.burgerWrap}>
            <Burger />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
