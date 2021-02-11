import img from "../../Assets/images/uno2.2.jpg";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiArduino } from "react-icons/si";
import { GiCartwheel } from "react-icons/gi";

export const UDSCar = {
  title: "Autonomous car",
  type: "Ultrasonic Distance Sensor Car",
  icons: [
    { icon: SiArduino, Framework: "Arduino" },
    { icon: GiCartwheel, Framework: "DC motors" },
    { icon: IoCodeSlashOutline, Framework: "C Programming" },
    { icon: IoCodeSlashOutline, Framework: "Distance Sensor" },
  ],
  backgroundImg: img,
  cruces: [
    "Utilized an Ultrasonic Distance Sensor for wall detection",
    "Programmed Arduino Uno to handle motor control based on sensor readings",
  ],
};
