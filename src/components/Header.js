import React from "react"
import {Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import Card from "./Card"
import StaircaseTitle from "./StaircaseTitle"
import NormalTitle from "./NormalTitle"
import CardsHeader from "./CardsHeader"

export default function Header(props) {
  return (
    <div className={headerStyles.header}>
      <CardsHeader/>
      <div className={`${headerStyles.titleHeader}`}>
        <NormalTitle/>
      </div>
    </div>
  )
}