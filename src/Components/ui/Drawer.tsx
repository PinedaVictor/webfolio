import React from "react";
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
      opacity: 0,
      width: "300px",
      backgroundColor: "black",
      height: "100%",
      right: 0,
      top: 0,
      color: "white",
      // boxShadow: "0px 55px 70px #878787",
      zIndex: 999,
    },
    enter: { transform: "translate3d(0px, 0px, 0px)", opacity: 1 },
    leave: { transform: "translate3d(300px, 0px, 0px)", opacity: 0 },
  });

  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <div>Close Icon</div>
              <div style={{ color: "white", fontSize: "20px" }}>
                <ul>
                  <li>Home</li>
                  <li>All Projects</li>
                  <li>Resume</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>Happy Face Svg with Stay up below it</div>
              <div>Signiture Svg</div>
            </animated.div>
          )
      )}
    </>
  );
};
