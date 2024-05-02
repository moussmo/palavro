import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

export default function IndexPage() {
  return (
    <Layout page="history_art">
      <section>
        <BlogList type='history_art'/>
      </section>
    </Layout>
  )
}