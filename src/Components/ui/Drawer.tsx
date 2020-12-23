import React from "react";
import { Container } from "react-bootstrap";
import { useTransition, animated } from "react-spring";

interface DrawerProps {
  control: boolean;
}
export const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
  const transition = useTransition(props.control, null, {
    config: {
      duration: 425,
    },
    from: {
      transform: "translate3d(260px, 0px, 0px)",
      position: "fixed",
      opacity: 1,
      width: "260px",
      backgroundColor: "red",
      height: "100%",
      right: 0,
      top: 0,
    },
    enter: { transform: "translate3d(0px, 0px, 0px)" },
    leave: { transform: "translate3d(260px, 0px, 0px)" },
  });

  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && <animated.div key={key} style={props}></animated.div>
      )}
    </>
  );
};
