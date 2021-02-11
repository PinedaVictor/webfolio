import img from "../../Assets/images/1.jpg";
import { IoLogoFirebase, IoCodeSlashOutline } from "react-icons/io5";
import { SiArduino } from "react-icons/si";
import { GiCartwheel } from "react-icons/gi";

export const UDSCar = {
  title: "Ultrasonic Distance Sensor Car",
  type: "Robot",
  icons: [
    { icon: SiArduino, Framework: "Arduino" },
    { icon: GiCartwheel, Framework: "DC motors" },
    { icon: IoCodeSlashOutline, Framework: "C Programming" },
    { icon: IoCodeSlashOutline, Framework: "Distance Sensor" },
  ],
  backgroundImg: img,
  cruces: ["Ultrasonic Distance Sensor", "Autonomous car"],
};
