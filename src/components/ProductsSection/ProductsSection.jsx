import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProductsSection = ({ children }) => {
  return (
    <Container className="mt-5">
      <div className="row row-gap-3">
        {children}
        </div>
    </Container>
  );
};

export default ProductsSection;
