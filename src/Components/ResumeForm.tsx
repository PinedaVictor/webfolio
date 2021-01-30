import React, { useState } from "react";
import "../Styles/components/contactForm.scss";
import { Form, Col, Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import firebase from "firebase/app";
import "firebase/functions";

interface ResumeFormFields {
  name: string;
  email: string;
}

interface ResumeFormProps {
  toggleForm: () => void;
}
export const ResumeForm: React.FC<ResumeFormProps> = (props) => {
  const [formFields, setFormFields] = useState<ResumeFormFields>({
    name: "",
    email: "",
  });

  const submitResmueForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Clicking submit resume form with::", formFields);
    const sendEmail = firebase.functions().httpsCallable("sendResume");
    sendEmail(formFields)
      .then(() => {
        setFormFields({ name: "", email: "" });
      })
      .catch((error) => {
        console.log("Error sending resume:::", error);
      });
  };
  //   FIXME: React.ChangeEvent<FormControlElement>
  const handleInputChange = (event: any) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setFormFields((prevState) => {
      const data = Object.assign({}, prevState);
      const newData = Object.assign(data, { ...data, [name]: value });
      return newData;
    });
    console.log;
  };
  return (
    <Col className="colWrapper" xs={12} sm={12} md={12} lg={12} xl={12}>
      <div>
        <Button id="exitButton" onClick={props.toggleForm}>
          <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
        </Button>
      </div>
      <p style={{ color: "white" }}>
        {"Enter your email and my resume will be sent"}
      </p>
      <Form
        onSubmit={submitResmueForm}
        style={{
          maxWidth: "35rem",
          margin: "auto",
          marginTop: "55px",
        }}
      >
        <Form.Group controlId="name">
          <Form.Control
            type="name"
            name="name"
            placeholder="Name"
            onChange={(e) => handleInputChange(e)}
            value={formFields.name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Text className="formEmailPolicy">
            {"Your email will NOT be shared with anyone else."}
          </Form.Text>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
            value={formFields.email}
          />
        </Form.Group>

        <Button className="submitButton" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};
