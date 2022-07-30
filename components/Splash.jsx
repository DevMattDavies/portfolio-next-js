import { SplashContainer } from "../components/Containers.styles";
import { useInView } from "react-intersection-observer";
import SplashMenu from "./SplashMenu";

function Splash({ inView, myRef }) {
  return (
    <SplashContainer id="splash" ref={myRef}>
      <SplashMenu />
    </SplashContainer>
  );
}

export default Splash;
