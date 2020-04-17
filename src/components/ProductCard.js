import React from "react";
import "./ProductList";
import { Card, Container, Badge, Button, Row, Column } from "react-bootstrap";

export function ProductCard(props) {
  return (
    <div className="product-list">
      <ul>
        {props.product.map(product => {
          return (
            <Container
              id="Card"
              className="fluid d-flex justify-content-center"
            >
              <Card
                key={product.id}
                className="h-100 shadow-sm bg-white rounded"
              >
                <Card.Img variant="top" src={product.imgUrl} />
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                      {product.title}
                    </Card.Title>
                    <Badge pill className="mb-1" variant="warning">
                      ${product.price}
                    </Badge>
                  </div>
                  <Card.Text className="text-secondary">
                    {product.review}
                  </Card.Text>
                  <Button
                    className="mt-auto font-weight-bold"
                    variant="success"
                    block
                  >
                    <span className="review">Review</span>
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          );
        })}
      </ul>
    </div>
  );
}
