import styled from "styled-components";

export const TitleArea = styled.div`
  max-width: 100%;
  display: flex;
  /* align-items: center; */
  flex-shrink: 0;
  white-space: nowrap;

`;

export const SectionTitle = styled.h1`
  font-family: var(--font-primary);
  font-size: var(--font-title-size);
  font-weight: var(--font-title-weight);
  color: var(--highlight);
  /* font-style: italic; */
  text-transform: uppercase;
  margin-bottom: 1rem;
  -webkit-box-shadow: 8px 8px var(--box-shadow-secondary);
  -moz-box-shadow: 8px 8px var(--box-shadow-secondary);
  box-shadow: 8px 8px var(--box-shadow-secondary);
  border: 1px solid var(--secondary);
  width: max-content;
  padding: 0.5rem 1rem;
`;
