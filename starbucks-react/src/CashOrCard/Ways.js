const {default:H2} = require('../H2');
const {default:P} = require('../P');
function Ways(props) {
  return (
    <div className={"flex pb-8 " + props.class}>
      <img className="max-w-full mr-4 w-28 h-158 " src={props.src} />
      <div>
        <H2 class={" text-left leading-6 text-base md:text-19 " + props.class}>{props.heading}</H2>
        <P class="pt-4">{props.children}</P>
      </div>
    </div>
  );
}
            
export default Ways;
