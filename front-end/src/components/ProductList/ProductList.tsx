import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";

export type ProductType = {
  id: number;
  name: string;
  price: string;
  src: string;
};

type ProductListProps = {
  products: ProductType[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <HeaderSection />

      <Container className="py-3">
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3} lg={3} className="mb-4">
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                src={product.src}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
