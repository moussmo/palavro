import React from "react"
import Layout from "../components/Layout"
import * as infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import githubLogoImage from '../../static/github-logo.png'
import linkedinLogoImage from '../../static/linkedin-logo.png'
import aboutmeImage from '../../static/aboutmePicture.jpg'
import mailLogoImage from '../../static/mail-logo.png'

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info">
        <div className={infoStyles.responsiveContainerBlock}>
        <img className={infoStyles.profilePicture} src={aboutmeImage}/>
          <p className={infoStyles.textBlk + ' ' + infoStyles.heading}>
            About Me
          </p>
          <p className={infoStyles.textBlk + ' ' + infoStyles.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          </p>
          <div className={infoStyles.socialIconsContainer}>
            <a className={infoStyles.socialIcona} href="https://github.com/moussmo" target="_blank">
              <img className={infoStyles.socialIcon} 
              src={githubLogoImage}/>
            </a>
            <a className={infoStyles.socialIcona} href="https://www.linkedin.com/in/mo-mouss/" target="_blank">
              <img className={infoStyles.socialIcon}
               src={linkedinLogoImage}/>
            </a>
            <a className={infoStyles.socialIcona} href="mailto:mouss.mo.ke@gmail.com" target="_blank">
              <img className={infoStyles.socialIcon}
               src={mailLogoImage}/>
            </a>
          </div>
        </div>
    </Layout>
  )
}