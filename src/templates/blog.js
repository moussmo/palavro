import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from '../static_queries/useBlogData'
import * as blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins
import {getImage, GatsbyImage} from 'gatsby-plugin-image'

export default function Blog(props) {
  const data = props.data.markdownRemark
  const image = getImage(data.frontmatter.hero_image.childImageSharp.gatsbyImageData)
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.frontmatter.slug)
  const articleTitle = data.frontmatter.title
  const articleType = data.fileAbsolutePath.split('/').reverse()[1]
  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.frontmatter.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  function formatDate(dateString) {
    // Remove ordinal suffixes (st, nd, rd, th) from day numbers
    const cleaned = dateString.replace(/(\d{1,2})(st|nd|rd|th)/i, "$1")

    // Parse the cleaned string
    const date = new Date(cleaned)

    // Check for validity
    if (isNaN(date)) return "Invalid Date"

    const month = date.toLocaleString("en-US", { month: "long" })
    const year = date.getFullYear()
    return `${month} ${year}`
  }

  return (
    <Layout page={articleType} articleTitle={articleTitle}>
      <article className={blogTemplateStyles.blog}>
        <figure className={blogTemplateStyles.blog__hero}>
          <GatsbyImage image={image} alt='hey'/>
        </figure>
        <div className={blogTemplateStyles.blog__info}>
          <h1>{data.frontmatter.title}</h1>
          <h3>{formatDate(data.frontmatter.date)}</h3>
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
        <div className={blogTemplateStyles.blog__footer}>
          <h2>
            Written By: <Link to={'/info'} style={{display:'inline'}}>{data.frontmatter.author}</Link>
          </h2>
          <Link to={`/blog/${nextSlug}`} className={blogTemplateStyles.footer__next}>
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" viewBox="0 0 26 26" enableBackground="new 0 0 26 26" >
              <path d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"/>
            </svg>
          </Link>
        </div>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      fileAbsolutePath
      frontmatter {
        slug
        title
        author
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`
