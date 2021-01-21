import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";

const sendGridConfig = functions.config().sendgrid;
const SEND_GRID_API_KEY = sendGridConfig.key;
const CONFIRMATION_TEMPLATE_ID = sendGridConfig.client_confirmation;
const CLIENT_TEMPLATE_ID = sendGridConfig.client_template;

sgMail.setApiKey(SEND_GRID_API_KEY);

export const contact = functions.https.onCall((data: any) => {
  const vpNotificationTemplate = {
    from: data.email,
    templateId: CLIENT_TEMPLATE_ID,
    dynamicTemplateData: {
      name: data.name,
      message: data.text,
      phone: data.phone,
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
