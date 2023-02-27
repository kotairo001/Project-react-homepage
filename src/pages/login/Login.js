import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import * as types from "../../services/actions/index";
import { useDispatch } from "react-redux";

import axios from "axios";
import { getUser, updateUser } from "../../services/useServices";
import { addUserID } from "../../services/userIdServices";
import Toastify, { Error, Warning } from "../../layout/header/Toastify";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    getUser().then((res) => {
      const result = res.data.find((data) => {
        return data.username === username;
      });
      if ((username == "") && (password == "")) {
        Warning("You have to input Username and Password");
      } else if (!result) {
        Error("You haven't registered yet");
      } else {
        if (result.password !== password) {
          Error("Your password is not right");
        } else {
          if (result.role == "user") {
            result.status = true;
            updateUser(result.id, { ...result, status: result.status });
            localStorage.setItem("LOGIN_USER", JSON.stringify(result));
            dispatch(types.act_login_header(true));
            dispatch(types.act_get_login_id(result.id));
            navigate("/");
            console.log("Login successfully");
          } else {
            result.status = true;
            updateUser(result.id, { ...result, status: result.status });
            window.location.href = "http://localhost:3001/";
          }
        }
      }
    });
  };
  const handleLink = ()=>{
    navigate("/register")
  }

  return (
    <div className="login">
      <h2>LOGIN</h2>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
          margin: "2% 7%",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          style={{ marginLeft: "35%" }}
        >
          <Button type="primary" danger onClick={handleLogin}>
            Login
          </Button>
          <Button onClick={handleLink} type="primary" style={{ marginLeft: "2%" }}>
            Register
          </Button>
        </Form.Item>
      </Form>
      <Toastify></Toastify>
    </div>
  );
}
