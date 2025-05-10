import React from "react"
import { Link } from "gatsby"
import * as MinorArticleCardStyles from "../styles/components/minorarticlecard.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function MinorArticleCard({ blog }) {
  const image = getImage(blog.node.frontmatter.hero_image.childImageSharp.gatsbyImageData)
  return (
        <div className={MinorArticleCardStyles.articleCard} key={blog.node.frontmatter.slug}>
            <Link to={`/blog/${blog.node.frontmatter.slug}`} key={blog.node.id}>
              <GatsbyImage
                  className={MinorArticleCardStyles.articleHero}
                  image={image}
                  loading="eager"
                  alt="article_thumbnail"
              />
            </Link>
            <Link to={`/blog/${blog.node.frontmatter.slug}`} key={blog.node.id}>
              <div className={MinorArticleCardStyles.articleData}>
                <div className={MinorArticleCardStyles.articleHeader}>
                  <div className={MinorArticleCardStyles.articleMeta}>
                    <div className={MinorArticleCardStyles.articleDate}>{blog.node.frontmatter.date}</div>
                    {/* <Link to={`/${blog.node.fileAbsolutePath.split("/").reverse()[1]}`} className={MinorArticleCardStyles.articleCategory}>{blog.node.fileAbsolutePath.split("/").reverse()[1]}</Link> */}
                  </div>
                  <div className={MinorArticleCardStyles.articleTitle}>{blog.node.frontmatter.title}</div>
                </div>
                <div className={MinorArticleCardStyles.articleExcerpt}>{blog.node.excerpt}</div>
              </div>
              </Link>
        </div>
  )
}