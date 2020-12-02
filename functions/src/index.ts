import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const sendGridConfig = functions.config().sendgrid;
const SEND_GRID_API_KEY = sendGridConfig.key;
const MESSAGE_TO_ME = sendGridConfig.client_template;

sgMail.setApiKey(SEND_GRID_API_KEY);

export const contactMe = functions.https.onCall((data, context) => {
  console.log("Mad it to http funciton");
  const myNotificationTemplate = {
    from: data.email,
    templateId: MESSAGE_TO_ME,
    dynamicTemplateData: {
      name: data.name,
      message: data.message,
      subject: data.subject,
      preheader: "[Website Inquiry]",
    },
  };
  sgMail
    .send({
      to: "pinedavictor095@gmail.com",
      ...myNotificationTemplate,
    })
    .then(() => {
      true;
    })
    .catch((error: unknown) => {
      throw new functions.https.HttpsError(
        "internal",
        `ERROR in Promise All: ${error}`
      );
    });
});
