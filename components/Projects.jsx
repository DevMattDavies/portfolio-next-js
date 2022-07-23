import styled from "styled-components";
import Image from "next/future/image";
import Slides from "../data/slides/SlidesData";
import { SectionContainer, SectionContentContainer } from "./Containers.styles";
import { SectionTitle } from "../components/SectionTitle.styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/core";

const SlideContainer = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  gap: 2rem;
  padding-bottom: 5rem;
  margin: 0 auto;

  &:hover {
    cursor: grab;
  }
`;

const LeftSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2rem;
  margin-top: 1rem;
`;
const RightSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

const SlideIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  padding-left: 1rem;
  max-width: 90%;
  position: relative;
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

function Projects() {
  return (
    <SectionContainer>
        <SectionTitle>Projects</SectionTitle>
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
            // gap: "1rem",
            drag: true,
          }}
        >
          {Slides.map((slide) => {
            return (
              <SplideSlide>
                <SlideContainer>
                  <LeftSlideContainer>
                    <ProjectImageWrapper>
                      <Image src={slide.src} style={ProjectImageStyle}></Image>
                    </ProjectImageWrapper>
                    <SlideIconContainer>
                      {Object.values(slide.icons).map((icon) => {
                        return (
                          <Image src={icon} style={ProjectIconStyle}></Image>
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
    </SectionContainer>
  );
}

export default Projects;
