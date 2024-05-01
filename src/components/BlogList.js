import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import * as blogListStyles from "../styles/components/bloglist.module.scss"
import {GatsbyImage, getImage, StaticImage} from 'gatsby-plugin-image'

export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            const image = getImage(blog.node.frontmatter.hero_image.childImageSharp.gatsbyImageData)
            return (
              <Link to={`/blog/${blog.node.frontmatter.slug}`} key={blog.node.id}>
                <li className={blogListStyles.li} key={blog.node.frontmatter.slug}>
                  <div className={blogListStyles.list__hero}>
                    <GatsbyImage image={image} alt = "hi"/>
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}

