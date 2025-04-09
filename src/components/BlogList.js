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
              <Link to={`/blog/${blog.node.frontmatter.slug}`} key={blog.node.id}>
                <li className={blogListStyles.li} key={blog.node.frontmatter.slug}>
                  <GatsbyImage className={blogListStyles.list__hero} image={image} loading='eager' alt = "article_thumbnail"/>
                  <div className={blogListStyles.list__info}>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <h2 className={blogListStyles.list__title}>{blog.node.frontmatter.title}</h2>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </Link>
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

