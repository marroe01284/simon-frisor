import Aapningstider from "./components/Aapningstider";
import Anmeldelser from "./components/Anmeldelser";
import Besok from "./components/Besøk";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Priser from "./components/Priser";

function App() {
  return (
    <div>
      <Hero />
      <Priser />
      <Aapningstider />
      <Anmeldelser />
      <Besok />
      <Footer />
    </div>
  );
}

export default App;
