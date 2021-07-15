
import { FC, memo } from "react";
import { Link } from "react-router-dom";


interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div className="flex justify-between">
    <div>
      Already have an account{" "}
      <Link to="/login">
        <span className="text-indigo-400 hover:underline">click here</span>
      </Link>
    </div>
    
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
