import Aapningstider from "./components/Aapningstider";
import Anmeldelser from "./components/Anmeldelser";
import Besok from "./components/Besøk";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Priser from "./components/Priser";

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Priser/>
    <Aapningstider/>
    <Anmeldelser/>
    <Besok/>
    </div>
  );
}

export default App;