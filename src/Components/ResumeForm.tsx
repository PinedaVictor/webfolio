import React, { useState } from "react";
import "../Styles/components/contactForm.scss";
import { Form, Col, Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { useCustomForm } from "./hooks/CustomForm";

interface ResumeFormFields {
  name: string;
  email: string;
}
interface ResumeFormProps {
  toggleForm: () => void;
}

export const ResumeForm: React.FC<ResumeFormProps> = (props) => {
  const {
    submitForm,
    handleInputChange,
    emailSendingStatusComponent,
    emailSentComponent,
  } = useCustomForm();

  const [formFields, setFormFields] = useState<ResumeFormFields>({
    name: "",
    email: "",
  });

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formSuccess = await submitForm("sendResume", formFields);
    if (formSuccess) {
      setFormFields({ name: "", email: "" });
    }
  };

  const onInputChange = (e: any) => {
    handleInputChange(e, setFormFields);
  };

  return (
    <Col className="colWrapper" xs={12} sm={12} md={12} lg={12} xl={12}>
      <div>
        <Button id="exitButton" onClick={props.toggleForm}>
          <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
        </Button>
      </div>
      <Form
        onSubmit={onFormSubmit}
        style={{
          maxWidth: "35rem",
          margin: "auto",
          marginTop: "55px",
        }}
      >
        <Form.Group controlId="name">
          <Form.Text className="formEmailPolicy">
            {"Your information will NOT be shared with anyone else."}
          </Form.Text>
          <Form.Control
            type="name"
            name="name"
            placeholder="Name"
            onChange={onInputChange}
            value={formFields.name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            onChange={onInputChange}
            value={formFields.email}
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
