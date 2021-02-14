import React, { useState } from "react";
import "../Styles/components/contactForm.scss";
import { Button, Form, Col } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { useCustomForm } from "./hooks/CustomForm";

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
  const {
    submitForm,
    handleInputChange,
    emailSendingStatusComponent,
    emailSentComponent,
  } = useCustomForm();

  const [contactFormFields, setFormFields] = useState<ContactFormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formSuccess = await submitForm("contact", contactFormFields);
    if (formSuccess) {
      setFormFields({ name: "", email: "", subject: "", message: "" });
    }
  };

  const onInputChange = (e: any) => {
    handleInputChange(e, setFormFields);
  };

  return (
    <Col className="colWrapper" xs={12} sm={12} md={12} lg={12} xl={12}>
      <Button id="exitButton" onClick={props.toggleForm}>
        <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
      </Button>
      <Form className="contactForm" onSubmit={onFormSubmit}>
        <Form.Group controlId="name">
          <Form.Text className="formEmailPolicy">
            {"Your information will NOT be shared with anyone else."}
          </Form.Text>
          <Form.Control
            onChange={onInputChange}
            type="name"
            name="name"
            placeholder="Name"
            value={contactFormFields.name}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            name="email"
            onChange={onInputChange}
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
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            placeholder="Message"
            value={contactFormFields.message}
            onChange={onInputChange}
          />
        </Form.Group>
        <Button className="submitButton" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {emailSendingStatusComponent}
      {emailSentComponent}
    </Col>
  );
};
