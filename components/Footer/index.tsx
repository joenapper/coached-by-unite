import Container from "../Container";
import { Wrapper, SocialLinks, Copyright } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <SocialLinks>
          <li>
            <a
              href="https://www.instagram.com/jackparkin_unite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Refactor with icon */}
              <img src="./assets/images/instagram.png" alt="Instagram" />
              jackparkin_unite
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kev_unite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Refactor with icon */}
              <img src="./assets/images/instagram.png" alt="Instagram" />
              kev_unite
            </a>
          </li>
        </SocialLinks>

        <Copyright>
          Designed and developed by{" "}
          <a
            href="https://nappernetwork.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            NapperNetwork
          </a>{" "}
          | Copyright 2022
        </Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
