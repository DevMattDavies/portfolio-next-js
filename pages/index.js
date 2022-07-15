import GlobalStyle from "../GlobalStyles.styles.js";
import { AppContainer } from '../components/AppContainer.styles'
import Splash from "../components/Splash.jsx";

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Splash/>
      </AppContainer>

    </>
  );
  // Left nav
  // Splash
  // About
  // Tech Stack
  // Projects
  // Contact
  // CV
}

export default HomePage;
