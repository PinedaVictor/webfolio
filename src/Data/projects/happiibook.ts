import img from "../../Assets/images/3.jpg";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

export const Happiibook = {
  title: "happiibook LLC",
  type: "Web App",
  icons: [
    { icon: FaReact, Framework: "React" },
    { icon: BsCodeSlash, Framework: "NativeBase" },
    { icon: IoLogoFirebase, Framework: "Firebase" },
  ],
  backgroundImg: img,
  cruces: [
    "Designed and implemented full stack React functional components in TypeScript optimized for scalability and readability",
    "Developed social networking features on the main user React web application using the React context API and Firestore",
    "Implemented functionality that allowed users to update their info in real time using UI inline editing and Firebase listeners",
    "Spearheaded and implemented a mono-repository architecture using Nrwl NX that housed all internal and external applications/libraries",
  ],
};
