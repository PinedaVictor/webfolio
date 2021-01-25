import React, { useState } from "react";
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
  // FIXME: Use types
  // React.FormEvent<HTMLFormElement>
  // SyntheticBaseEvent
  const submitContactForm = (event: any) => {
    event.preventDefault();
    const { name, email, subject, message } = event.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    console.log("Calling onSubmit with::::", data);
    const sendEmails = firebase.functions().httpsCallable("contact");
    console.log("Got the email VAR");
    sendEmails(data)
      .then(() => {
        console.log("About to clear the form");
        const resetForm = { name: "", email: "", subject: "", message: "" };
        setFormFields(resetForm);
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
      <Button
        style={{
          width: "3rem",
          height: "3rem",
          float: "right",
          marginBottom: "10px",
          border: "2px solid white",
          backgroundColor: "black",
          borderRadius: "25px",
          marginRight: "3%",
        }}
        onClick={props.toggleForm}
      >
        <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
      </Button>
      <Form
        id="ContactForm"
        onSubmit={submitContactForm}
        style={{
          maxWidth: "35rem",
          margin: "auto",
          marginTop: "15px",
        }}
      >
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
