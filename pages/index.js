import GlobalStyle from "../assets/GlobalStyles.styles";
import { AppContainer } from "../components/AppContainer.styles";
import {
  PageArrowsContainer,
  PageContentContainer,
} from "../components/Containers.styles.js";
import SplashIcons from "../components/SplashIcons.jsx";
import Splash from "../components/Splash.jsx";
import About from "../components/About.jsx";
import TechStack from "../components/TechStack.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact";

import { SplashArrow, NavArrows } from "../components/NavArrows";

import { useInView } from "react-intersection-observer";
import ExpandMore from "@mui/icons-material/ExpandLess";

function HomePage() {
  const { ref: splashRef, inView } = useInView();
  console.log(inView);

  return (
    <>
      <GlobalStyle />
      <SplashIcons />
      <Splash myRef={splashRef} inView={inView} />
      <AppContainer>
        <PageContentContainer>
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </PageContentContainer>
        {inView && <SplashArrow />}

        {inView ? null : (
          <PageArrowsContainer>
            <NavArrows />
          </PageArrowsContainer>
        )}
      </AppContainer>
    </>
  );
}

export default HomePage;
