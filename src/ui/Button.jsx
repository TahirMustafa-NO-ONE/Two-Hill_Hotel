import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #1a1208;
    background-color: var(--color-brand-500);

    &:hover {
      background-color: var(--color-brand-600);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: transparent;
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-100);
      border-color: var(--color-grey-300);
    }
  `,
  danger: css`
    color: #ffffff;
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

export const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  font-family: "Inter", sans-serif;
  font-weight: 500;
  transition: all 0.2s ease;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  &:active {
    transform: translateY(0);
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
