import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {  
      allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            date
            title
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    }
  `)
  return data.allMarkdownRemark.edges
}