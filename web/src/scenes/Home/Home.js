import React from "react"

import Hero from "./components/Hero"
import Features from "./components/Features"
import About from "./components/About"
import Projects from "./components/Projects"
import HowItWorks from "./components/HowItWorks"
import Contact from "./components/Contact"

import s from "./Home.module.scss"

const Home = () => {
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <Hero />
        <Features />
        <About />
        <Projects />
        <HowItWorks />
        <Contact />
      </div>
    </div>
  )
}

export default Home
