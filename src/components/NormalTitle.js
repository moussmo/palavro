import React from "react"
import * as normalTitleStyles from "../styles/components/normaltitle.module.scss"
import {Link } from "gatsby"

export default function NormalTitle(props) {
    const shrink = props.shrink
    const title = shrink ? "PLVR" : "PALAVRO"
    return (
            <Link to="/" className={`${normalTitleStyles.normalTitle} ${shrink ? normalTitleStyles.shrink : ""}`}>
                {title}
            </Link>
    )
}