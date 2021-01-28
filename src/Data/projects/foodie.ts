import img from "../../Assets/images/2.jpg";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

export const Foodie = {
  title: "Foodie",
  type: "Mobile App",
  icons: [
    { icon: FaReact, Framework: "React" },
    { icon: BsCodeSlash, Framework: "NativeBase" },
    { icon: IoLogoFirebase, Framework: "Firebase" },
  ],
  backgroundImg: img,
  cruces: [
    "Designed and implemented a database architecture that served as the data layer for the mobile application",
    "Built an interactive real time chat with Firestore",
    "Led retrospectives to advance app vision and solve problems",
  ],
};
