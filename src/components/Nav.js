import React from "react";
import styled from "styled-components";

import logo from "../img/Nav/brain.png";
import mobile from "../img/Nav/mobile.svg";
import mail from "../img/Nav/envelope-regular.svg";
import clock from "../img/Nav/clock.svg";

//!elementy wspólne

const Wraper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
`;

const Img = styled.img`
  display: inline-block;
  vertical-align: middle;
`;

const H1 = styled.h1`
  display: inline-block;
  font-weight: 600;
  line-height: 1.2;
  vertical-align: baseline;
`;

const H6 = styled.h6`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
`;

//!stylowanie komponentu

const NavWrapper = styled(Wraper)`
  padding: 40px 0px 40px;
  margin-bottom: 30px;
`;

const NavbarBrand = styled(H1)`
margin: 0;
  color: ${(props) => props.theme.colors.blue.dark};
`;

const Logo = styled(Img)`
  margin-top: -7px;
  margin-right: 1vw;
  height: 60px;
`;

const Col1 = styled.div`
  position: absolute;
  width: 100%;
  flex: 0 0 16.666667%;
  max-width: 30%;
`;

const Col2 = styled.div`
  position: relative;
  margin-left: auto;
  justify-content: center;
  display: flex;
  max-width: 70%;
  width: 100%;
`;

const Item = styled.div`
  margin-right: 60px;
`;

const ItemIcon = styled.div`
  display: inline-block;
  position: absolute;
  margin-right: 20px;
  font-size: 40px;
  line-height: 20px;
  font-weight: 400;
`;

const Icon = styled(Img)`
  position: relative;
  filter: invert(0.5);
  height: 45px;
`;

const Article = styled(H6)`
  margin-left: 4vw;
`;

const Text = styled.p`
  display: inline-block;
  position: absolute;
  margin-left: 4vw;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

function Nav() {
  return (
  
      <NavWrapper>

        <Col1>
          <Logo src={logo} />
          <NavbarBrand>NeuroClinic</NavbarBrand>
        </Col1>

        <Col2>
          <Item>
            <ItemIcon>
              <Icon src={mobile} />
            </ItemIcon>
            <Article>+7809346657</Article>
            <Text>Call Free</Text>
          </Item>

          <Item>
            <ItemIcon>
              <Icon src={mail} />
            </ItemIcon>
            <Article>info@example.com</Article>
            <Text>Email Us</Text>
          </Item>

          <Item>
            <ItemIcon>
              <Icon src={clock} />
            </ItemIcon>
            <Article>Mon-Sat 9:00-12.00</Article>
            <Text>Sunday Closed</Text>
          </Item>

        </Col2>
      </NavWrapper>
  );
}

export default Nav;
