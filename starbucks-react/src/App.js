
import Header from "./Header";
import Nav from "./NavBar/Nav";
import GetStarted from "./GettingStarted/GetStarted";
import HeroSection from "./HeroSection";
import GetFav from "./GetFavorite/GetFav";
import Endless from "./EndlessExtras/Endless";
import CashOrCard from "./CashOrCard/CashOrCard";
import StarCodes from "./StarCodes/StarCodes";
import Restrictions from "./Restrictions/Restrictions";
import Footer from "./Footer.js/Footer";
function App() {
  return (
    <div className="font-sans">
      
      <Nav />
      
      <Header />
      
      <HeroSection />
      <GetStarted />
      <GetFav />
      <Endless />
      <CashOrCard />
      <StarCodes />
      <Restrictions />
      <Footer />
    </div>
  );
}

export default App;
