import img from "../../Assets/images/researchFinal.jpg";
import { FaJava } from "react-icons/fa";
import { DiScala } from "react-icons/di";

export const Research = {
  title: "Research",
  type: "CSUN Student Testing Research",
  icons: [
    { icon: FaJava, Framework: "Java" },
    { icon: DiScala, Framework: "Scala" },
  ],
  backgroundImg: img,
  cruces: [
    "Scala Monads designed to generate random input arguments",
    "Java and Scala automated tests used to test and score student labs",
    "Assessed Java vs Scala testing techniques based on ease of use and effectiveness",
  ],
};
