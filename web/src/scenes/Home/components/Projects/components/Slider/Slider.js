import React from "react"
import Swiper from "react-id-swiper"
import Card from "../Card"

import s from "./Slider.module.scss"

const params = {
  slidesPerView: "auto",
  spaceBetween: 24,
}
const Slider = ({ projects }) => {
  return (
    <div className={s.wrap}>
      <Swiper {...params}>
        {projects.map(({ node }, i) => {
          return (
            <div key={node._id} className={s.slide}>
              <Card data={node} />
            </div>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Slider
