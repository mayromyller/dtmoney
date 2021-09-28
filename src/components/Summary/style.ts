import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`;

export const Box = styled.div`
  background: ${(props) =>
    props.color === "green" ? "var(--green)" : "var(--shape)"};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  color: ${(props) =>
    props.color === "green" ? "var(--shape)" : "var(--text-title)"};
`;

export const BoxHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxValue = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
