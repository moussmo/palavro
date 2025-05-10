import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"
import {Link} from "gatsby"


export default function IndexPage() {
  return (
    <Layout page="thoughts">
        {/* <div className={layoutStyles.titleWithLines}>
          <span className={layoutStyles.titleText}>Thoughts</span>
        </div> */}
        <BlogList type='thoughts'/>
    </Layout>
  )
}