import img from "../../Assets/images/threeDBuild.jpg";
import { MdBuild } from "react-icons/md";
import { SiArduino } from "react-icons/si";

export const ThreeDPrinterBuild = {
  title: "3D Printer Build",
  type: "Hardware and Software",
  icons: [
    { icon: MdBuild, Framework: "DIY build kit" },
    { icon: SiArduino, Framework: "Arduino Mega" },
  ],
  backgroundImg: img,
  cruces: [
    "Assembled various hardware components",
    "Wired/soldered electrical hardware used to control components",
    "Designed parts in SolidWorks to be printed",
    "Ensured software was operating as intended",
  ],
};
