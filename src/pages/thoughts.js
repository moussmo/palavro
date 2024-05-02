import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

export default function IndexPage() {
  return (
    <Layout page="thoughts">
      <section>
        <BlogList type='thoughts'/>
      </section>
    </Layout>
  )
}