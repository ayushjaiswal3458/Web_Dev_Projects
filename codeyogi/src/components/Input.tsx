import React, { InputHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
}

const Input: FC<Props> = ({ error, id,touched, className, ...rest }) => {
  return (
    <>
      <div>
          <label htmlFor={id} className="sr-only">
              {id}
          </label>
        <input
        id={id}
          {...rest}
          className={
            "w-full pb-2 pl-8 placeholder-gray-400 border-b-2 outline-none focus:border-indigoish" +
            className
          }
        ></input>
        {touched && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
};

Input.defaultProps = {};

export default memo(Input);
