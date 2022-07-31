import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import { SplashArrowContainer } from "./Containers.styles";
import Link from "next/link";

import { useState } from "react";

const ArrowNormalStyle = {
  width: "3rem",
  height: "3rem",
  color: "var(--secondary)",
  display: "flex",
};

const ArrowHoverStyle = {
  width: "3rem",
  height: "3rem",
  color: "var(--highlight)",
  display: "flex",
};

const ArrowOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: none;
  justify-items: center;
  align-items: center;
`;

const UpArrowInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: none;
  min-width: 100px;
  min-height: 70px;
`;

const DownArrowInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: none;
  min-width: 100px;
  min-height: 70px;
`;

const ArrowTags = styled.p`
  font-family: var(--font-secondary);
  font-style: italic;
  font-size: 1rem;
  color: var(--secondary);
`;

const SplashHR = styled.hr`
  border: none;
  border-bottom: 2px solid var(--secondary);
  text-align: center;
  color: var(--secondary);
  width: 20%;
  margin: 0 auto;
`;

export function NavArrows({ splashProps }) {
  const handleUpArrowMouseEnter = () => {
    splashProps.setIsUpHovering(true);
  };

  const handleUpArrowMouseLeave = () => {
    splashProps.setIsUpHovering(false);
  };

  const handleDownArrowMouseEnter = () => {
    splashProps.setIsDownHovering(true);
  };

  const handleDownArrowMouseLeave = () => {
    splashProps.setIsDownHovering(false);
  };
  return (
    <ArrowOuterContainer>
      <UpArrowInnerContainer>
        <Link href={splashProps.props.previousSection}>
          <a>
            <KeyboardDoubleArrowUpIcon
              style={
                splashProps.isUpHovering ? ArrowHoverStyle : ArrowNormalStyle
              }
              onMouseEnter={handleUpArrowMouseEnter}
              onMouseLeave={handleUpArrowMouseLeave}
            />
          </a>
        </Link>
        <ArrowTags>
          {splashProps.props.previousSection.slice(1).toUpperCase()}
        </ArrowTags>
      </UpArrowInnerContainer>
      {/* <SplashHR></SplashHR> */}
      <DownArrowInnerContainer>
        <ArrowTags>
          {splashProps.props.nextSection.slice(1).toUpperCase()}
        </ArrowTags>
        <Link href={splashProps.props.nextSection}>
          <a>
            <KeyboardDoubleArrowDownIcon
              style={
                splashProps.isDownHovering ? ArrowHoverStyle : ArrowNormalStyle
              }
              onMouseEnter={handleDownArrowMouseEnter}
              onMouseLeave={handleDownArrowMouseLeave}
            />
          </a>
        </Link>
      </DownArrowInnerContainer>
    </ArrowOuterContainer>
  );
}
