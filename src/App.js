import "./styles/App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

export default App;
