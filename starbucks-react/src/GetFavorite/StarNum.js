const {default:H3} = require('../H3');
const {default:Star} = require('./Star');


function StarNum(props) {
    return (
        
        <button className={"px-2 pt-2 tracking-widest w-72 " + props.class}>
            <H3 class=" pb-4 text-center ">{props.children}<Star></Star></H3>
            
        </button>
        
    );
}

export default StarNum;
