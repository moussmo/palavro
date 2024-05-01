import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header className={`${headerStyles.header} ${props.page === 'info' && headerStyles.info_page}`}>
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
              contact me
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}