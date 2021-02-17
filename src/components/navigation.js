import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Navigation = ({ color , selectedColor }) => {
  const NavigationWrapper = styled.ol`
    grid-area: navigation;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background-color: ${color};
  `
  const NavItem = styled.ul`
    display: block;
    padding: 8px 16px;
    margin: 0;
    text-decoration: none;
    color: #000000;
    background-color: ${color};
    &:hover {
      background-color: ${selectedColor};
    }
    &:hover > a {
      color: #ffffff;
    }
  `
    
  return (
        <NavigationWrapper>
            <NavItem>
              <Link to="/">Blog</Link>
            </NavItem>    
            <NavItem>
              <Link to="/profile">Profile</Link>
            </NavItem>
            <NavItem>
              <Link to="/app">App</Link>
            </NavItem>
        </NavigationWrapper>
    )
}

        

export default Navigation