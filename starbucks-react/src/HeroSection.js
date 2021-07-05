
const { default: P} =require("./P");
const { default: RoundedLink2 } = require("./RoundedLink2");

function HeroSection() {
  return (
    <div className="font-sans bg-bottom bg-cover pt-152px md:bg-mdHero lg:px-8 aspect-w-4 aspect-h-3 md:bg-bottom md:aspect-w-16 md:aspect-h-9 bg-8 bg-Hero mb-72 bg-primary-200">
      <div className="md:flex ">
      <div className="flex flex-col items-center md:px-6 md:justify-center md:min-w-48% md:max-w-400px px-4 py-8 md:items-start ">
        
        <h1 className="font-semi text-primary-500 text-28 md:text-4xl">FREE COFFEE</h1>
        <h1 className="font-semi text-primary-500 text-28 md:text-4xl">IS A TAP AWAY</h1>
        <P class=" pt-4 md:text-19">Join now to start earning Rewards</P>
        <RoundedLink2
          theme="green"
          class="mt-4 md:hidden"
          linkUrl="https://starbucks.app.link/VLa2I3inh9"
        >
          join in the app
        </RoundedLink2>

        <RoundedLink2
          theme="green"
          class=" hidden md:block mt-4 text-base"
          linkUrl="https://starbucks.app.link/VLa2I3inh9"
        >
          join now
        </RoundedLink2>
        <a
          href="https://www.starbucks.com/account/create"
          className="block pt-4 font-normal underline md:hidden md:text-19 text-primary-500"
        >
          Or join onilne
        </a>
        <a
          href="https://www.starbucks.com/account/create"
          className="hidden pt-4 font-normal md:block md:text-19 text-primary-500"
        >
          Or <span className="underline">join in the app</span> for the best experience
        </a>
      </div>
      </div>
    </div>
    
  );
}
export default HeroSection;
