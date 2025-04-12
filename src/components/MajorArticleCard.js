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
                <span className={getClass(MajorArticleCardStyles.articleCategory)}>SCIENCE</span>
                <div className={getClass(MajorArticleCardStyles.articleDate)}>
                    {blog.node.frontmatter.date}
                </div>
                </div>
                <div className={getClass(MajorArticleCardStyles.articleTitle)}>
                {blog.node.frontmatter.title}
                </div>
                <p className={getClass(MajorArticleCardStyles.articleExcerpt)}>
                {blog.node.excerpt}
                </p>
            </div>
            </Link>
        </li>
  )
}