const { default: P } = require("../P");
const { default: H2 } = require("../H2");
function Features(props) {
  return (
    <div className={"flex pt-8 md:items-center md:flex-col " + props.class}>
      <img className="max-w-full mr-4 md:mb-6 md:mr-0 w-28 h-28 " src={props.src} />
      <div>
        <H2 class=" text-left leading-6 text-base md:text-center md:text-19 ">{props.heading}</H2>
        <P class="pt-4 md:text-center ">{props.children}</P>
      </div>
    </div>
  );
}

export default Features;
