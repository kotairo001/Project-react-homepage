import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {Outlet} from 'react-router-dom'
import Banner from "../banner/Banner";

export default function Layout() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
