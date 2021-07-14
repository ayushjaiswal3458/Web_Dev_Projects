import React from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";

interface Props {}

const Login: FC<Props> = (props) => {
  return (
    <div className="flex justify-between">
      <div>
        Don't have an account{" "}
        <Link to="/signup">
          <span className="text-indigo-400 hover:underline">Click here</span>
        </Link>
        <Link to="/dashboard">
          <span className="text-indigo-400 hover:underline">
            Go to Dashboard
          </span>
        </Link>
      </div>
      
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
