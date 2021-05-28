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
import Category from "./pages/category/Category";
import AllProducts from "./pages/allProducts/AllProducts";
import ProductDetails from "./pages/productDetails/ProdutDetails";
import FilteredProducts from "./pages/filteredProducts/FilteredProducts";
import Brand from "./pages/brand/Brand";
import AllBrands from "./pages/allBrands/AllBrands";
import SavedProducts from "./pages/savedProducts/SavedProducts";
import SavedContextProvider from "./contexts/SavedContext";
import ApiContextProvider from "./contexts/ApiContext";
import Draft from "./pages/draft/Draft";
import ProtectedRoute from "./components/protected/Protected.route";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";

function App() {
  useEffect(() => {
    // website title in browser
    document.title = "Dowaa";
  });

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ApiContextProvider>
          <SavedContextProvider>
            <CartContextProvider>
              <div className="App">
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/sign-in" component={SignIn} />
                  <Route path="/prescription" component={Prescription} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/saved" component={SavedProducts} />
                  <Route path="/about-us" component={AboutUs} />
                  <Route path="/contact-us" component={ContactUs} />
                  <Route path="/pharmacy-owner" component={PharmacyOwner} />
                  <Route path="/privacy-policy" component={PrivacyPolicy} />
                  <Route path="/terms-service" component={TermsOfService} />
                  <Route path="/all-products" component={AllProducts} />
                  <ProtectedRoute path="/account" component={Account} />
                  <Route path="/all-brands" component={AllBrands} />
                  <Route path="/brand/:brand_id" component={Brand} />
                  <Route
                    path="/product/:product_id"
                    component={ProductDetails}
                  />
                  <Route path="/category/:category_id" component={Category} />
                  <Route path="/filtered" component={FilteredProducts} />
                  <ProtectedRoute path="/checkout" component={Checkout} />
                  <ProtectedRoute path="/orders" component={Orders} />
                  {/* <Route path="/draft" component={Draft} /> */}
                </Switch>
                <ScrollToTop />
                <Footer />
              </div>
            </CartContextProvider>
          </SavedContextProvider>
        </ApiContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
