import React from "react"
import {Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import Card from "./Card"
import StaircaseTitle from "./StaircaseTitle"

export default function Header(props) {
  return (
    <header className={`${headerStyles.header}`}>
      <nav className={headerStyles.header__nav} role="navigation" aria-label="main navigation">
        <StaircaseTitle/>
        <Card/>
        <div>
          <h1>
            <Link to="/info">
              About me
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}