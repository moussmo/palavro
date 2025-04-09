import React from "react"
import {Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"

export default function CardsHeader(props) {
  return (
    <div className={headerStyles.cardsHeader}>
        <span className={headerStyles.cardName}>The Empress</span>
        <span className={headerStyles.cardName}>♦</span>
        <span className={headerStyles.cardName}>The Hanged Man</span>
        <span className={headerStyles.cardName}>♦</span>
        <span className={headerStyles.cardName}>Death</span>
        <span className={headerStyles.cardName}>♦</span>
        <span className={headerStyles.cardName}>The World</span>
        <span className={headerStyles.cardName}>♦</span>
        <span className={headerStyles.cardName}>Justice</span>
    </div>
  )
}