import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Destinations from './components/destinations/Destinations'
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations  />
      <Search 
            destinations={[
                "Banff National Park, Alberta",
            ]}
            promoDetails={{
                discountText: "GET AN ADDITIONAL 25% OFF",
                timeLeft: "12 HOURS LEFT!",
                offerText: "VIEW ALL CURRENT OFFERS"
            }}
        />;

    </div>
  );
}

export default App;
