import React from "react";

export default function Coronata() {
  return (
    <div className="coronata">
      <div className="container">
        <div className="row d_flex grid">
          <div className="col-md-7">
            <div className="coronata_img text_align_center">
              <figure>
                <img src="images/corona.png" alt="#" />
              </figure>
            </div>
          </div>
          <div className="col-md-5 oder1">
            <div className="titlepage text_align_left">
              <h2>
                Corona-19 <br></br> What it is?
              </h2>
              <p>
                Coronavirus disease (COVID-19) is an infectious disease caused
                by the SARS-CoV-2 virus.
                <br></br>
                Most people who fall sick with COVID-19 will experience mild to
                moderate symptoms and recover without special treatment.
                However, some will become seriously ill and require medical
                attention.
              </p>
              <a className="read_more" href="coronata.html">
                About More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
