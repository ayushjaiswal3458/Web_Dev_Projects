import "../../index.css";
import Input from "../Input/Input";
import Avatars from "./Avatars";

const Avt = {
  title: "Avatars",
  component: Avatars,
  argTypes: {
    theme: {
      control: { type: "select" },
    }
  }
};

export const Avatar = (args: any) => <Avatars {...args}></Avatars>;

Avatar.args = {
  profiles:["\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg"],
  
  className: "",
};

export default Avt;
