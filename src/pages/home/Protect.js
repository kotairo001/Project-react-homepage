import React from "react";

export default function Protect() {
  return (
    <div className="protect">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>Remember To Wash Your Hand</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container_width">
        <div className="row d_flex">
          <div className="protect-img-cover col-md-9">
            <div className="protect-img text_align_center">
              <div className="reader text_align_center">
                  <figure>
                    <img src="images/washyourhand.webp" alt="#" />
                  </figure>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
