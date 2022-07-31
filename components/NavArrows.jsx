import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import { SplashArrowContainer } from "./Containers.styles";
import Link from "next/link";

import { useState } from "react";

const ArrowNormalStyle = {
  width: "4rem",
  height: "4rem",
  color: "var(--secondary)",
  display: "flex",
  alignItems: "flex-end",
};

const ArrowHoverStyle = {
  width: "4rem",
  height: "4rem",
  color: "var(--highlight)",
  display: "flex",
  alignItems: "flex-end",
};

export function SplashArrow() {
  const [isUpHovering, setIsUpHovering] = useState(false);
  const [isDownHovering, setIsDownHovering] = useState(false);

  const handleUpArrowMouseEnter = () => {
    setIsUpHovering(true);
  };

  const handleUpArrowMouseLeave = () => {
    setIsUpHovering(false);
  };

  const handleDownArrowMouseEnter = () => {
    setIsDownHovering(true);
  };

  const handleDownArrowMouseLeave = () => {
    setIsDownHovering(false);
  };

  return (
    <SplashArrowContainer>
      <KeyboardDoubleArrowDownIcon
        style={isDownHovering ? ArrowHoverStyle : ArrowNormalStyle}
        onMouseEnter={handleDownArrowMouseEnter}
        onMouseLeave={handleDownArrowMouseLeave}
      />
    </SplashArrowContainer>
  );
}

export function NavArrows({ previousSection, nextSection }) {
  const [isUpHovering, setIsUpHovering] = useState(false);
  const [isDownHovering, setIsDownHovering] = useState(false);

  const handleUpArrowMouseEnter = () => {
    setIsUpHovering(true);
  };

  const handleUpArrowMouseLeave = () => {
    setIsUpHovering(false);
  };

  const handleDownArrowMouseEnter = () => {
    setIsDownHovering(true);
  };

  const handleDownArrowMouseLeave = () => {
    setIsDownHovering(false);
  };
  return (
    <>
      <Link href={previousSection}>
        <a>
          <KeyboardDoubleArrowUpIcon
            style={isUpHovering ? ArrowHoverStyle : ArrowNormalStyle}
            onMouseEnter={handleUpArrowMouseEnter}
            onMouseLeave={handleUpArrowMouseLeave}
          />
        </a>
      </Link>
      <Link href={nextSection}>
        <a>
          <KeyboardDoubleArrowDownIcon
            style={isDownHovering ? ArrowHoverStyle : ArrowNormalStyle}
            onMouseEnter={handleDownArrowMouseEnter}
            onMouseLeave={handleDownArrowMouseLeave}
          />
        </a>
      </Link>
    </>
  );
}
