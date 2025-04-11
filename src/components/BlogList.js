import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import MajorArticleCard from "./MajorArticleCard"

export default function BlogList({type}) {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div className={blogListStyles.list}>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .filter(blog => {
            if (type!=undefined){
              const article_type = blog.node.fileAbsolutePath.split('/').reverse()[1]
              return type == article_type
            }
            else {
              return true
            }
          })
          .map(blog => {
            return (
              <MajorArticleCard blog={blog}/>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul >{renderBlogData()}</ul>
    </section>
  )
}

