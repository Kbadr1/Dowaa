import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
