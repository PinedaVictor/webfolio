import img from "../../Assets/images/foodie.jpg";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

export const Foodie = {
  title: "Mobile App",
  type: "Senior Design project Foodie",
  icons: [
    { icon: FaReact, Framework: "React Native" },
    { icon: BsCodeSlash, Framework: "NativeBase" },
    { icon: IoLogoFirebase, Framework: "Firebase" },
  ],
  backgroundImg: img,
  cruces: [
    "Allowed users to rank individual restaurant plates",
    "Built an interactive real time chat",
    "Designed graphical assets",
    "Implemented UI/UX design with fluent user navigation using React Native and Nativebase.io",
  ],
};
