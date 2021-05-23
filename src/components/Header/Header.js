import React from "react";
import styled from "styled-components/macro";

import { BREAKPOINTS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Filler />
        <MobileButtons>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </MobileButtons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MobileButtons = styled.nav`
  display: none;

  @media ${BREAKPOINTS.tabletMax} {
    display: flex;
    margin-left: auto;
    gap: 2rem;
  }

  @media ${BREAKPOINTS.phoneMax} {
    gap: 1rem;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${BREAKPOINTS.tabletMax} {
    align-items: center;
    padding: 16px 24px;
  }

  @media ${BREAKPOINTS.phoneMax} {
    padding: 14px 18px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.25rem, 7.75vw - 4rem, 3rem);
  margin: 0px 48px;

  @media ${BREAKPOINTS.tabletMax} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${BREAKPOINTS.tabletMax} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${BREAKPOINTS.tabletMax} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
