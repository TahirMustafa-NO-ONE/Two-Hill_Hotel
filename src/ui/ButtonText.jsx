import styled from 'styled-components';

const ButtonText = styled.button`
  color: var(--color-brand-500);
  font-weight: 500;
  text-align: center;
  transition: all 0.2s ease;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-600);
  }
`;

export default ButtonText;
