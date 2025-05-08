import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import MajorArticleCard from "./MajorArticleCard"

export default function BlogList({type}) {
  const blogData = useBlogData()
  function renderBlogData() {
    const filteredData = blogData
      .filter(blog => blog.node.frontmatter.title !== "")
      .filter(blog => {
        if (type != undefined) {
          const article_type = blog.node.fileAbsolutePath.split("/").reverse()[1]
          return type === article_type
        }
        return true
      })
  
    const mainArticle = filteredData[0]
    const minorArticles = filteredData.slice(1)
  
    return (
      <div className={blogListStyles.list}>
        <div>
          {mainArticle && <MajorArticleCard blog={mainArticle} />}
          </div>
          {minorArticles.map((blog) => (
            <MajorArticleCard key={blog.node.id} blog={blog} secondary/>
          ))}
      </div>
    )
  }
  
  return (
      <ul className={blogListStyles.ul}>{renderBlogData()}</ul>
  )
}

