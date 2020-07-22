import React from "react"
import { ReactSVG } from "react-svg"
import useGetImages from "./useGetImages"

import Title from "./components/Title"
import Card, { VARIANTS } from "./components/Card"

import s from "./Features.module.scss"

const cardData = [
  {
    title: "Focus",
    description: "We always have our eye on the prize.",
    variant: VARIANTS.GREEN,
  },
  {
    title: "Passion",
    description: "We love to develop amazing apps.",
    variant: VARIANTS.INDIGO,
  },
  {
    title: "Creativity",
    description: "First and foremost we are idea guys.",
    variant: VARIANTS.INDIGO,
  },
  {
    title: "Community",
    description: "Our doors are always open to everyone.",
    variant: VARIANTS.GREEN,
  },
]

const Features = () => {
  const { image, decor } = useGetImages()
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div className={s.content}>
          <Title />
          <p className={s.description}>
            Through this websites discover who we are, our work and ways of
            doing it. Development through efficiency, communication and a bit of
            wizardry.
          </p>
          <div className={s.imageWrap}>
            <img
              src={image.childImageSharp.fluid.src}
              className={s.featuresImage}
              alt="features image"
            />
          </div>
        </div>
        <div className={s.cardsWrap}>
          {cardData.map(data => (
            <div className={s.cardItem} key={data.title}>
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>
      <ReactSVG src={decor.publicURL} className={s.decor} />
    </div>
  )
}

export default Features
