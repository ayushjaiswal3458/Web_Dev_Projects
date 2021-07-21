import React from "react";
import { HtmlHTMLAttributes } from "react";
import { FC, memo } from "react";
import Progress from "../Progress/Progress";
import Avatar from "./Avatar";

interface Props {
  profiles: string[];
  className?: string;
  
  theme: "indigo" | "gray" | "blue" | "green" | "yellow";
}

const Avatars: FC<Props> = ({ profiles,theme, className }) => {
  const profilesArray = profiles;
  let extraProfiles: number;
  if (profilesArray.length > 4) {
    extraProfiles = profilesArray.length - 4;
  } else {
    extraProfiles = 0;
  }
  const count = extraProfiles === 0 ? profilesArray.length : 4;
  return (
    <div className={" " + className}>
      {/* <div className="flex justify-between ">
        <h6>Placed Order</h6>
        <p className="text-xs tracking-wider transition duration-300 ease-in-out transform bg-opacity-10 px-2.5 py-1.5 rounded-sm hover:-translate-y-1  bg-indigoish text-indigoish">
          IN PROGRESS
        </p>
      </div> */}
      <div className="relative flex mt-6 ">
        {profilesArray.map((child, index) => {
          const distance = index * 8;
          if (index < 4) {
            return (
              <Avatar src={child} className={" shadow-lg border border-white  absolute left-" + distance} />
            );
          }
          if (index > 3) {
            return (
              <span
                className={
                  "absolute left-32 bg-white mt-2 shadow-md rounded-full py-1 px-1.75  text-xs   "
                }
              >
                +{extraProfiles} more
                
              </span>
              
            );
          }
        })}
        
      </div>
      
    </div>
  );
};

Avatars.defaultProps = {
    theme:'indigo'
};

export default memo(Avatars);
