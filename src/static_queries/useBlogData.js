import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {  
      allMarkdownRemark {
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
          excerpt
        }
      }
    }
    }
  `)
  return data.allMarkdownRemark.edges
}