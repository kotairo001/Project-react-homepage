import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="full_bg">
        <div className="section">
          {/* carousel code */}
          <div id="banner1" className="carousel slide slider_main">
            <ol className="carousel-indicators">
              <li
                data-target="#banner1"
                data-slide-to={0}
                className="indicator-li-1"
              >
                01
              </li>
              <li data-target="#banner1" data-slide-to={1} className="">
                02
              </li>
              <li data-target="#banner1" data-slide-to={2} className="active">
                03
              </li>
            </ol>
            <div className="carousel-inner">
              {/* first slide */}
              <div className="carousel-item active">
                <div className="carousel-caption cuplle">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="photog">
                          <h1>
                            Pandemic
                            <br />
                            Covid-19
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second slide */}
              <div className="carousel-item">
                <div className="carousel-caption cuplle">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="photog">
                          <h1>
                            Covid
                            <br />
                            Vaccine
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* third slide */}
              <div className="carousel-item">
                <div className="carousel-caption cuplle">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="photog">
                          <h1>
                            Curing
                            <br />
                            Hospital
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* controls */}
            <a
              className="carousel-control-prev"
              href="#banner1"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#banner1"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
