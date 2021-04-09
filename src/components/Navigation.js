import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewLink = styled(Link)`
  text-decoration: none;

  &:active,
  &:focus,
  &:hover,
  &:link {
    text-decoration: none;
  }
`;

const NavigationBackground = styled.div`
  background-color: ${(props) => props.theme.colors.blue.normal};
`;

const Wraper = styled.div`
  overflow: hidden;

  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  padding-right: 10px;
  padding-left: 10px;
`;

const VisibleLinks = styled.ul`
  display: inline-table;
  max-width: 1140px;
  padding: 0;
  margin: 0;

  @media (max-width: 414px) {
    text-align: center;
  }
`;

const NavigationMenu = styled.li`
  display: table-cell;
  border-left: 1px solid ${(props) => props.theme.colors.blue.normal};

  @media (max-width: 414px) {
    display: inherit;
  }
`;

const Item = styled.button`
  display: block;
  padding: 20px 30px;
  background: ${(props) => props.theme.colors.blue.normal};
  font-size: 18px;
  color: ${(props) => props.theme.colors.white.normal};
  border: 0;

  &:active,
  &:focus,
  &:hover,
  &:link {
    background: ${(props) => props.theme.colors.blue.light};
    outline: none;
  }

  @media (max-width: 800px) {
    padding: 20px 27px;
  }

  @media (max-width: 768px) {
    padding: 20px 25px;
  }

  @media (max-width: 720px) {
    font-size: 15px;
  }
`;

function Navigation() {
  return (
    <NavigationBackground>
      <Wraper>
        <VisibleLinks>
          <NavigationMenu>
            <NewLink to="/">
              <Item>Home </Item>
            </NewLink>
          </NavigationMenu>
          <NavigationMenu>
            <NewLink to="/About">
              <Item>About </Item>
            </NewLink>
          </NavigationMenu>
          <NavigationMenu>
            <NewLink to="/News">
              <Item>News </Item>
            </NewLink>
          </NavigationMenu>
          <NavigationMenu>
            <NewLink to="/Service">
              <Item>Service </Item>
            </NewLink>
          </NavigationMenu>
          <NavigationMenu>
            <NewLink to="/Doctors">
              <Item>Doctors </Item>
            </NewLink>
          </NavigationMenu>
          <NavigationMenu>
            <NewLink to="/Pricing">
              <Item>Pricing </Item>
            </NewLink>
          </NavigationMenu>
          <NavigationMenu>
            <NewLink to="/Contact">
              <Item>Contact </Item>
            </NewLink>
          </NavigationMenu>
        </VisibleLinks>
      </Wraper>
    </NavigationBackground>
  );
}

export default Navigation;
