import React, { useEffect, useState } from 'react'
import {Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import Card from "./Card"
import StaircaseTitle from "./StaircaseTitle"
import NormalTitle from "./NormalTitle"
import CardsHeader from "./CardsHeader"

export default function Header(props) {
  const currentPage = props.page; 
  const isActive = (page) => currentPage === page ? headerStyles.active : "";
  const [startTime] = useState(() => {
    return typeof window !== "undefined" ? Date.now() : 0
  })

  const [shrink, setShrink] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true)
      } else {
        setShrink(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
<div className={`${headerStyles.header} ${shrink ? headerStyles.shrink : ""}`}>
      <div className={headerStyles.cardsWrapper}>
        <CardsHeader/>
      </div>
      <div className={headerStyles.titleHeader} style={{"--animation-delay": `-${(startTime % 8000) / 1000}s`}}>
        <NormalTitle/>
      </div>
      <div className={headerStyles.filtermenu}>
        <Link to="/"><span className={`${headerStyles.filteroption} ${isActive("home")}`}>All</span></Link>
        <Link to="/thoughts"><span className={`${headerStyles.filteroption} ${isActive("thoughts")}`}>Thoughts</span></Link>
        <Link to="/reviews"><span className={`${headerStyles.filteroption} ${isActive("reviews")}`}>Reviews</span></Link>
        <Link to="/science_tech"><span className={`${headerStyles.filteroption} ${isActive("science_tech")}`}>Tech</span></Link>
        <Link to="/info"><span className={`${headerStyles.filteroption} ${isActive("info")}`}>About me</span></Link>
      </div>
    </div>
  )
}