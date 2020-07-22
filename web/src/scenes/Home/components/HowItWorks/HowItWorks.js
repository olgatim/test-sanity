import React from "react"
import { ReactSVG } from "react-svg"
import Title, { Highlighted } from "./components/Title"
import Item from "./components/Item"
import Note from "@components/Note"
import useGetImages from "./useGetImages"

import { data } from "./data"

import s from "./HowItWorks.module.scss"

const HowItWorks = () => {
  const { curlyBrace, decor } = useGetImages()
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <div className={s.title}>
          <Title icon={curlyBrace.publicURL}>
            How it <br />
            <Highlighted>works</Highlighted>
          </Title>
        </div>
        <div className={s.note}>
          <Note>
            Through this websites discover who we are, our work and ways of
            doing it
          </Note>
        </div>
      </div>
      <div className={s.itemsWrap}>
        {data.map((item, index) => (
          <div className={s.item} key={item.title}>
            <Item data={item} number={index + 1} />
          </div>
        ))}
      </div>
      <ReactSVG src={decor.publicURL} className={s.decor} />
    </div>
  )
}

export default HowItWorks
