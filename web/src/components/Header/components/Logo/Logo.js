import React from "react"
import { Link } from "gatsby"
import { ReactSVG } from "react-svg"
import useGetLogo from "./useGetImages"
import useResizeWidth from "@hooks/useResizeWidth"

import s from "./Logo.module.scss"

const mobileScreenWidth = 992

const Logo = () => {
  const { logo, logoMobile } = useGetLogo()
  const { width } = useResizeWidth()

  return (
    <div className={s.logo}>
      <Link to="/" className={s.link}>
        {width && width > mobileScreenWidth && (
          <ReactSVG src={logo} className={s.logoImage} />
        )}

        {width && width <= mobileScreenWidth && (
          <ReactSVG src={logoMobile} className={s.logoImage} />
        )}
      </Link>
    </div>
  )
}

export default Logo
