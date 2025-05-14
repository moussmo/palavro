import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import useBlogData from "../static_queries/useBlogData";
import * as blogListStyles from "../styles/components/bloglist.module.scss";
import MajorArticleCard from "./MajorArticleCard";
import MinorArticleCard from "./MinorArticleCard";

export default function BlogList({ type }) {
  const blogData = useBlogData();
  const [showAnimation, setShowAnimation] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    if (type !== undefined) {
      const timer = setTimeout(() => {
        setShowAnimation(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [type]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function renderBlogData() {
    const filteredData = blogData
      .filter(blog => blog.node.frontmatter.title !== "")
      .filter(blog => {
        if (type !== undefined) {
          const article_type = blog.node.fileAbsolutePath.split("/").reverse()[1];
          return type === article_type;
        }
        return true;
      });

    // TYPE-SPECIFIC RENDER
    if (type !== undefined) {
      return (
        <div className={blogListStyles.list}>
          <div className={blogListStyles.minorList}>
            {filteredData.map((blog, index) => (
              <div
                key={blog.node.id}
                className={`${blogListStyles.articleBox} ${showAnimation ? blogListStyles.visible : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <MinorArticleCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // RESPONSIVE LOGIC
    const headline = filteredData[0];
    const majorarticles = windowWidth > 600 ? filteredData.slice(1, 4) : [];
    const minorarticles = windowWidth > 600
      ? filteredData.slice(4)
      : filteredData.slice(1);

    return (
      <div className={blogListStyles.list}>
        <div className={blogListStyles.majorList}>
          <div>{headline && <MajorArticleCard blog={headline} />}</div>
          {majorarticles.map(blog => (
            <MajorArticleCard key={blog.node.id} blog={blog} secondary />
          ))}
        </div>
        <div className={blogListStyles.minorList}>
          {minorarticles.map(blog => (
            <MinorArticleCard key={blog.node.id} blog={blog} />
          ))}
        </div>
      </div>
    );
  }

  return <ul className={blogListStyles.ul}>{renderBlogData()}</ul>;
}
