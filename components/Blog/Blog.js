import { useEffect, useState } from "react";
import { blogData } from "./blogData";
import BlogSidebar from "./BlogSidebar";
import Pagination from "./Pagination";
import SingleBlogPost from "./SingleBlogPost";
import axios from "axios";

export default function Blog() {
  const [bolgs, setBlogs] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/blog_datas");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="blog-grid-wrapper section-padding mtm-30">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-12">
            <div className="row">
              {bolgs.map((post) => (
                <div key={post.id} className="col-md-6 col-12">
                  <SingleBlogPost post={post} />
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
