/**
 * 登录页
 */
import React from "react";
import "./css/Login.css";
import img from "./static/imgs/300.jpg";
import Tabs from "./components/Tabs";

class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div className="app-container">
        <div className="leftBox">
          <img src={img} alt="#" className="leftPic"></img>
        </div>
        <div className="rightBox">
          {/* <div className="loginForm gap-5">
            <div className="loginMethod">
              <h4 className="pwdLogin active">密码登录</h4>
              <h4 className="CodeLogin">验证码登录</h4>
            </div>
            <div className="form gap-5">
              <input
                type="text"
                className="form-control"
                placeholder="请输入手机号"
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="请输入密码"
              ></input>
              <Button variant="primary" size="lg">
                登录
              </Button>
            </div>
          </div> */}
          <Tabs></Tabs>
        </div>
      </div>
    );
  }
}

export default LoginPage;
