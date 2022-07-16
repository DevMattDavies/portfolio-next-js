import styled from "styled-components";
import Image from "next/future/image";

import HTMLIcon from "../public/html.png";
import CSSIcon from "../public/css.png";
import JSIcon from "../public/js.png";
import TSIcon from "../public/typescript.png";
import ReactIcon from "../public/react.png";
import NextIcon from "../public/next.png";
import APIIcon from "../public/api.png";
import NodeIcon from "../public/node.png";
import SQLIcon from "../public/sql.png";
import ExpressIcon from "../public/expressjs2.png";
import VSCodeIcon from "../public/vscode.png";
import GithubIcon from "../public/github.png";

const TechIconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 2rem; */
`;

const TechIconRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechIconStyles = {
  height: "50px",
  width: "auto",
  filter:
    "invert(71%) sepia(30%) saturate(475%) hue-rotate(125deg) brightness(88%) contrast(84%)",
  margin: "1.5rem",
};

function TechIcons() {
  return (
    <TechIconContainer>
      <TechIconRow>
        <Image src={HTMLIcon} style={TechIconStyles} />
        <Image src={CSSIcon} style={TechIconStyles} />
        <Image src={JSIcon} style={TechIconStyles} />
        <Image src={TSIcon} style={TechIconStyles} />
      </TechIconRow>
      <TechIconRow>
        <Image src={ReactIcon} style={TechIconStyles} />
        <Image src={NextIcon} style={TechIconStyles} />
        <Image src={APIIcon} style={TechIconStyles} />
      </TechIconRow>
      <TechIconRow>
        <Image src={NodeIcon} style={TechIconStyles} />
        <Image src={SQLIcon} style={TechIconStyles} />
        <Image src={ExpressIcon} style={TechIconStyles} />
      </TechIconRow>
      <TechIconRow>
        <Image src={VSCodeIcon} style={TechIconStyles} />
        <Image src={GithubIcon} style={TechIconStyles} />
      </TechIconRow>
    </TechIconContainer>
  );
}

export default TechIcons;
