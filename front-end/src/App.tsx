import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ReviewsPage from "./pages/ReviewsPage";
import { Layout } from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route>
          <Route index element={<ProductPage />} />
          <Route path="reviews" element={<ReviewsPage />} />

          <Route path="*" element={<h1>This page does not exist</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
