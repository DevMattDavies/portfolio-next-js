import styled from "styled-components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SplashArrowContainer } from "./Containers.styles";

const ArrowStyle = {
  width: "5rem",
  height: "5rem",
  color: "var(--secondary)",
  display: "flex",
  alignItems: "flex-end",
};

export function SplashArrow() {
  return (
    <SplashArrowContainer>
      <ExpandMoreIcon style={ArrowStyle} />
    </SplashArrowContainer>
  );
}

export function NavArrows() {
  return (
    <>
      <ExpandLessIcon style={ArrowStyle} />
      <ExpandMoreIcon style={ArrowStyle} />
    </>
  );
}
