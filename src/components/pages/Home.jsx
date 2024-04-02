import React, { useState } from "react";
import Header from "../header/Header";
import NavbarButtons from "../navbar/NavbarButtons";
import { products } from "../../helper/data";
import SearchBox from "../searhBox/SearchBox";
import ProductsSection from "../ProductsSection/ProductsSection";
import ProductCard from "../ProductCard/ProductCard";

const Home = () => {
  console.log(getCategorize(products));

  const [allProducts, setAllProducts] = useState(getCategorize(products));

  const [choosedCat, setChoosedCat] = useState("ALL");
  const [inputValue,setInputValue] = useState("");

  return (
    <div className="home">
      <Header />

      <NavbarButtons allProducts={allProducts} setChoosedCat={setChoosedCat} />


<SearchBox inputValue={inputValue} setInputValue={setInputValue}/>
      <ProductsSection>
        {

            allProducts[choosedCat]?.filter(item=> item.title.toLowerCase().includes(inputValue))?.map((product) => {
                return (
                    <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
                        <ProductCard product={product} />
                    </div>
                )
            })
        
        }
      </ProductsSection>

      {/* <NavbarButtons
        allProducts={allProducts}
        productsOnScreen={productsOnScreen}
        setProductsOnScreen={setProductsOnScreen}
        choosenCategory={choosenCategory}
        setChoosenCategory={setChoosenCategory}  
      />
      <SearchBox
        allProducts={allProducts}
        productsOnScreen={productsOnScreen}
        setProductsOnScreen={setProductsOnScreen}
        choosenCategory={choosenCategory} 
      />
      <ProductsSection>
        { productsOnScreen?.map((product) => {
          return (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
              <ProductCard product={product} />
            </div>
          );
        })}
      </ProductsSection> */}
    </div>
  );
};

export default Home;

// get all uniq categories with products
const getCategorize = (products) => {
  return {
    ALL: products,
    ...products.reduce((categories, product) => {
      const { category } = product;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(product);
      return categories;
    }, {}),
  };
};
