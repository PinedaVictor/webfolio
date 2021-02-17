import img from "../../Assets/images/uisFinal.jpg";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaUikit } from "react-icons/fa";

export const UIS = {
  title: "Web App",
  type: "United International Services LLC",
  icons: [
    { icon: FaReact, Framework: "React" },
    { icon: FaUikit, Framework: "UI Kit" },
    { icon: IoLogoFirebase, Framework: "Firebase" },
  ],
  backgroundImg: img,
  cruces: [
    "Implemented backend serverless architecture using Firebase cloud functions to support the website’s contact form",
    "Designed all company graphical assets and implemented tech stack",
    "Created and refined specifications based on company requirements",
  ],
};
