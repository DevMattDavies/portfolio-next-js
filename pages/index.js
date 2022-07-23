import GlobalStyle from "../assets/GlobalStyles.styles";
import { AppContainer } from "../components/AppContainer.styles";
import { PageContentContainer } from "../components/Containers.styles.js";
import SplashIcons from "../components/SplashIcons.jsx";
import Splash from "../components/Splash.jsx";
import About from "../components/About.jsx";
import TechStack from "../components/TechStack.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact"

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
          <Contact />
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
