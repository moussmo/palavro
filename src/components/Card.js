import React, { useState, useEffect } from "react"
import useCardData from "../static_queries/useCardData"
import * as cardStyles from "../styles/components/card.module.scss"
import { useLocation } from "@reach/router"

export default function Card(props) {
    const cards = useCardData()
    const location = useLocation()
    const locationKey = location.key
    const isHomePage = location.pathname === "/"

    const [cardTilt, setCardTilt] = useState(null)
    const [cardImage, setCardImage] = useState(null)
    const [cardDescription, setCardDescription] = useState(null)
    const [shouldAnimate, setShouldAnimate] = useState(false)

    useEffect(() => {
        if (isHomePage) {
            const randomCardIndex = Math.floor(Math.random() * cards.length)
            const randomTilt = Math.floor(Math.random() * 8) + 1
            const selectedCard = cards[randomCardIndex]

            localStorage.setItem("selectedCard", JSON.stringify(selectedCard))
            localStorage.setItem("selectedTilt", randomTilt)
            
            const selectedCardImage = `/cards/${selectedCard.image.relativePath}`
            setCardImage(selectedCardImage)
            setCardDescription(selectedCard.description)
            setCardTilt(randomTilt)
            setShouldAnimate(false)
        } else {
            const storedCard = JSON.parse(localStorage.getItem("selectedCard"))
            const storedTilt = localStorage.getItem("selectedTilt")

            if (storedCard && storedTilt) {
                const storedCardImage = `/cards/${storedCard.image.relativePath}`
                setCardImage(storedCardImage)
                setCardDescription(storedCard.description)
                setCardTilt(storedTilt)
                setShouldAnimate(false)
            }
        }
    }, [locationKey])

    const transitionClass = shouldAnimate ? cardStyles.transitionEffect : ""
    const tiltClass = cardTilt ? cardStyles[`cardTilt${cardTilt}`] : ""

    const effectClass = `${tiltClass} ${transitionClass}`
    return (
        <div key={locationKey} className={`${cardStyles.cardContainer}`}>
            <img src={cardImage} className={`${cardStyles.cardImage} ${effectClass}`}/>
            <span className= {`${cardStyles.cardDescription}`}>{cardDescription}</span>
        </div>
    )
}