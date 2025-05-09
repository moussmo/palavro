import React from "react"
import { Link } from "gatsby"
import * as MajorArticleCardStyles from "../styles/components/majorarticlecard.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function MajorArticleCard({ blog, secondary }) {
  const image = getImage(blog.node.frontmatter.hero_image.childImageSharp.gatsbyImageData)
  const getClass = (baseClass) => 
    `${baseClass} ${secondary ? MajorArticleCardStyles.secondary : ""}`.trim()

  return (
        <li className={getClass(MajorArticleCardStyles.articleCard)} key={blog.node.frontmatter.slug}>
            <Link to={`/blog/${blog.node.frontmatter.slug}`} key={blog.node.id}>
              <GatsbyImage
                  className={getClass(MajorArticleCardStyles.articleHero)}
                  image={image}
                  loading="eager"
                  alt="article_thumbnail"
              />
              <div className={getClass(MajorArticleCardStyles.articleBlackMask)} />
              <div className={getClass(MajorArticleCardStyles.articleBlurMask)} />
              <div className={getClass(MajorArticleCardStyles.articleOverlay)}>
                  <div className={getClass(MajorArticleCardStyles.articleMeta)}>
                    <div className={getClass(MajorArticleCardStyles.articleDate)}>{blog.node.frontmatter.date}</div>
                    <Link to={`/${blog.node.fileAbsolutePath.split("/").reverse()[1]}`} className={getClass(MajorArticleCardStyles.articleCategory)}>{blog.node.fileAbsolutePath.split("/").reverse()[1]}</Link>
                  </div>
                  <div className={getClass(MajorArticleCardStyles.articleTitle)}>{blog.node.frontmatter.title}</div>
                  <div className={getClass(MajorArticleCardStyles.articleExcerpt)}>{blog.node.excerpt}</div>
              </div>
            </Link>
        </li>
  )
}