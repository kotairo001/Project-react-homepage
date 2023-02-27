import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>Resources</h3>
                <ul className="menu_footer">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="new">News</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="action">Vaccine</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="doctors">Hospital</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="contact">Health Declaration</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="register">Register</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>About</h3>
                <p>
                  Access to know more about the Pandemic Covid-19 and get news everyday about this pandemic. You can get the information about the vaccine and the place where you can get vaccinated. Login to send your health declaration.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="hedingh3  text_align_left">
                <h3>Contact Us</h3>
                <ul className="top_infomation">
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    Posting the very first news
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    Call us to know more about vaccines and hospitals
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <Link to="/">
                      Email : covid19@news.gmail
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="hedingh3 text_align_left">
                <h3>countrys</h3>
                <div className="map">
                  <img src="images/map.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p>© 2023 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
