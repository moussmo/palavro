import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

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
            const image = getImage(blog.node.frontmatter.hero_image.childImageSharp.gatsbyImageData)
            return (
              <div>
                <li className={blogListStyles.li} key={blog.node.frontmatter.slug}>
                <Link to={`/blog/${blog.node.frontmatter.slug}`} key={blog.node.id}>
                  <GatsbyImage className={blogListStyles.list__hero} image={image} loading='eager' alt = "article_thumbnail"/>
                </Link>
                  <div className={blogListStyles.list__info}>
                    <div className={blogListStyles.list__date}>{blog.node.frontmatter.date}</div>
                    <Link to={`/blog/${blog.node.frontmatter.slug}`} key={blog.node.id}>
                    <div className={blogListStyles.list__title}>{blog.node.frontmatter.title}</div>
                    </Link>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </div>
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

