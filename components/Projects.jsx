import { SectionContainer, SectionContentContainer } from "./Containers.styles";
import { SectionTitle } from "../components/SectionTitle.styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

function Projects() {
  return (
    <SectionContainer>
      <SectionTitle>Projects</SectionTitle>
      <SectionContentContainer>
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img src="image1.jpg" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="image2.jpg" alt="Image 2" />
          </SplideSlide>
        </Splide>
      </SectionContentContainer>
    </SectionContainer>
  );
}

export default Projects;
