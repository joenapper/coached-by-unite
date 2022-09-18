import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "../../icons/Logo";
import { getDownloadLink, getOperatingSystem } from "../../utils";
import { Wrapper, NavBar, NavMenu } from "./styles";
import { HeaderProps } from "./types";

const Header = ({ isHomepage }: HeaderProps) => {
  const [navActive, setNavActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [downloadLink, setDownloadLink] = useState(null);

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

  useEffect(() => {
    const os = getOperatingSystem((global as typeof globalThis).window);
    const downloadLink = getDownloadLink(os);
    setDownloadLink(downloadLink);
  }, [downloadLink]);

  return (
    <Wrapper hasScrolled={hasScrolled} isHomepage={isHomepage}>
      <NavBar>
        <NavMenu
          className={`${navActive ? "nav-links nav-active" : "nav-links"}`}
        >
          <li onClick={() => setNavActive(false)}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {/* Our Journey Link here */}
          <li className="mobile-only" onClick={() => setNavActive(false)}>
            <a href="#contact">Contact form</a>
          </li>
          <li className="mobile-only">
            <a href={downloadLink} target="_blank" rel="noreferrer">
              Consultation form
            </a>
          </li>
        </NavMenu>
        <div className="logo">
          <a href="/">
            <Logo width={50} height={50} />
          </a>
        </div>
        <ul className="desktop-only">
          <li>
            <a href={downloadLink} target="_blank" rel="noreferrer">
              Consultation form
            </a>
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
