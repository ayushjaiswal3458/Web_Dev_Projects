import NewTab from "../NewTab";
import LineBreak from "./LineBreak";
import StarBlack from "./Starblack";

const { default: P } = require("../P");
const { default: H2 } = require("../H2");
const { default: PerDollar } = require("./PerDollar");
const { default: Ways } = require("./Ways");
const { default: GreenLink } = require("../GreenLink");

function CashOrCard() {
  return (
    <div className="px-4 py-12 mb-72 md:px-6 bg-secondary">
      <div className="pb-16 md:w-66.6% md:ml-mdCodes text-center">
        <H2 class="text-center pt-6 pb-4 text-24 md:text-28">
          Cash or card, you earn Stars
        </H2>
        <P class="text-center md:text-base">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </P>
      </div>
      <div className="lg:grid lg:grid-flow-col">
        <PerDollar text="Pay as you go" >
          1<StarBlack /> per dollar
        </PerDollar>
        <div className="md:grid md:grid-cols-2">
          <Ways
            src="/images/use_card.png"
            heading="Scan and pay separately"
            
          >
            Use cash or credit/debit card at the register
          </Ways>
          <Ways
            src="/images/save_card.png"
            heading="Save payment in the app"
            
          >
            Check-out faster by saving a credit/debit card or PayPal to your
            account. You’ll be able to order ahead or scan and pay at the
            register in one step.
          </Ways>
        </div>
      </div>
      <LineBreak class=" mt-4 mb-10"></LineBreak>
      <div className="lg:grid lg:grid-flow-col">
        <PerDollar text="Add funds in the app" >
          2<StarBlack /> per dollar
        </PerDollar>
        <div className="md:grid md:grid-cols-2">
          <Ways src="/images/funds-in-app.png" heading="Preload" >
            To save time and earn Stars twice as fast, add money to your digital
            Starbucks Card using any payment option. Scan and pay in one step or
            order ahead in the app.
          </Ways>
          <Ways
            src="/images/add-gift-card.png"
            heading="Register your gift card"
            class=" pb-8"
          >
            Then use it to pay through the app. You can even consolidate
            balances from multiple cards in one place.
          </Ways>
        </div>
      </div>
      <LineBreak class=" mt-4 mb-10"></LineBreak>
      <div className="lg:grid lg:grid-flow-col">
        <PerDollar text="With Starbucks® Rewards Visa® Card" >
          Up to 3<StarBlack /> per dollar
        </PerDollar>
        <div className="md:grid md:grid-cols-2">
        <Ways
          src="/images/visa_card.png"
          heading="Earn Stars even faster"
          
        >
          Earn Stars on all purchases you make with our{" "}
          <GreenLink
            linkUrl="https://www.starbucks.com/starbucks-rewards/credit-card"
            class=" text-primary-300"
          >
            credit card<NewTab class=" text-primary-300"></NewTab>
          </GreenLink>{" "}
          opens in new window in and outside of Starbucks. Earn 1 Star per $1
          when you digitally preload your Starbucks Card with your Starbucks®
          Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that
          preloaded Starbucks Card.
        </Ways>
        </div>
      </div>
    </div>
  );
}

export default CashOrCard;
