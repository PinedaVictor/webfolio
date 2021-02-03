import React, { useState } from "react";
import "../Styles/components/contactForm.scss";
import { Form, Col, Button, Spinner } from "react-bootstrap";
import { animated, useTransition } from "react-spring";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
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
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);

  const submitResumeForm = (event: React.FormEvent<HTMLFormElement>) => {
    setSendingEmail(true);
    event.preventDefault();
    const sendEmail = firebase.functions().httpsCallable("sendResume");
    sendEmail(formFields)
      .then(() => {
        setFormFields({ name: "", email: "" });
        setSendingEmail(false);
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 1700);
      })
      .catch(() => {
        setEmailFailed(true);
        setTimeout(() => {
          setSendingEmail(false);
        }, 1700);
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
      <div>
        <Button id="exitButton" onClick={props.toggleForm}>
          <IoMdClose size="2rem" style={{ marginLeft: "-5px" }} />
        </Button>
      </div>
      <p style={{ color: "white" }}>
        {"Enter your email and my resume will be sent"}
      </p>
      <Form
        onSubmit={submitResumeForm}
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
