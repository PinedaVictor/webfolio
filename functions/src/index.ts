import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const sendResume = functions.https.onCall((data, context) => {});
export const contact = functions.https.onCall((data, context) => {});
