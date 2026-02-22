import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 1.2rem 1.6rem;
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  width: 100%;
  height: 8rem;
  font-size: 1.4rem;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid var(--color-brand-500);
    outline-offset: -1px;
    border-color: var(--color-brand-500);
  }
`;

export default Textarea;
