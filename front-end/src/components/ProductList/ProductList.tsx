import React, { useEffect, useState } from "react";
import mockData from "../../mockTool/productList.json";
import axios from "axios";

type ProductType = {
  id: number;
  name: string;
  price: string;
};

// const ProductList: React.FC = () => {
//   const [data, setData] = useState<ProductType | null>(null);

//   useEffect(() => {
//     // Replace 'data' with the specific endpoint your component needs to fetch data from
//     fetch("http://localhost:3000/users")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }
//   console.log(data);
//   return (
//     <div>
//       {/* Use your data here. For example: */}
//       {/* <h1>{mockData.title}</h1>
//       <p>{data.description}</p> */}

//       <h1>asdada</h1>
//     </div>
//   );
// };
// export default ProductList;

// src/components/ProductList/ProductList.tsx

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/product")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
