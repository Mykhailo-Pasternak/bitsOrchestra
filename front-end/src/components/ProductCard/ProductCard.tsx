import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ProductType } from "../ProductList/ProductList";

const ProductCard: React.FC<ProductType> = ({ id, name, price, src }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Price: {price}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
