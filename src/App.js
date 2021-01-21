import "./styles/App.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
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
