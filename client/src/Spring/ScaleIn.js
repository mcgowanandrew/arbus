import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({children}) => {
  const style = useSpring({
      width:"100vw",
      height:"100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
        mass: 2.6,
        tension: 192,
        friction: 12
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;
