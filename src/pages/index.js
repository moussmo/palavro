import React from "react"
import {Link } from "gatsby"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"

export default function IndexPage() {
  return (
    <Layout className={`${layoutStyles.layoutmain}`} page="home">
        <div className={layoutStyles.titleWithLines}>
          <span className={layoutStyles.titleText}>The Latest</span>
        </div>
        <BlogList />
    </Layout>
  )
}