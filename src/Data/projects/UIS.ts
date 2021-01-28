import img from "../../Assets/images/uis.jpg";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

export const UIS = {
  title: "United International Services LLC",
  type: "Web App",
  icons: [
    { icon: FaReact, Framework: "React" },
    { icon: BsCodeSlash, Framework: "NativeBase" },
    { icon: IoLogoFirebase, Framework: "Firebase" },
  ],
  backgroundImg: img,
  cruces: [
    "Implemented backend serverless architecture using Firebase cloud functions to support the website’s contact form",
    "Designed and delivered company logos and assets to use for website and marketing material",
  ],
};
