import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Topline from "./components/Topline";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomepageHeader from "./components/Homepage_header";
import HomepageParagraph from "./components/Homepage_paragraph";
import ProductCard from "./components/ProductCard";
import MoreProducts from "./components/MoreProducts";
import Banner from "./components/Banner";
import SectionHeader from "./components/SectionHeader";
import Footer from "./components/Footer";
import FilterBox from "./components/FilterBox";
import MobileFilterArea from "./components/MobileFilterArea";
import Pagination from "./components/Pagination";
import Gallery from "./components/Gallery";
import OrderSetup from "./components/OrderSetup";
import ProductInCart from "./components/ProductInCart";
import CustomerDetailsForm from "./components/CustomerDetailsForm";
//import { DisplayContext } from "./components/DisplayContext";

import fpic1 from "./components/images/fpic1.png";
import OrderDetailsBlock from "./components/OrderDetailsBlock";
import ContactsPageText from "./components/ContactsPageText";
import ContactsPageForm from "./components/ContactsPageForm";
import prod from "./JSON files/products_DB.json";

const productsDB = () => JSON.parse(JSON.stringify(prod));
console.log(productsDB);

export const DisplayContext = createContext(null);

function App() {
  //console.log("git message");
  const screenWidth = window.innerWidth;
  //console.log(screenWidth);
  const [displayVal, setDisplayVal] = useState("none");
  useEffect(() => {
    if (screenWidth <= 946) {
      setDisplayVal("none");
    } else {
      setDisplayVal("block");
    }
  }, []);

  //==================
  // console.log(prod);
  const productsURL = "./JSON files/products_DB.json";
  // fetch("./JSON files/products_DB.json")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // useEffect(() => {}, []);
  //==================

  return (
    <div className="app_div">
      <Router>
        <Topline />
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomepageHeader />
            <HomepageParagraph />
            <section className="product_section">
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
            </section>
            <MoreProducts />
            <Banner />
            <SectionHeader />
            <section className="product_section">
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
              <ProductCard productImage={fpic1} />
            </section>
          </Route>
          <Route exact path="/catalog">
            <DisplayContext.Provider value={[displayVal, setDisplayVal]}>
              <div className="body_block">
                <MobileFilterArea />

                <div className="container_jc">
                  <div className="sidebar">
                    <FilterBox />
                  </div>
                  <div className="main_area">
                    <section
                      className="product_section"
                      style={{ marginTop: "0" }}
                    >
                      <ProductCard productImage={fpic1} />
                      <ProductCard productImage={fpic1} />
                      <ProductCard productImage={fpic1} />
                      <ProductCard productImage={fpic1} />
                      <ProductCard productImage={fpic1} />
                      <ProductCard productImage={fpic1} />
                    </section>
                  </div>
                </div>
                <Pagination />
                <div class="text_block3_4_container">
                  <div class="text_block1_4"></div>
                  <div class="text_block3_4">
                    <p>
                      Convallis ullamcorper senectus cras eu congue. Eleifend
                      pretium tortor velit ante non massa sit.
                      <br />
                      Tempor ullamcorper potenti morbi rhoncus. Dictum turpis
                      sagittis blandit in pellentesque turpis tellus id lacus.
                      Elit tortor, tellus vitae bibendum nisi, cursus orci sit
                      ac. Nunc ullamcorper convallis in faucibus varius tempor,
                      purus faucibus velit. At ullamcorper imperdiet enim
                      vehicula sagittis, est. Egestas lobortis scelerisque proin
                      faucibus nullam.
                      <br />
                      Velit nunc consectetur at pellentesque nulla. At nisl quis
                      velit pharetra pellentesque donec velit, pharetra,
                      tincidunt. Facilisis facilisi massa, mattis sagittis
                      scelerisque vehicula in. Facilisi pulvinar malesuada
                      elementum purus est arcu tempor rutrum. Scelerisque
                      phasellus facilisis tincidunt nisi vulputate lorem cras.
                      Ipsum facilisi in diam nunc eu eu scelerisque. Eu orci,
                      ornare sit convallis risus auctor iaculis.
                      <br />
                      Sit odio lacus in nec turpis sit rhoncus leo. Nulla nam
                      faucibus vulputate consequat hac in malesuada lectus. Odio
                      in mi placerat pellentesque euismod mi. Purus tristique et
                      amet praesent pulvinar risus est malesuada scelerisque.
                      Nisi rhoncus feugiat a phasellus nunc aliquam lobortis.
                      Diam ullamcorper id tellus elit dignissim fermentum enim.
                    </p>
                  </div>
                </div>
              </div>
            </DisplayContext.Provider>
          </Route>
          <Route exact path="/product">
            <div className="body_block">
              <div className="product_container">
                <Gallery />
                <OrderSetup />
              </div>
            </div>
          </Route>
          <Route exact path="/cart">
            <div className="body_block">
              <div className="product_page_body_block">
                <div className="block2_3">
                  <ProductInCart />
                  <ProductInCart />
                  <CustomerDetailsForm />
                </div>
                <div className="block1_3">
                  <OrderDetailsBlock />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/contacts">
            <div className="body_block">
              <div className="contact_page_block">
                <ContactsPageText id="cp1" />
                <ContactsPageForm id="cp2" />
              </div>
            </div>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
