import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../styles/colors';
import logo from '../SpaceX-Logo.svg';

const Header = () => {
  return (
    <HeaderOuter>
      <HeaderContainer>
        <HeaderLogo>
          <Link to="/">
            <img src={logo} alt="SpaceX Logo" />
          </Link>
        </HeaderLogo>

        <HeaderTitle>Launch Tracker</HeaderTitle>
      </HeaderContainer>
    </HeaderOuter>
  )
}

export default Header;

export const HeaderOuter = styled.header`
  width: 100%;
  height: 85px;
  background: linear-gradient(90deg, #13151A 0%, rgba(39, 43, 51, 0.79) 100%);
  border-bottom: 4px solid #e3e3e3;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 90%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
`

export const HeaderLogo = styled.div`
  width: 20%;

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
`

export const HeaderTitle = styled.h1`
  font-family: 'Inter Light', Helvetica, sans-serif;
  font-weight: 300;
  font-size: 36px;
  text-transform: uppercase;
  color: ${colors.light};
  margin: 0;
`