import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--ff-primary);
  background-color: var(--color-light-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`;

export const Header = styled.h1`
  width: 100%;
  text-align: center;
  letter-spacing: 0.05rem;
  word-spacing: 0.2rem;
  margin-bottom: 3%;
  margin-top: max(3%, 1.875rem);
`;
