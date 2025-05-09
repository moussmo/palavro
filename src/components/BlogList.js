import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import MajorArticleCard from "./MajorArticleCard"
import MinorArticleCard from "./MinorArticleCard"

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
  
    const headline = filteredData[0]
    const majorarticles = filteredData.slice(1, 4) 
    const minorarticles = filteredData.slice(4)
  
    return (
      <div className={blogListStyles.list}>
        <div className={blogListStyles.majorList}>
          <div>
            {headline && <MajorArticleCard blog={headline} />}
            </div>
            {majorarticles.map((blog) => (
              <MajorArticleCard key={blog.node.id} blog={blog} secondary/>
            ))}
        </div>
        <div classname={blogListStyles.minorList}>  
          {minorarticles.map((blog) => (
                <MinorArticleCard key={blog.node.id} blog={blog}/>
              ))}
        </div>
      </div>
    )
  }
  
  return (
      <ul className={blogListStyles.ul}>{renderBlogData()}</ul>
  )
}

