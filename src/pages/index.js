import React from "react"
import {Link } from "gatsby"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import * as layoutStyles from "../styles/components/layout.module.scss"

export default function IndexPage() {
  return (
    <Layout className={`${layoutStyles.layoutmain}`} page="home">
        <BlogList />
    </Layout>
  )
}