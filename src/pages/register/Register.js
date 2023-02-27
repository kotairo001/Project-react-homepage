import { Button, Form, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addUser, getUser, updateUser } from "../../services/useServices";
import Toastify, { Error, Warning, Success } from "../../layout/header/Toastify";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [security, setSecurity] = useState("");
  //778205069
  const handleSummit = () => {
    const newUser = {
      username: userName,
      email: email,
      password: password,
      security: security,
      role: "user",
      status: false,
      declared: false,
    };
    getUser().then((res) => {
      const result = res.data.find((data) => {
        return data.username === userName;
      });
      const resultEmail = res.data.find((data) => {
        return data.email === email;
      });
      if (!result && !resultEmail) {
        Success("Registered successfully");
        addUser(newUser).catch((err) => {
          console.log(err);
        });
        navigate("/login");
      } else if (
        userName == "" &&
        email == "" &&
        password == "" &&
        cfPassword == "" &&
        security == ""
      ) {
        Error("You have to input all the space!");
      } else {
        Warning("You have registered. Please login!");
        navigate("/login");
      }
    });
  };

  return (
    <div className="register_section" style={{ marginTop: "2%" }}>
      <h2>REGISTER</h2>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 1000,
          marginLeft: "7%",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="userName"
          label="User Name"
          rules={[
            {
              required: true,
              message: "Please input your User Name!",
              whitespace: true,
            },
          ]}
        >
          <Input onChange={(e) => setUserName(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password onChange={(e) => setCfPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="question"
          label="Security Question"
          rules={[
            {
              required: true,
              message: "Please input your answer!",
            },
          ]}
        >
          <Input
            placeholder="What is your favourite pet?"
            onChange={(e) => setSecurity(e.target.value)}
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            danger
            style={{ marginLeft: "28%" }}
            onClick={handleSummit}
          >
            Register
          </Button>
          <Button type="primary" style={{ marginLeft: "2%" }}>
            <Link to="/login">Login</Link>
          </Button>
        </Form.Item>
      </Form>
      <Toastify></Toastify>
    </div>
  );
}
