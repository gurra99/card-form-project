import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 0.62rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 21.9rem;

  @media (min-width: 600px) {
    width: 31.1rem;
  }
`;

export const Header = styled.h1`
  font-size: var(--fs-600);
  width: 100%;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.05rem;
  word-spacing: 0.2rem;
  margin-bottom: 1.5rem;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FromGroupDetail = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Item = styled.label`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-basis: 30%;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const LabelExpirationDate = styled.label`
  display: flex;
  align-item: flex-start;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
`;

export const SubmitButtton = styled.button`
  background-color: var(--color-blue);
  color: white;
  border: none;
  text-align: center;
  padding: 0.75rem;
  border-radius: 0.31rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-dark-blue);
  }
`;
