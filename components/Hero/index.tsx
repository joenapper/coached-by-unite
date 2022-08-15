import Button from "../Button";
import { HeroContent, Wrapper } from "./styles";

const Hero = () => {
  return (
    <Wrapper className="hero">
      <video autoPlay loop muted poster="./assets/video/video-still.jpg">
        <source src="./assets/video/jp-video.mp4" type="video/mp4" />
      </video>
      <HeroContent as="div">
        <h1 className="desktop-only underline">Unite Coaching</h1>
        <span className="desktop-only">Take the next step to a better you</span>

        {/* revisit to remove div */}
        <div className="desktop-only">
          <Button>Go ahead</Button>
        </div>

        {/* revisit */}
        <div className="mobile-only">
          <Button>Coaching</Button>
        </div>
      </HeroContent>
    </Wrapper>
  );
};

export default Hero;
