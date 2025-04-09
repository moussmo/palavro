import React, { useState } from "react"
import {Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import * as cardStyles from "../styles/components/card.module.scss"
import Card from "./Card"

export default function CardsHeader(props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpanded = () => {
    setIsExpanded(prevState => !prevState)
  }
  return (
    <div className={cardStyles.cardsContainer}>
      <div className={cardStyles.cardsHeader}>
        {["The Empress", "The Hanged Man", "Death", "The World", "Justice"].map((card, i) => (
          <React.Fragment key={card}>
            <span className={cardStyles.cardName} onClick={toggleExpanded}>
              {card}
            </span>
            {i < 4 && <span className={cardStyles.cardName} onClick={toggleExpanded}>♦</span>}
          </React.Fragment>
        ))}
      </div>
      <div className={`${cardStyles.hiddenCardsImages} ${isExpanded ? cardStyles.expandedCardsImages : ""}`}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}