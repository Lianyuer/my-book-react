/**
 * 实现tab栏表单切换
 */
import React, { useState } from "react";
// 引入按钮
import Button from "react-bootstrap/Button";
const Tabs = () => {
  const tabs = ["密码登录", "验证码登录"];
  //  const toggleTab=(e)=> {
  //     if (document.querySelector("h4.active")) {
  //       document.querySelector("h4.active").classList.remove("active");
  //     }
  //     e.target.classList.add("active");
  //     console.log(document.querySelectorAll("form"));
  //     if (document.querySelector("form.active")) {
  //       document.querySelector("form.active").classList.remove("active");
  //       if (e.target == document.querySelector(".pwdLogin")) {
  //         console.log(e.target == document.querySelector(".pwdLogin"));
  //         document.querySelectorAll("form")[0].classList.add("active");
  //       } else {
  //         console.log(e.target == document.querySelector(".pwdLogin"));
  //         document.querySelectorAll("form")[1].classList.add("active");
  //       }
  //     }
  //   }

  // useState:useState 返回了一个包含两个元素的数组。第一个元素是当前的状态值，第二个元素是一个函数，用于更新该状态值
  const [activeTab, setActiveTab] = useState("pwdLogin");
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="loginForm gap-5">
      <div className="loginMethod">
        <h4
          className={`pwdLogin ${activeTab === "pwdLogin" ? "active" : ""}`}
          onClick={() => {
            toggleTab("pwdLogin");
          }}
        >
          {tabs[0]}
        </h4>
        <h4
          className={`codeLogin ${activeTab === "codeLogin" ? "active" : ""}`}
          onClick={() => {
            toggleTab("codeLogin");
          }}
        >
          {tabs[1]}
        </h4>
      </div>
      {/* 登录表单 */}
      <form className={`form gap-5 active`}>
        <input
          type="text"
          className="form-control"
          placeholder="请输入手机号"
        ></input>
        <input
          type="text"
          className="form-control"
          placeholder={activeTab === "pwdLogin" ? "请输入密码" : "请输入验证码"}
        ></input>
        <Button variant="primary" size="lg">
          登录
        </Button>
      </form>
    </div>
  );
};

export default Tabs;
