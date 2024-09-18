import styled from "styled-components";

export const Root = styled.button<{
  backgroundColor: string;
  size: string;
  borderRadius: string;
  fillParent: boolean;
  disabled: boolean;
}>`
    padding: ${({ size }) => size};}
    cursor:  ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};}
    background-color: ${({ backgroundColor }) => backgroundColor};}
    border-radius: 0.31rem;
    border: none;
    color: white;  
    font-size: 1rem;
    text-align: center;
    border: 2.5px solid ${({ backgroundColor }) => backgroundColor};}
     ${({ fillParent }) => fillParent && "flex: 1 1;"}
    caret-color: transparent;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: ${({ disabled }) => (disabled ? "var(--color-grey)" : "var(--color-dark-blue)")};}
        color: var(--color-white);
    }
`;
