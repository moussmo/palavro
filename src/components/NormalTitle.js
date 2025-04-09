import React from "react"
import * as normalTitleStyles from "../styles/components/normaltitle.module.scss"
import {Link } from "gatsby"

export default function StaircaseTitle() {
    return (
            <Link to="/" className={`${normalTitleStyles.normalTitle}`}>
                PALAVRO
            </Link>
    )
}