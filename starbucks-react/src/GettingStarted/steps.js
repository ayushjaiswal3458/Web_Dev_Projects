const {default:H2} = require('../H2');
const {default:P} = require('../P');
function steps(props){
    let count; 
    return (
        <div className={"flex md:flex-col md:items-center " + props.class }>
            <div>
            <p class="px-4 py-2 md:mb-6  text-xl border-2 w-12 h-12 md:mr-0 font-semi text-primary-300 border-primary-300 rounded-full mr-4 ">{props.count}</p>
            </div>
            <div className="md:flex md:flex-col md:text-center">
            <H2 class=" text-left text-base md:text-19 md:text-center " >{props.heading}</H2>
            <P class="pt-4">{props.children}</P>
            </div>
        </div>
        
    );
    count++;
} 

export default steps;