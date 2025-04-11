import React from "react"
import { Link } from "gatsby"
import * as MajorArticleCardStyles from "../styles/components/majorarticlecard.module.scss"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

export default function MajorArticleCard({blog}) {
    const image = getImage(blog.node.frontmatter.hero_image.childImageSharp.gatsbyImageData)
    return (<div>
                <Link to={`/blog/${blog.node.frontmatter.slug}`} key={blog.node.id}>
                    <li className={MajorArticleCardStyles.articleCard} key={blog.node.frontmatter.slug}>
                        <GatsbyImage className={MajorArticleCardStyles.articleHero} image={image} loading="eager" alt="article_thumbnail" />
                        <div className={MajorArticleCardStyles.articleBlackMask}/>
                        <div className={MajorArticleCardStyles.articleBlurMask}/>
                        <div className={MajorArticleCardStyles.articleOverlay}>
                        <div className={MajorArticleCardStyles.articleMeta}>
                            <span className={MajorArticleCardStyles.articleCategory}>SCIENCE</span>
                            <div className={MajorArticleCardStyles.articleDate}>{blog.node.frontmatter.date}</div>
                        </div>
                        <div className={MajorArticleCardStyles.articleTitle}>{blog.node.frontmatter.title}</div>
                        <p className={MajorArticleCardStyles.articleExcerpt}>{blog.node.excerpt}</p>
                        </div>
                    </li>
                </Link>
            </div>
            )
        }

