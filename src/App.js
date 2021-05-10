import "./styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import PharmacyOwner from "./pages/pharmacyOwner/PharmacyOwner";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/termsOfService/TermsOfService";
import Prescription from "./pages/prescription/Prescription";
import Cart from "./pages/cart/Cart";
import CartContextProvider from "./contexts/CartContext";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/home/Home";
import { useContext, useEffect } from "react";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Account from "./pages/account/Account";

function App() {
  useEffect(() => {
    // website title in browser
    document.title = "Dowaa";
  });

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/prescription" component={Prescription} />
              <Route path="/cart" component={Cart} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/pharmacy-owner" component={PharmacyOwner} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms-service" component={TermsOfService} />
              <Route path="/account" component={Account} />
            </Switch>
            <ScrollToTop />
            <Footer />
          </div>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
