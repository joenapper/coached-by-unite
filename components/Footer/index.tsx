import Instagram from "../../icons/Instagram";
import Calendar from "../../icons/Calendar";
import Discord from "../../icons/Discord";
import Container from "../Container";
import { Wrapper, SocialLinks, Copyright } from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <SocialLinks>
          <li>
            <a
              href="https://www.instagram.com/kev_unite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              kev_unite
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kdtrains/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
              kdtrains
            </a>
          </li>
          <li>
            <a
              href="https://calendly.com/kev_unite/30min?month=2023-07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar />
              Book a call
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/rpXEZae8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord />
              Join the community
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
          | Copyright 2022 - 2023
        </Copyright>
      </Container>
    </Wrapper>
  );
};

export default Footer;
