import React, { useState } from "react";
import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";

import { ImSpinner9 } from "react-icons/im";
import { setTimeout } from "timers";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

interface Props {}

const Login: FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);

  const history = useHistory();
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
    <div className=" font-body text-grayish py-2.8715 px-11.4285 mx-auto w-97.1485 h-148.8985 ">
      <div >
        <h1 className="mb-2 font-medium whitespace-nowrap text-Login">
          Log in to <span className=" text-indigoish">CodeYogi</span>
        </h1>
        <div className="mb-1 space-x-2 text-sm mb-12.5 whitespace-nowrap">
          <span className="tracking-wider ">New Here?</span>
          <Link to="/signup">
            <span className="tracking-widest underline text-indigoish">
              Create an account
            </span>
          </Link>

          <Link to="/dashboard">
            <span className="tracking-widest underline text-indigoish">
              Go to Dashboard
            </span>
          </Link>
        </div>
        <form
          className="space-y-4 "
          onSubmit={(event) => {
            event.preventDefault();
            if (emailError || passwordError) {
              console.log("form rejected");
              return;
            }
            setSubmitting(true);
            console.log("login started with", data);
            setTimeout(() => {
              console.log("login succesfull");
              history.push("/dashboard");
            }, 5000);
          }}
        >
          <div className="">
            <div className="relative pt-2.75 pb-6.25">
            
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
          <FiUser className="absolute w-6 h-6 text-indigoish" />

              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={data.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full pb-2 pl-8 placeholder-gray-400 border-b-2 outline-none focus:border-indigoish"
                placeholder="Email address"
              ></input>
              {touched.email && (
                <div className="text-red-500">{emailError}</div>
              )}
            </div>
            <div className="pt-2.75 pb-6.25 mb-2 ">
              <FiLock className="absolute w-6 h-6 text-indigoish" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={data.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full pb-2 pl-8 placeholder-gray-400 border-b-2 outline-none focus:border-indigoish"
                placeholder="Password"
              ></input>
              {touched.password && (
                <div className="text-red-500">{passwordError}</div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <p>Show password</p>
            <button
              type="submit"
              className="text-white rounded-md  px-5 py-1.75  text-sm bg-indigoish shadow-xl hover:transform"
            >
              Log In
            </button>
            {submitting && <ImSpinner9 className="animate-spin" />}
          </div>
        </form>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
