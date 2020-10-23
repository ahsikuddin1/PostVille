import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Logo = styled.img`
  height: 136px;
  width: 286px;

  @media (min-width: 1024px) {
    height: 100px;
    width: 200px;
  }

  @media (max-width: 480px) {
    height: 60px;
    width: 120px;
  }
`;
const Ul = styled.ul`
  display: flex;
  // grid-template-columns: 20% 20% 30% 15% 15%;
  justify-content: space-between;
  align-items: center;
  // background: ;
  border: 1px solid #707070;
  color: black;
  padding: 0px 100px;
  margin-bottom: 0px;

  @media (min-width: 1024px) {
    padding: 0px 25px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    align-items: flex-start;
  }
`;
const Li = styled.li`
  list-style: none;
  font-size: 20px;
  text-align: left;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const PageFooter = styled.footer``;
function ScrollToTop({ children }) {
  const pathname = useLocation();

  useEffect(() => {
    if (pathname !== "/") window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

const Footer = () => (
  <PageFooter>
    <Ul>
      <Li>© Copyright 2020 Created by Ahsik Uddin</Li>
    </Ul>
  </PageFooter>
);

export default Footer;
