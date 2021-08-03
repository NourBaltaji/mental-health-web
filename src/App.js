import "./App.css";

import Blogcontainer from "./components/Blogcontainer";
import React from "react";
import ContactUs from "./ContactUs";

// import LandingPage from "./landingpage.jsx";
import ShrinkCarousel from "./shrinkcarousel";
import LandingPage from "./landingpage.jsx";
import NavigationBar from "./Components/NavigationBar";
import Blog from "./components/blog";
import Postfeed from "./components/Postfeed";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        {/* <p>Welcome to the capstone projects, this is your initial react app</p> */}
        <ContactUs/>
      </header>
||||||| f7048aa
      <header className="App-header">
        <p>Welcome to the capstone projects, this is your initial react app</p>
      </header>
=======
      <div>
        {/* <LandingPage/>  */}
        <ShrinkCarousel />
        <NavigationBar mode="moderator" />
        <LandingPage />
        <Blog />
        <Postfeed />;<header className="App-header"></header>
        <Blogcontainer />
      </div>
>>>>>>> 2e8b70f94c8ea0ba20908d7fb30354713ab0eade
    </div>
  );
}

export default App;
