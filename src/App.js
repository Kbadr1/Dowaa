import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import PharmacyOwner from "./pages/pharmacyOwner/PharmacyOwner";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/termsOfService/TermsOfService";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/pharmacy-owner" component={PharmacyOwner} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms-service" component={TermsOfService} />
          </Switch>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
