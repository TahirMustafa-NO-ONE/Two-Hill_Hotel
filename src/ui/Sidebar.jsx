import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import SocialLinks from "./SocialLinks";

const StyledSidebar = styled.aside`
  background-color: #1a1208;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-200);
  width: 24rem;

  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
      {/* <SocialLinks /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
