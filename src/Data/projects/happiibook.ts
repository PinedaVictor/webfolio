import img from "../../Assets/images/1.jpg";
import { IoLogoFirebase, IoApps } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

export const Happiibook = {
  title: "happiibook LLC",
  type: "Software Architecture",
  icons: [
    { icon: FaReact, Framework: "React" },
    { icon: IoApps, Framework: "Nrwl Nx" },
    { icon: IoLogoFirebase, Framework: "Firebase" },
  ],
  backgroundImg: img,
  cruces: [
    "Implemented a mono-repository architecture using Nrwl NX that housed all internal and external applications and libraries",
    "Designed and implemented full stack React functional components in TypeScript optimized for scalability and readability",
    "Developed social networking features on the main user React web application using the React context API and Firestore",
    "Implemented functionality that allowed users to update their info in real time using UI inline editing and Firebase listeners",
  ],
};
