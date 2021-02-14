import * as functions from "firebase-functions";
import sgMail from "@sendgrid/mail";
import firebase from "firebase/app";

const sendGridConfig = functions.config().sendgrid;
const SEND_GRID_API_KEY = sendGridConfig.key;
const CONFIRMATION_TEMPLATE_ID = sendGridConfig.client_confirmation;
const CLIENT_TEMPLATE_ID = sendGridConfig.client_template;

sgMail.setApiKey(SEND_GRID_API_KEY);

const fs = require("fs");
const pathToResume = `${__dirname}/PinedaVictor.pdf`;
const resumeAttachment = fs.readFileSync(pathToResume).toString("base64");

const db = firebase.firestore();

export const contact = functions.https.onCall((data: any) => {
  const vpNotificationTemplate = {
    from: data.email,
    templateId: CLIENT_TEMPLATE_ID,
    dynamicTemplateData: {
      name: data.name,
      message: data.text,
      subject: data.subject,
      preheader: "[Website Inquiry]",
    },
  };

  const vpNotification1 = sgMail.send({
    to: "pinedavictor095@gmail.com",
    ...vpNotificationTemplate,
  });

  const clientNotification = sgMail.send({
    to: data.email,
    from: "pinedavictor095@gmail.com",
    templateId: CONFIRMATION_TEMPLATE_ID,
    dynamicTemplateData: {
      name: data.name,
      subject: "Email Inquiry",
      preheader: "[Confirmation]",
    },
  });

  Promise.all([vpNotification1, clientNotification])
    .then(() => true)
    .catch((error) => {
      throw new functions.https.HttpsError(
        "internal",
        `ERROR in Promise All: ${error}`
      );
    });
});

export const sendResume = functions.https.onCall((data: any) => {
  sgMail
    .send({
      to: data.email,
      from: "pinedavictor095@gmail.com",
      templateId: CONFIRMATION_TEMPLATE_ID,
      dynamicTemplateData: {
        name: data.name,
        subject: "VP Resume Inquiry",
        preheader: "[VP resume]",
      },
      attachments: [
        {
          content: resumeAttachment,
          filename: "pinedaVictor.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    })
    .catch((error) => {
      throw new functions.https.HttpsError(
        "internal",
        `ERROR in Promise All: ${error}`
      );
    });

  try {
    db.collection("resumesSent").add({ name: data.name, email: data.email });
  } catch (error) {
    console.log("Error:::", error);
  }
});
