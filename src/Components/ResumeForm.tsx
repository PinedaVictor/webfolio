import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

interface ResumeForm {
  name: string;
  email: string;
}

interface ResumeFormProps {
  toggleForm: () => void;
}
export const ResumeForm: React.FC<ResumeFormProps> = (props) => {
  return (
    <Col
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      style={{
        height: "100%",
        borderRadius: "25px",
        margin: "auto",
        top: "0",
      }}
    >
      <div>
        <Button
          style={{
            width: "3rem",
            height: "3rem",
            float: "right",
            marginBottom: "10px",
            border: "2px solid white",
            backgroundColor: "black",
            borderRadius: "25px",
            // marginRight: "3%",
            top: "0",
          }}
          onClick={props.toggleForm}
        >
          <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
        </Button>
      </div>
      <p style={{ color: "white" }}>
        {"Enter your email and my resume will be sent"}
      </p>
      <Form
        style={{
          maxWidth: "35rem",
          margin: "auto",
          marginTop: "55px",
        }}
      >
        <Form.Group controlId="name">
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Text
            style={{
              color: "white",
              letterSpacing: "1.5px",
              paddingBottom: "3px",
              paddingLeft: "2.5px",
            }}
          >
            {"Your email will NOT be shared with anyone else."}
          </Form.Text>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Button
          style={{
            marginLeft: "2%",
            backgroundColor: "black",
            border: "2px solid white",
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Col>
  );
};
