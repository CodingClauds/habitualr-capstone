import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

export default function Signup() {
  return (
    <>
      <section className="login">
        <div className="login__card">
          <h1 className="login__title">Sign In</h1>

          <form className="login__form" action="">
            <label className="login__label-email" htmlFor="user-email">
              Email
            </label>
            <input
              className="login__input email"
              type="text"
              name="email"
              id="email"
              placeholder="@hotmail.com"
            />

            <label className="login__label-password" htmlFor="user-password">
              Password
            </label>
            <input
              className="login__input password"
              type="password"
              name="password"
              id="password"
              placeholder="min 8 characters"
            />

            <div className="login__checked-container">
              <div className="login__checked-box">
                <input
                  type="checkbox"
                  id="checkedlogin"
                  name="checkedlogin"
                  value="loggin"
                />
                <label className="login__keep-login" htmlFor="checkedlogin">
                  Keep me Logged in
                </label>
              </div>
              <a className="login__forgot-password" href="#">
                Forgot password?
              </a>
            </div>
          </form>
          <Link to="/habit">
            <div className="login__btn-box">
              <button className="login__button">Sign In</button>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
