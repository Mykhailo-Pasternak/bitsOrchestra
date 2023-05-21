import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

export const Layout: React.FC = () => {
  return (
    <Container>
      <header className="my-3 mz-3">
        <Row>
          <Col md="2">
            <Image
              src="https://st2.depositphotos.com/19115378/44622/v/450/depositphotos_446224724-stock-illustration-vector-icon-man-businessman-illustration.jpg"
              rounded
              height={30}
              className="mr-10"
            />
            <Badge bg="light" text="dark">
              Logo
            </Badge>
          </Col>
          <Col md="10">
            <Nav
              variant="pills"
              className=" justify-content-end"
              defaultActiveKey="/"
            >
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="reviews">Reviews</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </header>
    </Container>
  );
};

export default Layout;
