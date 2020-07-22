import React from "react"
import classnames from "classnames"
import { func, bool } from "prop-types"
import styles from "./Burger.module.scss"

const Burger = ({ handleStateChange, menuOpen }) => {
  const handleClick = () => {
    handleStateChange()
  }

  const burgerStyles = classnames(styles.wrap, { [styles.open]: menuOpen })

  return (
    <div className={burgerStyles} onClick={handleClick}>
      <span />
      <span />
    </div>
  )
}

Burger.propTypes = {
  handleStateChange: func,
  menuOpen: bool,
}

export default Burger
