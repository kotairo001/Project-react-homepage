import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Dropdown, Space, Alert } from "antd";
import { getUser, updateUser } from "../../services/useServices";
import { LogoutOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as types from "../../services/actions/index";
import Toastify, { Warning } from "./Toastify";

export default function Header() {
  const dispatch = useDispatch();
  const loginFlag = useSelector((state) => state.LoginHeader);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  let items;

  useEffect(() => {
    let loginUser = JSON.parse(localStorage.getItem("LOGIN_USER"));
    if (loginFlag != "" && loginUser != null && loginUser.status == true) {
      setFlag(true);
    }
  }, [loginFlag]);
  let iconElement;
  let loginUser = JSON.parse(localStorage.getItem("LOGIN_USER"));

  if (!loginFlag) {
    // linkHealth = alert("You have to Log in first")
    // navigate("/")
    iconElement = <i className="fa fa-user" aria-hidden="true" />;
    items = [
      {
        key: "1",   
        label: (
          <Link rel="noopener noreferrer" to="/register">
            Register
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link rel="noopener noreferrer" to="/login">
            Login
          </Link>
        ),
      },
    ];
  } else {
    iconElement = <LogoutOutlined />;
    const logOut = () => {
      getUser().then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status === true) {
            updateUser(res.data[i].id, { ...res.data[i], status: false });
            break;
          }
        }
      });
      localStorage.removeItem("LOGIN_USER");
      setFlag(false);
      dispatch(types.act_login_header(false));
    };
    items = [
      {
        key: "1",
        label: <Button onClick={logOut}>Log Out</Button>,
      },
    ];
  }

  const alertLogin = (e) => {
    if (flag != true) {
      e.preventDefault();
      Warning("You have to Log-in");
      navigate("/login");
    } else {
      e.preventDefault();
      navigate("/contact");
    }
  };
  return (
    <header className="header-area">
      <div className="left">
        <Link></Link>
      </div>
      <div className="right">
        <Space direction="vertical">
          <Space wrap>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
            >
              {iconElement}
              {/* <i className="fa fa-user" aria-hidden="true" /> */}
            </Dropdown>
          </Space>
        </Space>
      </div>
      <div className="container">
        <div className="row d_flex">
          <div className="col-sm-3 logo_sm">
            <div className="logo">
              <Link to="/" />
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>
                    <Link className="active" to="/home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/new">News</Link>
                  </li>
                  <li>
                    <Link to="/action">Vaccines</Link>
                  </li>
                  <li>
                    <Link to="/home" className="logo_midle">
                      Covid-19 Disease
                    </Link>
                  </li>
                  <li>
                    <Link to="/doctors">Hospital</Link>
                  </li>
                  <li>
                    <Link
                      // to={flag ? "/contact" : "/login"}
                      onClick={alertLogin}
                    >
                      Health Declaration
                    </Link>
                  </li>
                </ul>
                <button className="nav-toggler">
                  <span />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Toastify></Toastify>
    </header>
  );
}
