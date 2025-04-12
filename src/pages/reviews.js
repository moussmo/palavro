import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"

export default function IndexPage() {
  return (
    <Layout page="reviews">
        <div className={layoutStyles.titleWithLines}>
          <span className={layoutStyles.titleText}>Reviews</span>
        </div>
        <BlogList type='reviews'/>
    </Layout>
  )
}