import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-200)"};
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  font-weight: 500;
  transition: all 0.2s ease;

  &:focus {
    outline: 2px solid var(--color-brand-500);
    outline-offset: -1px;
    border-color: var(--color-brand-500);
  }
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
