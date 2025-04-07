import React from "react"
import {Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header className={`${headerStyles.header}`}>
      <nav className={headerStyles.header__nav} role="navigation" aria-label="main navigation">
      <Link to="/" className={`${headerStyles.staircaseTitle}`}>
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
        <div className={`${headerStyles.card}`}></div>
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