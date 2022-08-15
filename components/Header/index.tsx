import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../../icons/Logo";
import { Wrapper, NavBar, NavMenu } from "./styles";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // revisit to refactor
  useEffect(() => {
    const navLinks = document.querySelectorAll(
      ".nav-links li"
    ) as NodeListOf<HTMLElement>;

    function linkSlide() {
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.4s ease forwards ${
            index / 4 + 0.3
          }s`;
        }
      });
    }

    linkSlide();
  }, [navActive]);

  useEffect(() => {
    const addBackground = () => setHasScrolled(window.scrollY > 100);
    window.addEventListener("scroll", addBackground);
    return () => window.removeEventListener("scroll", addBackground);
  }, []);

  return (
    <Wrapper hasScrolled={hasScrolled}>
      <NavBar>
        <NavMenu
          className={`${navActive ? "nav-links nav-active" : "nav-links"}`}
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/our-journey">
              <a>Our journey</a>
            </Link>
          </li>
          <li className="mobile-only">
            <a href="#contact">Contact form</a>
          </li>
          <li className="mobile-only">
            <a href="/consultation-form.html">Consultation form</a>
          </li>
        </NavMenu>
        <div className="logo">
          <a href="/">
            <Logo width={50} height={50} />
          </a>
        </div>
        <ul className="desktop-only">
          <li>
            <Link href={"/"}>
              <a>Consultation form</a>
            </Link>
          </li>
        </ul>
        <div
          className={`${navActive ? "burger burger-toggle" : "burger"}`}
          onClick={() => setNavActive(!navActive)}
        >
          <div className="top-line"></div>
          <div className="mid-line"></div>
          <div className="btm-line"></div>
        </div>
      </NavBar>
    </Wrapper>
  );
};

export default Header;
