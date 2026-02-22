import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-200);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  padding: 1.2rem 1.6rem;
  font-size: 1.4rem;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid var(--color-brand-500);
    outline-offset: -1px;
    border-color: var(--color-brand-500);
  }
`;

export default Input;
