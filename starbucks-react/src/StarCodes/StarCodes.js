import GreenLink from "../GreenLink";
import NewTab from "../NewTab";

const { default: P } = require("../P");
const { default: H2 } = require("../H2");
const { default: EnterCode } = require("./EnterCode");

const { default: SumbitButton } = require("./SumbitButton");
function StarCodes() {
  return (
    <>
      <form className="px-4 mb-72 md:ml-mdCodes md:px-6 md:w-50%">
        <H2 class=" pb-4 text-24 md:text-28">Star Codes</H2>
        <P class=" pb-4">
          Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
          add Stars to your account.
        </P>
        <EnterCode class=" py-3 px-4 overflow-hidden"></EnterCode>
        <div className="flex justify-end pb-8 pr-4 mt-2">
          <SumbitButton />
        </div>
        <P class="text-13px md:text-14px">
          Have a receipt but don't have a code?
        </P>
        <P class="text-13px md:text-14px">
          Go to{" "}
          <GreenLink
            class=" text-primary-300"
            linkUrl="https://starbucks-stars.com/en-us/"
          >
            starbucks-stars.com
            <NewTab />
          </GreenLink>{" "}
          opens in new window to upload your receipt and collect your Stars.
        </P>
      </form>
      <div className="px-4 mb-72">
        <H2 class=" text-24 md:text-28 pb-4">Questions?</H2>
        <P class=" pb-4">
          We want to help in any way we can. You can ask your barista anytime or
          we’ve answered the most commonly asked questions{" "}
          <GreenLink class=" text-primary-300">
            right over here
            <NewTab />.
          </GreenLink>
        </P>
      </div>
    </>
  );
}

export default StarCodes;
