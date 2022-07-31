import GlobalStyle from "../assets/GlobalStyles.styles";
import { AppContainer } from "../components/AppContainer.styles";
import {
  PageArrowsContainer,
  PageContentContainer,
} from "../components/Containers.styles.js";
import Link from "next/link";
import SplashIcons from "../components/SplashIcons.jsx";
import Splash from "../components/Splash.jsx";
import About from "../components/About.jsx";
import TechStack from "../components/TechStack.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact";

import { SplashArrow, NavArrows } from "../components/NavArrows";

import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

function HomePage() {
  const [previousSection, setPreviousSection] = useState("");
  const [nextSection, setNextSection] = useState("");

  const [currentSection, setCurrentSection] = useState("#splash");

  console.log(`current section: ${currentSection} 
  next section: ${nextSection} 
  prev section: ${previousSection}`);

  useEffect(() => {
    switch (currentSection) {
      case "#splash":
        setPreviousSection("");
        setNextSection("#about");
        break;
      case "#about":
        setPreviousSection("#splash");
        setNextSection("#techstack");
        break;
      case "#techstack":
        setPreviousSection("#about");
        setNextSection("#projects");
        break;
      case "#projects":
        setPreviousSection("#techstack");
        setNextSection("#contact");
        break;
      case "#contact":
        setPreviousSection("#projects");
        setNextSection("");
        break;
    }
  });

  const sectionProps = {
    currentSection,
    setCurrentSection,
    setNextSection,
    setPreviousSection,
  };

  return (
    <>
      <GlobalStyle />
      <SplashIcons />
      <Splash props={sectionProps} />
      <AppContainer>
        <PageContentContainer>
          <About props={sectionProps} />
          <TechStack props={sectionProps} />
          <Projects props={sectionProps} />
          <Contact props={sectionProps} />
        </PageContentContainer>
        {currentSection === "#splash" && (
          <Link href="#about">
            <a>
              <SplashArrow />
            </a>
          </Link>
        )}

        {currentSection === "#contact" && (
          <Link href="#projects">
            <a>
              <SplashArrow />
            </a>
          </Link>
        )}
        {currentSection === "#splash" ? null : (
          <PageArrowsContainer>
            <NavArrows
              previousSection={previousSection}
              nextSection={nextSection}
            />
          </PageArrowsContainer>
        )}
      </AppContainer>
    </>
  );
}

export default HomePage;
