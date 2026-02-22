import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: #a89070;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1.2rem 1.6rem;
    transition: all 0.2s ease;
    border-radius: var(--border-radius-sm);
    border-left: 3px solid transparent;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-500);
    background-color: rgba(201, 169, 110, 0.1);
    border-left: 3px solid var(--color-brand-500);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: #a89070;
    transition: all 0.2s ease;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-500);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
