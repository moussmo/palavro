import { graphql, useStaticQuery } from "gatsby"

export default function useCardData() {
    const data = useStaticQuery(graphql`
        query {
            allCardsYaml {
                nodes {
                name
                image {
                    relativePath
                }
                description
                }
            }
        }
      `)
  return data.allCardsYaml.nodes
}