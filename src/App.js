import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PharmacyOwner from "./pages/pharmacyOwner/PharmacyOwner";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/termsOfService/TermsOfService";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TermsOfService />
      <Footer />
    </div>
  );
}

export default App;
