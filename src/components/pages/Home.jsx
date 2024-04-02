import React, { useState } from "react";
import Header from "../header/Header";
import NavbarButtons from "../navbar/NavbarButtons";
import { products } from "../../helper/data";
import SearchBox from "../searhBox/SearchBox";
import ProductsSection from "../ProductsSection/ProductsSection";
import ProductCard from "../ProductCard/ProductCard";
import { Col } from "react-bootstrap";

const Home = () => {
  // console.log(products);
  // console.log(getCategorize(products));
  //add a all category
  const allCats = { ALL: products, ...getCategorize(products) };

  const [allProducts, setAllProducts] = useState(allCats);
  console.log(allProducts);
  const [productsOnScreen, setProductsOnScreen] = useState(allProducts["ALL"]);
  console.log(productsOnScreen);

  return (
    <div>
      <Header />
      <NavbarButtons
        allProducts={allProducts}
        productsOnScreen={productsOnScreen}
        setProductsOnScreen={setProductsOnScreen}
      />
      <SearchBox />
      <ProductsSection>
        {productsOnScreen?.map((product) => {
          return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <ProductCard product={product} />
            </div>
          );
        })}
      </ProductsSection>
    </div>
  );
};

export default Home;

// get all uniq categories with products
const getCategorize = (products) => {
  return products.reduce((categories, product) => {
    const { category } = product;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(product);
    return categories;
  }, {});
};
