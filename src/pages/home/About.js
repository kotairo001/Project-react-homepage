import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAbout } from "../../services/aboutServices";

export default function About() {
  const [about, setAbout] = useState([]);
  function getData() {
    getAbout().then((res) => {
      setAbout(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  let elementAbout = about? about.map((data) => {
    return (
      <div className="titlepage text_align_left" key={data.id}>
        <h2>{data.title} </h2>
        <p>{data.content}</p>
        <Link className="read_more" to="/new">
          {data.button}
        </Link>
      </div>
    );
  }):<></>;
  return (
    <div className="about">
      <div className="container_width">
        <div className="row d_flex">
          <div className="col-md-7">{elementAbout}</div>
          <div className="col-md-5">
            <div className="about_img text_align_center">
              <figure>
                <img src="images/about.png" alt="#" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
