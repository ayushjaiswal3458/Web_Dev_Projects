const { default: H2 } = require("../H2");
const { default: StarNum } = require("./StarNum");
const { default: Slider } = require("./Slider");
const { default: P } = require("../P");

function GetFav() {
  return (
    <>
      <div className="pt-12 bg-primary-100">
        <H2 class="pb-4 text-28 text-center md:pb-12 ">Get your favorites for free</H2>
        <div className="md:justify-center md:flex ">
        <div className="flex justify-between flex-grow md:w-540px md:justify-center">
          <div className="flex flex-col items-center">
            <StarNum class=" text-19 md:text-24">25</StarNum>
            <Slider></Slider>
          </div>
          <StarNum class=" text-19 md:text-24">50</StarNum>
          <StarNum class=" text-19 md:text-24">150</StarNum>
          <StarNum class=" text-19 md:text-24">200</StarNum>
          <StarNum class=" text-19 md:text-24">400</StarNum>
        </div>
        </div>
        <div className="pb-12 md:py-8 mb-72 bg-primary-200 md:flex md:justify-center shadow-GetFav ">
          <div>
            <img className="py-8 md:w-96 md:h-52 md:py-0" src="\images\025.webp" />
          </div>
          <div className="md:max-w-sm md:flex md:flex-col md:justify-center ">
            <h4 className="px-4 pb-4 text-center text-19 md:text-24 font-semi text-normal text-primary-500">
              Customize your drink
            </h4>
            <P class="text-center md:text-left px-4 ">
              Make your drink just right with an extra espresso shot, dairy
              substitute or a dash of your favorite syrup.
            </P>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetFav;
