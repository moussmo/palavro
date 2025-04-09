import React from "react"
import * as staircaseTitleStyles from "../styles/components/staircasetitle.module.scss"
import {Link } from "gatsby"

export default function StaircaseTitle() {
    return (
        <div>
            <Link to="/" className={`${staircaseTitleStyles.staircaseTitle}`}>
                <span>P</span>
                <span>A</span>
                <span>L</span>
                <span>A</span>
                <span>V</span>
                <span>R</span>
                <span>O</span>
                <span>P</span>
                <span>A</span>
                <span>L</span>
                <span>A</span>
                <span>V</span>
                <span>R</span>
                <span>O</span>
            </Link>
        </div>
    )
}