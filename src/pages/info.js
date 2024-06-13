import React from "react"
import Layout from "../components/Layout"
import * as infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info">
        <div className={infoStyles.responsiveContainerBlock}>
          <p className={infoStyles.textBlk + ' ' + infoStyles.heading}>
            About Me
          </p>
          <p className={infoStyles.textBlk + ' ' + infoStyles.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          </p>
          <div className={infoStyles.socialIconsContainer}>
            <a className={infoStyles.socialIcona}>
              <img className={infoStyles.socialIcon + ' ' + infoStyles.imageBlock} 
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"/>
            </a>
            <a className={infoStyles.socialIcona}>
              <img className={infoStyles.socialIcon + ' ' + infoStyles.imageBlock}
               src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"/>
            </a>
            <a className={infoStyles.socialIcona}>
              <img className={infoStyles.socialIcon + ' ' + infoStyles.imageBlock}
               src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"/>
            </a>
            <a className={infoStyles.socialIcona}>
              <img className={infoStyles.socialIcon + ' ' + infoStyles.imageBlock} 
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"/>
            </a>
          </div>
        </div>
    </Layout>
  )
}