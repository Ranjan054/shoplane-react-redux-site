import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Thankyou from "./components/Thankyou/Thankyou";
import Homepage from "./components/Homepage/Homepage";

function App() {
  console.log("made by ranjan sharma.");
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/shoplane-react-redux-site" component={Homepage} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/thankyou" component={Thankyou} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
//not found route not working while uploading on gh pages
