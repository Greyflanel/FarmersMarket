import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/LandingPage.js";
import Products from "./components/Products";
import {ShoppingCart} from "./components/ShoppingCart.js";
import NavBar from "./components/NavBars";
import ProductContext from "./Contexts/ProductContext.js";
import {AuthProvider} from "./Contexts/AuthContext.js";
import { CartProvider } from "./Contexts/CartContext.js";
import Product from "./components/Product.js";
import ExternalApi from "./ExternalApi.js"


// const responsive = {
//   showTopNavMenu: width > 1023,
// };
// return (
//   <>
//     <Header showTopNavMenu={responsive.showTopNavMenu} />
//     <Main />
//   </>
// );

// const showNav = {
//   display: showTopNavMenu ? "flex" : "none",
// };
// const showMenuIcon = {
//   display: showTopNavMenu ? "none" : "flex",
// };
// return (
//   <>
//     <div id="nav_container" style={showNav}>
//       <nav id="navigation">{navMenuItems}</nav>
//     </div>
//     <span className="menu-icon" style={showMenuIcon} />
//   </>
// );

const App = () => {
  
  const [productsList, setProductsList] = useState([]);
  const [width, setWindowWidth] = useState(0);
  console.log(width);
  useEffect(() => {
    
       const updateDimensions = () => {
         const width = window.innerWidth;
         setWindowWidth(width);
         
       };
    const getProducts = () => {
      axios
        .get("https://api.computerspartselectronics.com")
        .then((response) => {
          setProductsList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProducts();
    updateDimensions();
   window.addEventListener("resize", updateDimensions);
     return () => 
       window.removeEventListener("resize",updateDimensions);  
  }, []);

  return (
    <AuthProvider>
      <ProductContext.Provider value={{ productsList }}>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" component={LandingPage} />
            <Route path="/products/:id" component={Product} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/external-api" component={ExternalApi} />
          </Routes>
        </CartProvider>
      </ProductContext.Provider>
    </AuthProvider>
  );
};

export default App;
