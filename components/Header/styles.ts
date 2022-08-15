import styled from "styled-components";
import { WrapperProps } from "./types";

export const Wrapper = styled.header<WrapperProps>`
  width: 100%;
  padding: 1rem 10%;
  position: fixed;
  z-index: 2;
  transition: background 0.3s ease-in-out;
  background: ${({ hasScrolled }) => (hasScrolled ? "#000000" : "transparent")};

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    a::after {
      display: none;
    }
  }

  .burger {
    display: none;

    div {
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin: 5px;
      border-radius: 4px;
      transition: all 0.75s ease;

      &:first-child {
        background: #dbbd44;
      }

      &:last-child {
        background: #dbbd44;
      }
    }
  }

  .scrolled {
    background-color: #010101;
    opacity: 0.9;
    color: #fff;
    transition: 0.5s ease;
  }

  .burger-toggle .top-line {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .burger-toggle .mid-line {
    opacity: 0;
  }

  .burger-toggle .btm-line {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media (max-width: 768px) {
    .logo {
      position: relative;
      z-index: 0;
    }

    .burger {
      display: block;
      cursor: pointer;
      z-index: 1;
    }

    .nav-active {
      transform: translateX(0);
    }
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  text-transform: uppercase;
  color: #fff;
  position: relative;

  a::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: #dbbd44;
    transition: width 0.4s;
  }

  a:hover::after {
    width: 100%;
    transition: 0.4s;
  }

  @media (max-width: 768px) {
    position: static;

    a::after {
      display: none;
    }
  }
`;

export const NavMenu = styled.ul`
  &.nav-links {
    display: flex;
    justify-content: space-around;

    li {
      padding-right: 2rem;
    }
  }

  @media (max-width: 768px) {
    &.nav-links {
      position: absolute;
      padding: 14vh 0 16vh 0;
      top: 0;
      right: 0;
      height: 100vh;
      background-color: #010101;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.35s ease-in;
      overflow-x: hidden;
      z-index: 1;

      li {
        padding: 0;
        opacity: 0;
      }
    }

    &.nav-links::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0.5rem;
      height: 100%;
      background-color: #dbbd44;
    }

    &.nav-active {
      transform: translateX(0);
    }
  }
`;
