import {
  SplashContainer,
  IconContainer,
  SplashMenuContainer,
} from "../components/Containers.styles";

import SplashIcons from "./SplashIcons";

function Splash() {
  return (
    <SplashContainer>
        <SplashIcons />
      <SplashMenuContainer>
        <h1>Menu</h1>
      </SplashMenuContainer>
    </SplashContainer>
  );
}

export default Splash;
