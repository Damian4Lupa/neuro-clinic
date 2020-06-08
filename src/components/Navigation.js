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

const Navigation = styled.nav`
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.blue.normal};
`;

const Wraper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  padding-right: 10px;
  padding-left: 10px;
`;

const VisibleLinks = styled.ul`
  display: inline-table;
  padding: 0;
  margin: 0;
`;

const NavigationMenu = styled.li`
  display: table-cell;
  border-left: 1px solid ${(props) => props.theme.colors.blue.normal};
`;

const Item = styled.button`
  display: block;
  padding: 20px 30px;
  background: ${(props) => props.theme.colors.blue.normal};
  font-size: 18px;
  color: ${(props) => props.theme.colors.white.normal};
  /* text-decoration: none;
  list-style: none; */
  border: 0;

  &:active,
  &:focus,
  &:hover,
  &:link {
    background: ${(props) => props.theme.colors.blue.light};
    /* text-decoration: none;
    list-style: none; */
    outline: none;
  }
`;

function Navigation2() {
  return (
    <Navigation>
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
    </Navigation>
  );
}

export default Navigation2;