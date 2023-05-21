import React from "react";
import ProductList from "./components/ProductList/ProductList";
import Reviews from "./components/Reviews/Reviews";

const App: React.FC = () => {
  return (
    <div>
      <ProductList />
      <Reviews />
    </div>
  );
};

export default App;
