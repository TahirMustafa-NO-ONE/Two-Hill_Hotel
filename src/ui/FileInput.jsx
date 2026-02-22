import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-md);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 1rem 1.6rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-md);
    border: 1px solid var(--color-brand-500);
    color: var(--color-brand-500);
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: var(--color-brand-500);
      color: #1a1208;
    }
  }
`;

export default FileInput;
