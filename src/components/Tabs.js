/**
 * 实现tab栏表单切换
 */
import React, { useState } from "react";
// 引入按钮
import Button from "react-bootstrap/Button";
class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ["密码登录", "验证码登录"],
    };
  }
  toggleTab(e) {
    if (document.querySelector("h4.active")) {
      document.querySelector("h4.active").classList.remove("active");
    }
    e.target.classList.add("active");
    console.log(document.querySelectorAll("form"));
    if (document.querySelector("form.active")) {
      document.querySelector("form.active").classList.remove("active");
      if (e.target == document.querySelector(".pwdLogin")) {
        console.log(e.target == document.querySelector(".pwdLogin"));
        document.querySelectorAll("form")[0].classList.add("active");
      } else {
        console.log(e.target == document.querySelector(".pwdLogin"));
        document.querySelectorAll("form")[1].classList.add("active");
      }
    }
  }
  render() {
    return (
      <div className="loginForm gap-5">
        <div className="loginMethod">
          <h4 className="pwdLogin active" onClick={this.toggleTab}>
            {this.state.tabs[0]}
          </h4>
          <h4 className="CodeLogin" onClick={this.toggleTab}>
            {this.state.tabs[1]}
          </h4>
        </div>
        {/* 密码登录表单 */}
        <form className="form gap-5 active">
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
        </form>
        {/* 验证码登录表单 */}
        <form className="form gap-5">
          <input
            type="text"
            className="form-control"
            placeholder="请输入手机号"
          ></input>
          <input
            type="text"
            className="form-control"
            placeholder="请输入短信验证码"
          ></input>
          <Button variant="primary" size="lg">
            登录
          </Button>
        </form>
      </div>
    );
  }
}

export default Tabs;
