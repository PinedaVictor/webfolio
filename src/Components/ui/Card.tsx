import React from "react";
import { Card, Button, Accordion } from "react-bootstrap";

export const ProjectCard: React.FC = () => {
  return (
    <div style={{ backgroundColor: "", padding: "5px", margin: "auto" }}>
      <Card style={{ maxWidth: "25rem", height: "25rem" }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
