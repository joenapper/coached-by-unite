import { formLink } from "../../constants/App.constants";
import Button from "../Button";
import { HeroContent, Wrapper } from "./styles";

const Hero = () => {
  return (
    <Wrapper className="hero">
      <img src="./assets/images/hero.jpeg" alt="Unite coaching hero image" />
      <HeroContent as="div">
        <h1 className="desktop-only underline">Unite Coaching</h1>
        <span className="desktop-only">Take the next step to a better you</span>

        <a
          className="desktop-only"
          href={formLink}
          target="_blank"
          rel="noreferrer"
        >
          <Button>Go ahead</Button>
        </a>

        <a
          className="mobile-only"
          href={formLink}
          target="_blank"
          rel="noreferrer"
        >
          <Button>Personalised coaching</Button>
        </a>
      </HeroContent>
    </Wrapper>
  );
};

export default Hero;
