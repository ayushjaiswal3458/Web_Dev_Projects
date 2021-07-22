
import "../../index.css";
import Progress from "./Progress";


const ProgressBar = {
    title:'Progress bar',
    component:Progress,
    argTypes:{
        theme:{
            control: { type:"select"}
        }
    }
};

export const main = (args:any) => (<Progress {...args}></Progress>);

main.args={
    
    counter:0,
    className:""
};

export default ProgressBar;