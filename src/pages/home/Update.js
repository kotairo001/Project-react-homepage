import React from "react";
import { Link } from "react-router-dom";

export default function Update() {
  return (
    <div className="update">
      <div className="cevery_white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Get Every News.... </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cevery_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button className="subsci_btn">
                <Link to="/register">Subscribe Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
