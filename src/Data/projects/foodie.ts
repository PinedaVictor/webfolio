import img from "../../Assets/images/2.jpg";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

export const Foodie = {
  title: "Foodie",
  type: "Mobile App",
  icons: [
    { icon: FaReact, Framework: "React Native" },
    { icon: BsCodeSlash, Framework: "NativeBase" },
    { icon: IoLogoFirebase, Framework: "Firebase" },
  ],
  backgroundImg: img,
  cruces: ["Rank individual plates of restaurants", "Senior design project"],
};
