import GlobalStyle from "../GlobalStyles.styles.js";
import { AppContainer } from "../components/AppContainer.styles";
import { PageContentContainer } from "../components/Containers.styles.js";
import SplashIcons from "../components/SplashIcons.jsx";
import Splash from "../components/Splash.jsx";
import About from "../components/About.jsx";
import TechStack from "../components/TechStack.jsx";
import Projects from "../components/Projects.jsx";

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <SplashIcons />
        <PageContentContainer>
          <Splash />
          <About />
          <TechStack />
          <Projects />
        </PageContentContainer>
      </AppContainer>
    </>
  );
  // About
  // Tech Stack
  // Projects
  // Contact
  // CV
}

export default HomePage;
