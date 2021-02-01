import React, { useState } from "react";
import "../Styles/components/contactForm.scss";
import { Button, Form, Col } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import firebase from "firebase/app";
import "firebase/functions";

interface ContactFormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  toggleForm: () => void;
}

export const ContactForm: React.FC<ContactProps> = (props) => {
  const [contactFormFields, setFormFields] = useState<ContactFormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // FIXME: Use types and use state objects
  // React.FormEvent<HTMLFormElement>
  // SyntheticBaseEvent
  const submitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Calling onSubmit with::::", contactFormFields);
    const sendEmails = firebase.functions().httpsCallable("contact");
    console.log("Got the email VAR");
    sendEmails(contactFormFields)
      .then(() => {
        console.log("About to clear the form");
        setFormFields({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.log("The email was not able to send::::", error);
      });
  };

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setFormFields((prevState) => {
      const data = Object.assign({}, prevState);
      const newData = Object.assign(data, { ...data, [name]: value });
      return newData;
    });

    console.log("After setting state");
  };
  return (
    <Col className="colWrapper" xs={12} sm={12} md={12} lg={12} xl={12}>
      <Button id="exitButton" onClick={props.toggleForm}>
        <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
      </Button>
      <Form className="contactForm" onSubmit={submitContactForm}>
        <Form.Group controlId="name">
          <Form.Control
            onChange={(e) => handleInputChange(e)}
            type="name"
            name="name"
            placeholder="Name"
            value={contactFormFields.name}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Text className="formEmailPolicy">
            {"Your email will NOT be shared with anyone else."}
          </Form.Text>
          <Form.Control
            type="email"
            name="email"
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
            value={contactFormFields.email}
          />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Control
            type="subject"
            name="subject"
            placeholder="Subject"
            value={contactFormFields.subject}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            placeholder="Message"
            value={contactFormFields.message}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Button className="submitButton" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};
