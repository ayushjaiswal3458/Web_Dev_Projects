const { default: P } = require("../P");
const { default: H2 } = require("../H2");
const { default: Features } = require("./Features");
const { default: GreenLink } = require("../GreenLink");

function Endless() {
  return (
    <div class="px-4 mb-72 md:px-6 lg:px-10">
      <div className=" md:w-66.6% md:ml-mdCodes ">
        <H2 class="text-center text-24 md:text-28">Endless Extras</H2>
        <P class="text-center pt-4 ">
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </P>
      </div>
      <div className="pt-12 md:flex md:mx-mdPay">
        <Features
          heading="Fun freebies"
          class=" md:mr-6"
          src="/images/1-fun-freebies.webp"
        >
          Not only can you earn free coffee, look forward to a birthday treat
          plus coffee and tea refills.
          <GreenLink class=" block my-4">Learn more</GreenLink>
        </Features>
        <Features
          heading="Order & pay ahead"
          class=" md:mx-6 "
          src="/images/2-order-and-pay-ahead.webp"
        >
          Enjoy the convenience of in-store, curbside or drive-thru pickup at
          select stores.<GreenLink class=" block my-4">Learn more</GreenLink>
        </Features>
        <Features
          class=" md:ml-6"
          heading="Get to free faster"
          src="/images/3-get-to-free-faster.webp"
        >
          Earn Stars even quicker with Bonus Star challenges, Double Star Days
          and exciting games.
          <GreenLink class=" block my-4">Learn more</GreenLink>
        </Features>
      </div>
    </div>
  );
}

export default Endless;
