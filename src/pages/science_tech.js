import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"
import {Link } from "gatsby"

export default function IndexPage() {
  return (
    <Layout page="science_tech">
        {/* <div className={layoutStyles.titleWithLines}>
          <span className={layoutStyles.titleText}>Science & tech</span>
        </div> */}
        <BlogList type='science_tech'/>
    </Layout>
  )
}