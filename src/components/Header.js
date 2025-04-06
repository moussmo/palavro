import React from "react"
import {Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import backgroundImage from '../../static/background_home_erik-n1VbsCPevyk-unsplash.png'

export default function Header(props) {
  return (
    <header className={`${headerStyles.header}`}>
      <img src={backgroundImage} alt="hu" style={{objectFit: 'cover', height: '100%', position: 'absolute', zIndex: -1}}/>
      <nav className={headerStyles.header__nav} role="navigation" aria-label="main navigation">
        <Link to="/">
          <h1 style={{fontStyle:'italic'}}>PALAVRO</h1>
        </Link>
        <div>
          <h1>
            <Link to="/thoughts">
              Thoughts
            </Link>
          </h1>
          <h1>
            <Link to="/history_art">
              History & art
            </Link>
          </h1>
          <h1>
            <Link to="/reviews">
              Reviews
            </Link>
          </h1>
          <h1>
            <Link to="/science_tech">
              Science & tech
            </Link>
          </h1>
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