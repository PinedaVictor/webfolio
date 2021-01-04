import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Contact: React.FC = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "red",
        // backgroundColor: "#000d2a",
        marginBottom: "30px",
        margin: "0",
        padding: "0",
      }}
    >
      {/* <Row>
        <h4
          style={{
            color: "#00a6ed",
            fontWeight: "bold",
            fontFamily: "OCRAExtended, OCR A Extended",
            display: "block",
            // marginLeft: "2%",
          }}
        >
          Dexterity
        </h4>
      </Row> */}
      <Row
        style={{
          // backgroundColor: "red",
          marginLeft: "2%",
          marginRight: "2%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0",
          padding: "0",
          width: "100%",
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{
            // backgroundColor: "#0cce6b",
            // backgroundColor: "#000d2a",
            height: "10rem",
            // maxHeight: "35rem",
          }}
        >
          {/* aqua 00c5d4 */}
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          style={{
            backgroundColor: "black",
            height: "40rem",
            // maxHeight: "35rem",
          }}
        >
          {/* Oj ff592e */}

          <Form style={{ maxWidth: "35rem", margin: "auto", marginTop: "15%" }}>
            <Form.Group controlId="name">
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
              {/* <Form.Text className="text-muted">
                {"Your email will NOT be shared with anyone else."}
              </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="subject" placeholder="Subject" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
