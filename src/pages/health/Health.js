import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  message,
  Space,
  Alert,
} from "antd";
import { useSelector } from "react-redux";
import * as types from "../../services/actions/index";
import { useDispatch } from "react-redux";
import { getUser, updateUser } from "../../services/useServices";
import { useNavigate } from "react-router-dom";
import Toastify, { Warning, Success } from "../../layout/header/Toastify";


export default function Contact() {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "You have sent the health declaration",
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  const [declaration, setDeclaration] = useState({});
  const [nationality, setNationality] = useState("");
  const [city, setCity] = useState("");
  let loginUser = JSON.parse(localStorage.getItem("LOGIN_USER"));
  let userID;
  if (loginUser != null) {
    userID = loginUser.id;
  }

  function getListUser() {
    getUser().then((res) => {
      setListUser(res.data);
    });
  }
  useEffect(() => {
    getListUser();
  }, []);

  let LoginUser = listUser.filter((user) => {
    if (user.id == userID) {
      return user;
    }
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setDeclaration({ ...declaration, [name]: value });
  };
  let elementHealth;

  const handleSend = () => {
    console.log(LoginUser);
    if (declaration!=null && nationality!="" && city!="") {
      navigate("/");
      dispatch(
        types.act_get_declaration({
          ...declaration,
          nationality: nationality,
          city: city,
          userID: userID,
          username: LoginUser[0].username,
        })
      );
      updateUser(LoginUser[0].id, { ...LoginUser[0], declared: true });
      // localStorage.setItem("LOGIN_USER", JSON.stringify(LoginUser) )
      Success("Your health declaration has been sent");
    } else {
      Warning("You have to input all the space");
    }
  };

  if ((listUser != null) & (LoginUser != "")) {
    if (LoginUser[0].declared == false) {
      elementHealth = (
        <div className="health--container">
          <h2 style={{ margin: "2%" }}>HEALTH DECLARATION</h2>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 1500, marginLeft: "10%" }}
            onChange={handleChange}
          >
            <div className="form__top">
              <Form.Item label="Name:">
                <Input name="name" />
              </Form.Item>
              <Form.Item label="Personal ID:">
                <Input name="personalID" />
              </Form.Item>
            </div>
            <div>
              <Form.Item label="Date of Birth">
                <Input name="birthday" />
              </Form.Item>
              <Form.Item label="Gender">
                <Radio.Group name="gender">
                  <Radio value="male"> Male </Radio>
                  <Radio value="female"> Female </Radio>
                  <Radio value="other"> Other </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Nationality">
                <Select
                  defaultValue="Viet Nam"
                  onChange={(e) => {
                    console.log(e);
                    setNationality(e);
                  }}
                >
                  <Select.Option value="japan">Japan</Select.Option>
                  <Select.Option value="vietnam">Viet Nam</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <Form.Item label="City">
              <Select
                defaultValue="Hai Phong"
                onChange={(e) => {
                  console.log(e);
                  setCity(e);
                }}
              >
                <Select.Option value="hanoi">Ha Noi</Select.Option>
                <Select.Option value="haiphong">Hai Phong</Select.Option>
                <Select.Option value="hochiminh">Ho Chi Minh</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Address">
              <Input name="address" />
            </Form.Item>
            <Form.Item label="Phone">
              <Input name="phone" />
            </Form.Item>
            <Form.Item label="Email">
              <Input name="email" />
            </Form.Item>
            <div style={{ marginLeft: "12%" }}>
              <p>Have you vaccinated yet?</p>
              <Form.Item>
                <Radio.Group name="vaccine">
                  <Radio value="yes"> Yes </Radio>
                  <Radio value="no"> No </Radio>
                </Radio.Group>
              </Form.Item>
              <p>Are you coughing recently?</p>
              <Form.Item>
                <Radio.Group name="status">
                  <Radio value="yes"> Yes </Radio>
                  <Radio value="no"> No </Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <Form.Item style={{ marginLeft: "12%" }}>
              {contextHolder}
              <Space>
                <Button type="primary" onClick={handleSend}>
                  Summit
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      );
    } else {
      elementHealth = (
        <div className="health--container">
          <h2 style={{ margin: "10%" }}>
            YOUR HEALTH DECLARATION HAS BEEN SENT TO US
          </h2>{" "}
        </div>
      );
    }
  }

  return <div>
    <Toastify></Toastify>
    {elementHealth}</div>;
}
