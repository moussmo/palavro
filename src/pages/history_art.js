import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"

export default function IndexPage() {
  return (
    <Layout page="history_art">
      <div className={layoutStyles.section__title}>
        History & art  
      </div> 
        <BlogList type='history_art'/>
    </Layout>
  )
}