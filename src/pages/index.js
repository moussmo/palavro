import React from "react"
import {Link } from "gatsby"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"

export default function IndexPage() {
  return (
    <Layout className={`${layoutStyles.layoutmain}`} page="home">
      <div className={`${layoutStyles.filtermenu}`}>
        <Link to="/"><span className={`${layoutStyles.filteroption} ${layoutStyles.active}`}>All/</span></Link>
        <Link to="/thoughts"><span className={`${layoutStyles.filteroption} `}>Thoughts/</span></Link>
        <Link to="/reviews"><span className={`${layoutStyles.filteroption}`}>Reviews/</span></Link>
        <Link to="/science_tech"><span className={`${layoutStyles.filteroption}`}>Tech</span></Link>
      </div>
        <BlogList />
    </Layout>
  )
}