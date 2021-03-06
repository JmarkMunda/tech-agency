import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Insights from "./components/Insights";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Work />
     <Services />
     <Insights />
     <About />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
