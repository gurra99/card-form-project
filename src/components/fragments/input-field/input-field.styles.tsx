import styled from "styled-components";

export const Container = styled.input`
  padding: 0.44rem;
  font-size: 1rem;
  border: 1px solid var(--color-dark-grey);
  border-radius: 0.31rem;
  outline: none;
  width: 100%;

  &:focus {
    border-color: var(color-light-blue);
  }
`;
