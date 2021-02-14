import * as functions from "firebase-functions";
import sgMail from "@sendgrid/mail";
const admin = require("firebase-admin");
admin.initializeApp();

const sendGridConfig = functions.config().sendgrid;
const SEND_GRID_API_KEY = sendGridConfig.key;
const CONFIRMATION_TEMPLATE_ID = sendGridConfig.client_confirmation;
const CLIENT_TEMPLATE_ID = sendGridConfig.client_template;
const RESUME_TEMPLATE_ID = sendGridConfig.resume_template;

sgMail.setApiKey(SEND_GRID_API_KEY);

const fs = require("fs");
const pathToResume = `${__dirname}/PinedaVictor.pdf`;
const resumeAttachment = fs.readFileSync(pathToResume).toString("base64");

export const contact = functions.https.onCall((data: any) => {
  const vpNotificationTemplate = {
    from: data.email,
    templateId: CLIENT_TEMPLATE_ID,
    dynamicTemplateData: {
      name: data.name,
      message: data.message,
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
  try {
    sgMail.send({
      to: data.email,
      from: "pinedavictor095@gmail.com",
      templateId: RESUME_TEMPLATE_ID,
      dynamicTemplateData: {
        name: data.name,
        subject: "Pineda Victor ",
        preheader: "[Resume]",
      },
      attachments: [
        {
          content: resumeAttachment,
          filename: "PinedaVictor.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    });

    admin
      .firestore()
      .collection("resumesSent")
      .add({ name: data.name, email: data.email });
  } catch (error) {
    throw new functions.https.HttpsError(
      "internal",
      `ERROR in Promise All: ${error}`
    );
  }
});
