import { Container, Row, Col } from "react-bootstrap";

const HeaderSection: React.FC = () => {
  return (
    <Container className="text-center py-3">
      <Row>
        <Col>
          <h3>The innovation leader in luxury vinyl plank</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Let's Get Started</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderSection;
