import GreenLink from "../GreenLink";
import NewTab from "../NewTab";

const { default: H3 } = require("../H3");
const { default: P } = require("../P");

function Restrictions() {
  return (
    <>
      <div className="px-4 py-8 mb-12 md:px-6 md: bg-face ">
        <P class=" text-13 md:text-14px  pb-8 ">
          At participating stores. Restrictions apply.
        </P>
        <div className="gap-8 md:grid md:grid-cols-2">
          <div className="pb-8">
            <H3 class=" text-lightgrey md:text-14px  text-13 tracking-widest font-extrasemi pb-4">
              EARNING STARS
            </H3>
            <P class="text-13 md:text-14px pb-4">
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </P>
            <P class="text-13 md:text-14px pb-4">
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </P>
            <P class="text-13 md:text-14px pb-4">
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </P>
          </div>
          <div className="pb-8 ">
            <H3 class=" text-lightgrey  text-13 md:text-14px tracking-widest font-extrasemi pb-4">
              TERMS OF USE
            </H3>
            <P class="text-13 md:text-14px pb-4">
              For full program details visit{" "}
              <GreenLink class=" text-primary-300">
                starbucks.com/rewards/terms
                <NewTab />
              </GreenLink>
            </P>
            <P class="text-13 md:text-14px pb-4">
              * Earn 1 Star per $1 when digitally loading your Starbucks Card
              with your Starbucks® Rewards Visa® Card: See your Card Rewards
              Program Agreement for more details.
            </P>
            <P class="text-13 md:text-14px pb-4">
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. Visit the{" "}
              <GreenLink class=" text-primary-300">
                Starbucks Store Locator
                <NewTab />
              </GreenLink>{" "}
              and search for locations honoring “Redeem Rewards”.
            </P>
            <P class="text-13 md:text-14px pb-4">
              Deposit and credit card products provided by JPMorgan Chase Bank,
              N.A. Member FDIC
            </P>
          </div>
          <div className="pb-8">
            <H3 class=" text-lightgrey  md:text-14px text-13 tracking-widest font-extrasemi pb-4">
              BENEFITS
            </H3>
            <P class="text-13 md:text-14px pb-4">
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </P>
          </div>
          <div>
            <H3 class=" text-lightgrey md:text-14px text-13 tracking-widest font-extrasemi pb-4">
              REDEEMING REWARDS
            </H3>
            <P class="text-13 md:text-14px pb-4">
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. Not all stores honor tiered Rewards. Select stores redeem
              150 Stars for free food or drink items only.
            </P>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restrictions;
