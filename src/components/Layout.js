import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import * as layoutStyles from "../styles/components/layout.module.scss"
import Footer from "./Footer"
export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  var pageTitle = "PALAVRO"
  if (props.articleTitle){
    pageTitle = props.articleTitle + ' | PALAVRO'
  }
  return (
    <div className={layoutStyles.background}>
        <section className={layoutStyles.layout}>
          <Helmet>
            <html lang="en" />
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
          </Helmet>
          <Header page={props.page} title={title} />
          <div className={layoutStyles.content}>{props.children}</div>
          <Footer/>
        </section>  
    </div>
  )
}