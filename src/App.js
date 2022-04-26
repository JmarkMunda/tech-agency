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
    </div>
  );
}

export default App;
