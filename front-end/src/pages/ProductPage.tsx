import React from "react";
import productListData from "../mockData/productList.json";
import ProductList from "../components/ProductList/ProductList";

const ProductPage: React.FC = () => {
  return <ProductList products={productListData} />;
};

export default ProductPage;
