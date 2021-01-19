import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PharmacyOwner from "./pages/pharmacyOwner/PharmacyOwner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PharmacyOwner />
      <Footer />
    </div>
  );
}

export default App;
