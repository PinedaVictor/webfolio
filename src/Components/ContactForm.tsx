import React, { useState } from "react";
import "../Styles/components/contactForm.scss";
import { animated, useTransition } from "react-spring";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
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

  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);
  // FIXME: Use types and use state objects
  // React.FormEvent<HTMLFormElement>
  // SyntheticBaseEvent
  const submitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    setSendingEmail(true);
    event.preventDefault();
    console.log("Calling onSubmit with::::", contactFormFields);
    const sendEmails = firebase.functions().httpsCallable("contact");
    console.log("Got the email VAR");
    sendEmails(contactFormFields)
      .then(() => {
        console.log("About to clear the form");
        setFormFields({ name: "", email: "", subject: "", message: "" });
        setEmailSent(true);
        setTimeout(() => {
          setSendingEmail(false);
        }, 1000);
      })
      .catch((error) => {
        console.log("The email was not able to send::::", error);
        setEmailFailed(true);
        setTimeout(() => {
          setSendingEmail(false);
        }, 1700);
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

  const emailSendingStatusTransition = useTransition(sendingEmail, null, {
    config: {
      duration: 450,
    },
    from: {
      opacity: 0,
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.9)",
      height: "30rem",
      position: "absolute",
      left: "0",
      top: "-25rem",
      overflow: "hidden",
      borderRadius: "25px",
      boxShadow: "10px 10px 20px black, -10px 10px 20px black",
    },
    enter: {
      opacity: 50,
    },
    leave: { opacity: 0 },
  });

  const emailSentTransition = useTransition(emailSent, null, {
    config: {
      duration: 450,
    },
    from: {
      opacity: 0,
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.9)",
      height: "30rem",
      position: "absolute",
      left: "0",
      top: "-25rem",
      overflow: "hidden",
      borderRadius: "25px",
      boxShadow: "10px 10px 20px black, -10px 10px 20px black",
    },
    enter: {
      opacity: 50,
    },
    leave: { opacity: 0 },
  });

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
      {emailSendingStatusTransition.map(
        ({ item, key, props }) =>
          item && (
            <Col key={key} sm={12}>
              <animated.div key={key} style={props}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "10rem",
                  }}
                >
                  {!emailFailed ? (
                    <p
                      style={{
                        fontSize: "4rem",
                        width: "100%",
                        textAlign: "center",
                        fontFamily: "San Francisco Text",
                        color: "white",
                      }}
                    >
                      Sending
                    </p>
                  ) : (
                    <p
                      style={{
                        fontSize: "3rem",
                        width: "100%",
                        textAlign: "center",
                        fontFamily: "San Francisco Text",
                        color: "white",
                      }}
                    >
                      Error sending email
                    </p>
                  )}
                  <Spinner
                    animation="grow"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      color: !emailFailed ? "#00c5d4" : "red",
                    }}
                  />
                </div>
              </animated.div>
            </Col>
          )
      )}
      {emailSentTransition.map(
        ({ item, key, props }) =>
          item && (
            <Col key={key} sm={12}>
              <animated.div key={key} style={props}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: "10rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "3rem",
                      width: "100%",
                      textAlign: "center",
                      fontFamily: "San Francisco Text",
                      color: "white",
                    }}
                  >
                    Email Sent
                  </p>
                  <IoMdCheckmark
                    size="5rem"
                    color="white"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#00c5d4",
                      padding: "7px",
                    }}
                  />
                </div>
              </animated.div>
            </Col>
          )
      )}
    </Col>
  );
};
