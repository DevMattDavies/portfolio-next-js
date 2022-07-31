import { SplashContainer } from "../components/Containers.styles";
import SplashMenu from "./SplashMenu";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Splash({ props }) {
  const { ref: splashRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView === true) {
      props.setCurrentSection("#home");
    }
  });

  return (
    <SplashContainer id="home" ref={splashRef}>
      <SplashMenu />
    </SplashContainer>
  );
}

export default Splash;
