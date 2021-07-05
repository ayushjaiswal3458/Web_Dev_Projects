const { default: H2 } = require("../H2");
const { default: P } = require("../P");
const { default: Steps } = require("./steps");
const { default: GreenLink } = require("../GreenLink");

function GetStarted() {
  return (
    <div className="px-4 md:px-6 lg:px-10 ">
      <div className=" md:w-66.6% md:ml-mdCodes">
        <H2 class="text-24 text-center md:text-28 ">Getting started is easy</H2>
        <P class="pt-4 text-center">
          Earn Stars and get rewarded in a few easy steps.
        </P>
      </div>
      <div className="pt-12 mb-72 md:flex md:mx-mdPay">
        <Steps
          heading="Download the Starbucks® app"
          class=" pb-8 md:mr-6"
          count="1"
        >
          <GreenLink >Join in the app </GreenLink >to get access to the full range
          of Starbucks® Rewards benefits. You can also
          <GreenLink> join online.</GreenLink>
        </Steps>
        <Steps
          heading="Order and pay how you’d like"
          class=" pb-8 md:mx-6 "
          count="2"
        >
          Use cash, credit/debit card or save some time and pay right through
          the app. You’ll collect Stars all ways.
          <GreenLink>Learn how</GreenLink>
        </Steps>
        <Steps heading="Earn Stars, get Rewards" class=" md:ml-6" count="3">
          As you earn Stars, you can redeem them for Rewards—like free food,
          drinks, and more. Start redeeming with as little as 25 Stars!
        </Steps>
      </div>
    </div>
  );
}
export default GetStarted;
