import styled from "styled-components";
import Image from "next/future/image";
import Slides from "../data/slides/SlidesData";
import { SectionContainer, SectionContentContainer } from "./Containers.styles";
import { SectionTitle, TitleArea } from "../components/SectionTitle.styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SlideSectionContainer = styled.div`
  max-width: 100%;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  gap: 2rem;
  padding-bottom: 5rem;
  margin: 0 auto;

  &:hover {
    cursor: grab;
  }

  @media screen and (min-width: 420px) {
    flex-direction: row;
  }
`;

const LeftSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
  margin-top: 1rem;

  @media screen and (min-width: 420px) {
    width: 50%;
  }
`;
const RightSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  @media screen and (min-width: 420px) {
    width: 50%;
  }
`;

const SlideIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  width: 100%;
  position: relative;

  @media screen and (min-width: 420px) {
    padding-left: 1rem;
    max-width: 90%;
  }
`;

const ProjectImageWrapper = styled.div`
  -webkit-box-shadow: -15px 25px 0px -10px var(--primary),
    20px -20px 0px -20px var(--primary), 20px -20px -0px -10px var(--primary),
    -20px 20px 0px -10px var(--primary), 0px 0px 0px 5px var(--secondary),
    25px 25px 15px 5px rgba(0, 0, 0, 0);

  box-shadow: -15px 25px 0px -10px var(--primary),
    20px -20px 0px -20px var(--primary), 20px -20px -0px -10px var(--primary),
    -20px 20px 0px -10px var(--primary), 0px 0px 0px 5px var(--secondary),
    25px 25px 15px 5px rgba(0, 0, 0, 0);
  padding: 1rem;
`;

const ProjectImageStyle = {
  height: "auto",
  width: "100%",
};

const ProjectIconStyle = {
  height: "1.8rem",
  width: "auto",
  filter:
    "invert(71%) sepia(30%) saturate(475%) hue-rotate(125deg) brightness(88%) contrast(84%)",
};

const ProjectTitle = styled.h3`
  color: var(--secondary);
  font-size: 2rem;
  font-weight: 300;
`;

const ProjectLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
  font-weight: 300;

  &:hover {
    color: var(--highlight);
    cursor: pointer;
  }
`;

const ProjectText = styled.p`
  color: var(--highlight);
  text-align: justify;
  font-weight: 300;
  font-size: 1.2rem;
`;

function Projects({ props }) {
  const { ref: projectsRef, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView === true) {
      props.setCurrentSection("#projects");
    }
  });

  return (
    <SectionContainer id="projects" ref={projectsRef}>
      <SlideSectionContainer>
        <TitleArea>
          <SectionTitle>Projects</SectionTitle>
        </TitleArea>
        <SectionContentContainer>
          <Splide
            aria-label="My Projects"
            options={{
              type: "loop",
              rewind: true,
              rewindByDrag: true,
              autoplay: true,
              interval: 10000,
              speed: 2000,
              arrows: false,
              pauseOnHover: true,
              width: "100%",
              height: "100%",
              drag: true,
            }}
          >
            {Slides.map((slide) => {
              return (
                <SplideSlide>
                  <SlideContainer>
                    <LeftSlideContainer>
                      <ProjectImageWrapper>
                        <Image
                          src={slide.src}
                          style={ProjectImageStyle}
                        ></Image>
                      </ProjectImageWrapper>
                      <SlideIconContainer>
                        {Object.values(slide.icons).map((icon) => {
                          return (
                            <Image
                              src={icon}
                              style={ProjectIconStyle}
                              priority
                            ></Image>
                          );
                        })}
                      </SlideIconContainer>
                    </LeftSlideContainer>
                    <RightSlideContainer>
                      <ProjectTitle>{slide.title}</ProjectTitle>
                      <ProjectLink href="#" target="_blank">
                        {slide.url}
                      </ProjectLink>
                      <ProjectLink href="#" target="_blank">
                        {slide.github}
                      </ProjectLink>
                      <ProjectText>{slide.text}</ProjectText>
                    </RightSlideContainer>
                  </SlideContainer>
                </SplideSlide>
              );
            })}
          </Splide>
        </SectionContentContainer>
      </SlideSectionContainer>
    </SectionContainer>
  );
}

export default Projects;
