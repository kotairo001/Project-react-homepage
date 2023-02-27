import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";

import { Link, useNavigate, NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getNews } from "../../services/newsService";

export default function New() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  console.log(params);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    getNews().then((res) => {
      setNews(res.data);
    });
  }
  const handleLink = (e, data)=> {
    navigate(`/new/${data}`);
    e.preventDefault();
  }
  
  let elementNews;
  if(params.id == undefined) {
    elementNews = news?  news.map((data) => {
      return (
        <div className="col-md-12" key={data.id}>
          <div className="latest text_align_center">
            <div className="nostrud">
              <h3>
                <Link onClick={(e)=>handleLink(e,data.id)}>{data.title}</Link>
              </h3>
              <p>{data.summary}</p>
            </div>
          </div>
        </div>
      );
    }):<></>
  } else {
    elementNews = <Outlet/>
  }
 
  return (
    <div
      className="coronata"
      style={{ marginBottom: "100px", marginTop: "50px" }}
    >
      <h2>{params.id==undefined? "NEWS" : ""}</h2>
      <div className="container--cover">
        <div className="news--container">{elementNews}</div>
      </div>
    </div>
  );
}
