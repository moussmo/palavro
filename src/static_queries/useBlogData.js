import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {  
      allMarkdownRemark (sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            slug
            author
            date
            title
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          excerpt (pruneLength: 300)
        }
      }
    }
    }
  `)
  return data.allMarkdownRemark.edges
}