import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ContactUs from "./pages/contactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
