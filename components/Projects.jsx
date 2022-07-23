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
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding-bottom: 5rem;

  &:hover {
    cursor: grab;
  }
`;

const LeftSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
  margin-top: 1rem;
`;
const RightSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const SlideIconContainer = styled.div`
  display: flex;
  gap: 1.2rem;
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
            // type: "loop",
            // rewind: true,
            // rewindByDrag: true,
            // autoplay: true,
            // interval: 8000,
            speed: 2000,
            arrows: false,
            // pauseOnHover: true,
            width: "100%",
            height: "100%",
            gap: "1rem",
            drag: true,
          }}
        >
          {Slides.map((slide) => {
            return (
              <SplideSlide>
                <SlideContainer>
                  <LeftSlideContainer>
                    <Image src={slide.src} style={ProjectImageStyle}></Image>
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
