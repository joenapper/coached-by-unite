import Button from "../Button";
import { HeroContent, Wrapper } from "./styles";

const Hero = () => {
  return (
    <Wrapper className="hero">
      <video
        playsInline
        disablePictureInPicture
        autoPlay
        loop
        muted
        poster="./assets/video/unite-video-still.jpg"
      >
        <source src="./assets/video/unite-promo-video.mp4" type="video/mp4" />
      </video>
      <HeroContent as="div">
        <h1 className="desktop-only underline">Unite Coaching</h1>
        <span className="desktop-only">Take the next step to a better you</span>

        <a
          className="desktop-only"
          href="https://i7v1jqli83l.typeform.com/to/WKrk6YhX?typeform-source=www.liinks.co"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Go ahead</Button>
        </a>

        <a
          className="mobile-only"
          href="https://i7v1jqli83l.typeform.com/to/WKrk6YhX?typeform-source=www.liinks.co"
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
