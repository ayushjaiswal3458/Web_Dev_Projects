const {default:RoundedLink} = require("./RoundedLink");

function Header() {
  return( <div className='sticky top-0 z-10 flex items-center justify-between px-4 py-2 md:px-0 shadow-Header lg:right-0 lg:left-0 lg:top-101px lg:fixed md:h-51px bg-primary-400'>
    <p className="tracking-widest text-white font-semi text-13 md:text-14px md:pl-99px lg:pl-131px">STARBUCKS® REWARDS</p>
    <RoundedLink linkUrl="http://google.com" class=" md:hidden"   theme="white" >Join in the app</RoundedLink>
    </div>
    );
     
}

export default Header;