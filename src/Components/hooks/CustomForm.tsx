import React, { useState } from "react";
import "../../Styles/components/customForm.scss";
import { animated, useTransition } from "react-spring";
import { IoMdCheckmark } from "react-icons/io";
import { Col, Spinner } from "react-bootstrap";
import firebase from "firebase";

type FunctionName = "sendResume" | "contact";
// eslint-disable-next-line
export const useCustomForm = () => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);

  const submitForm = async <T,>(
    functionName: FunctionName,
    functionData: T
  ) => {
    setSendingEmail(true);
    const sendEmail = firebase.functions().httpsCallable(functionName);

    try {
      await sendEmail(functionData);
      setSendingEmail(false);
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
      }, 1700);
      return true;
    } catch {
      setEmailFailed(true);
      setTimeout(() => {
        setSendingEmail(false);
      }, 1700);
      return false;
    }
  };

  const handleInputChange = <T,>(
    // eslint-disable-next-line
    event: any,
    setFormFields: React.Dispatch<React.SetStateAction<T>>
  ) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setFormFields((prevState) => {
      const data = Object.assign({}, prevState);
      const newData = Object.assign(data, { ...data, [name]: value });
      return newData;
    });
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

  const emailSendingStatusComponent = emailSendingStatusTransition.map(
    ({ item, key, props }) =>
      item && (
        <Col key={key} sm={12}>
          <animated.div key={key} style={props}>
            <div className="emailSendingStatusWrapper">
              {!emailFailed ? (
                <p className="emailSendingtMessage">Sending</p>
              ) : (
                <p className="errorSendingEmailMessage">Error sending email</p>
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
  );

  const emailSentComponent = emailSentTransition.map(
    ({ item, key, props }) =>
      item && (
        <Col key={key} sm={12}>
          <animated.div key={key} style={props}>
            <div className="emailSendingStatusWrapper">
              <p className="emailSentMessage">Email Sent</p>
              <IoMdCheckmark
                className="emailSentCheckIcon"
                size="5rem"
                color="white"
              />
            </div>
          </animated.div>
        </Col>
      )
  );

  return {
    submitForm,
    handleInputChange,
    emailSendingStatusComponent,
    emailSentComponent,
  };
};
