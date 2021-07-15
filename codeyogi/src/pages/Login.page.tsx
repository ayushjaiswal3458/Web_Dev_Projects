import React, { HtmlHTMLAttributes, useState } from "react";
import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import {ImSpinner9} from "react-icons/im";
import { setTimeout } from "timers";

interface Props {}

const Login: FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);

  const history= useHistory();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameOfChangeInput = event.target.name;
    setData({ ...data, [nameOfChangeInput]: event.target.value });
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const nameOfBlurInput = event.target.name;
    setTouched({ ...touched, [nameOfBlurInput]: true });
  };

  let emailError = "";
  let passwordError = "";

  if (!data.email) {
    emailError = "Email address is required";
  } else if (!data.email.endsWith("@gmail.com")) {
    emailError = "please enter a valid email address";
  }
  if (!data.password) {
    passwordError = "Password is required";
  } else if (data.password.length < 8) {
    passwordError = "please enter atleast 8 characters";
  }

  return (
    <div className="flex justify-between">
      <div>
        <h1>Log in to CodeYogi</h1>
        <h3>New Here?</h3>
        <Link to="/signup">
          <span className="text-indigo-400 hover:underline">
            Create an account
          </span>
        </Link>
        <Link to="/dashboard">
          <span className="text-indigo-400 hover:underline">
            Go to Dashboard
          </span>
        </Link>
        <form
          className="p-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (emailError || passwordError) {
              console.log("kya kacchra bhar diya bro login form me");
              return;
            }
            setSubmitting(true);
            console.log("login started with" ,data);
            setTimeout(() => {
              console.log("login succesfull");
              history.push("/dashboard");
            },5000)
            
          }}
        >
          <div className="flex flex-col space-y-4">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="placeholder-gray-400 border-b-2 border-indigo-400 outline-none"
              placeholder="Email address"
            ></input>
            {touched.email && <div className="text-red-500">{emailError}</div>}
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={data.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="placeholder-gray-400 border-b-2 border-indigo-400 outline-none"
              placeholder="Password"
            ></input>
            {touched.password && (
              <div className="text-red-500">{passwordError}</div>
            )}
          </div>
          <div className="flex justify-between">
            <p>Show password</p>
            <button
              type="submit"
              className="p-2 text-white bg-indigo-500 rounded-md shadow-lg hover:shadow-none"
            >
              Log In
            </button>
            {submitting && (<ImSpinner9 className="animate-spin" />)}
          </div>
        </form>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
