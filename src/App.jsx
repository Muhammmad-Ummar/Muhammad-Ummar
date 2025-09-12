import { useState } from "react";
import Welcome from "./pages/Welcome"; 
import Nav from "../src/compnents/Nav";
import Hero from "../src/compnents/Hero";
import About from "../src/pages/About";
import Education from "../src/pages/Education";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Footer from "../src/compnents/Footer";
import Skills from "./pages/Skills";
import Rating from "./pages/Rating";
import GitHubTimeLine from "./pages/GHTimeLine";
import Certificates from "./pages/Certificates";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div>
      {showWelcome ? (
        <Welcome onFinish={() => setShowWelcome(false)} />
      ) : (
        <>
          <Nav />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          {/* <Certificates/> */}
          <Contact />
          <Rating />
          <GitHubTimeLine />
          <Footer />

        </>
      )}
    </div>
  );
}

export default App;
