import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../../../services/newsService";

export default function New() {
  const [news, setNews] = useState([]);
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    getNews().then((res) => {
      setNews(res.data);
    });
  }

  let post = news? news.filter((data) => {
    if (data.id == params.id) {
      return data;
    }
  }) : console.log(false)
  return news != "" ? (
    <div
      className="coronata"
      style={{ marginBottom: "100px", marginTop: "50px" }}
    >
      <div className="container">
        <div className="detail--container">
          <div className=" col-md-12">
            <div className="latest text_align_center">
              <div className="nostrud">
                <h3 style={{ marginBottom: "2%" }}>{post[0].title}</h3>
                <p>{post[0].content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
