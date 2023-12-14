import { useEffect, useState } from "react";
import CareerSidebar from "./CareerSidebar";
import Pagination from "./Pagination";
import SingleCareerPost from "./SingleCareerPost";
import axios from "axios";

export default function Blog() {
  const [careers, setCareers] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/career_datas");
        setCareers(response.data);
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
              {careers.map((post,index) => (
                <div key={post.id} className="col-md-6 col-12">
                  <SingleCareerPost post={post} />
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
