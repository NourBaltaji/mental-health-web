import "./App.css";

import Blogcontainer from "./components/Blogcontainer";
import React from "react";

// import LandingPage from "./landingpage.jsx";
import ShrinkCarousel from "./shrinkcarousel";
import LandingPage from "./landingpage.jsx";
import NavigationBar from "./Components/NavigationBar";
import Blog from "./components/blog";
import Postfeed from "./components/Postfeed";

function App() {
  return (
    <div className="App">
      <div>
        {/* <LandingPage/>  */}
        <ShrinkCarousel />
        <NavigationBar mode="moderator" />
        <LandingPage />
        <Blog />
        <Postfeed />;<header className="App-header"></header>
        <Blogcontainer />
      </div>
    </div>
  );
}

export default App;
