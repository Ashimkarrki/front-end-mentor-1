import "./style/app.scss";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Reviews } from "./component/Reviews";
import Lastgallery from "./component/Lastgallery";
import Footer from "./component/Footer";
import { useState } from "react";
function App() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="App">
      <Navbar navbar={navbar} setNavbar={setNavbar} />
      <Home />
      <Reviews />
      <Lastgallery />
      <Footer />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">carkey</a>.
      </div>
    </div>
  );
}

export default App;
