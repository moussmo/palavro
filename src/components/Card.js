import React from "react"
import useCardData from "../static_queries/useCardData"
import * as cardStyles from "../styles/components/card.module.scss"

export default function Card(props) {
const cards = useCardData()
const randomCard = cards[Math.floor(Math.random() * cards.length)]
const imageUrl = `/cards/${randomCard.image.relativePath}`
const imageDescription = `${randomCard.description}`

const randomTilt = Math.floor(Math.random() * 8) + 1
const tiltClass = cardStyles[`cardTilt${randomTilt}`]
  return (
    <div className={`${cardStyles.cardContainer}`}>
        <img src={imageUrl} className={`${cardStyles.cardImage} ${tiltClass}`}/>
        <span className= {`${cardStyles.cardDescription}`}>{imageDescription}</span>
    </div>
  )
}