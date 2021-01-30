import img from "../../Assets/images/2.jpg";
import { IoLogoFirebase } from "react-icons/io5";
import { MdBuild } from "react-icons/md";
import { SiArduino } from "react-icons/si";

export const ThreeDPrinterBuild = {
  title: "3D Printer build",
  type: "3D Printer",
  icons: [
    { icon: MdBuild, Framework: "DIY build kit" },
    { icon: SiArduino, Framework: "Arduino Mega" },
  ],
  backgroundImg: img,
  cruces: ["Built 3D Printer"],
};