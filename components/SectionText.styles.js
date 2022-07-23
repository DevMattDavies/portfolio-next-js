import styled from "styled-components";

export const SectionText = styled.div`
  font-family: var(--font-primary);
  font-size: var(--font-text-size);
  font-weight: var(--font-text-weight);
  color: var(--highlight);
  text-align: justify;
  width: 100%;
  /* -webkit-box-shadow: 8px 8px var(--box-shadow-secondary);
  -moz-box-shadow: 8px 8px var(--box-shadow-secondary);
  box-shadow: 8px 8px var(--box-shadow-secondary); */
  -webkit-box-shadow: 0px 20px 0px -10px var(--primary),
    0px -20px 0px -10px #ffffff, 20px 0px 0px -10px #ffffff,
    -20px 0px 0px -10px #ffffff, 0px 0px 0px 10px #ff0000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -15px 25px 0px -10px var(--primary),
    20px -20px 0px -10px var(--primary), 20px -20px -0px -10px var(--primary),
    -20px 20px 0px -10px var(--primary), 0px 0px 0px 10px var(--secondary),
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  /* border: 1px solid var(--secondary); */
  padding: 1.5rem 2rem;
`;
