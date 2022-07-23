import styled from "styled-components";
import Image from "next/future/image";
import Slides from "../data/slides/SlidesData";
import { SectionContainer, SectionContentContainer } from "./Containers.styles";
import { SectionTitle } from "../components/SectionTitle.styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";


const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  gap: 2rem;
`;

const LeftSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;
const RightSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SlideIconContainer = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
`;

const ProjectImageStyle = {
  height: "auto",
  width: "100%",
};

const ProjectTitle = styled.h3`
  color: var(--secondary);
  font-size: 2rem;
  font-weight: 300;
`;


function Projects() {
  return (
    <SectionContainer>
      <SectionTitle>Projects</SectionTitle>
      <SectionContentContainer>
        <Splide aria-label="My Projects">
          {Slides.map((slide) => {
            return (
              <SplideSlide>
                <SlideContainer>
                  <LeftSlideContainer>
                    <Image src={slide.src} style={ProjectImageStyle}></Image>
                    <SlideIconContainer>
                      {Object.values(slide.icons).map((icon) => {
                        return (
                          <Image src={icon} width={50} height={50}></Image>
                        );
                      })}
                    </SlideIconContainer>
                  </LeftSlideContainer>
                  <RightSlideContainer>
                    <ProjectTitle>{slide.title}</ProjectTitle>
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
