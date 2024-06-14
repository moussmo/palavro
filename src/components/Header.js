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
          <h1>{props.title}</h1>
        </Link>
        <div>
          <h1>
            <Link to="/thoughts" activeClassName={headerStyles.navItemActive}>
              thoughts
            </Link>
          </h1>
          <h1>
            <Link to="/history_art" activeClassName={headerStyles.navItemActive}>
              history & art
            </Link>
          </h1>
          <h1>
            <Link to="/reviews" activeClassName={headerStyles.navItemActive}>
              reviews
            </Link>
          </h1>
          <h1>
            <Link to="/tech" activeClassName={headerStyles.navItemActive}>
              tech
            </Link>
          </h1>
          <h1>
            <Link to="/info" activeClassName={headerStyles.navItemActive}>
              about me
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}