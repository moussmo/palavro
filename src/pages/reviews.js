import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"
import {Link} from "gatsby"

export default function IndexPage() {
  return (
    <Layout page="reviews">
      <div className={`${layoutStyles.filtermenu}`}>
        <Link to="/"><span className={`${layoutStyles.filteroption}`}>All/</span></Link>
        <Link to="/thoughts"><span className={`${layoutStyles.filteroption}`}>Thoughts/</span></Link>
        <Link to="/reviews"><span className={`${layoutStyles.filteroption} ${layoutStyles.active}`}>Reviews/</span></Link>
        <Link to="/science_tech"><span className={`${layoutStyles.filteroption}`}>Tech</span></Link>
      </div>
        <BlogList type='reviews'/>
    </Layout>
  )
}