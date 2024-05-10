import React from "react"
import Layout from "../components/Layout"
import * as infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info">
      <section className={infoStyles.info_blurb}>

      </section>
    </Layout>
  )
}