import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  padding-bottom: 2.4rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid var(--color-brand-700);
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo.png" : "/logo.png";

  return (
    <StyledLogo>
      <Img src={src} alt="The Hill Hotel logo" />
    </StyledLogo>
  );
}

export default Logo;
