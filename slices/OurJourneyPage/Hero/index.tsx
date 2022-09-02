import Container from "../../../components/Container";
import SubHeading from "../../../components/SubHeading";
import { SubHeadingWrapper, IframeWrapper } from "./styles";

const Hero = () => {
  return (
    <Container as="main">
      <SubHeadingWrapper>
        <SubHeading>Our Journey</SubHeading>
      </SubHeadingWrapper>

      <IframeWrapper>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mZdjUQpIaW0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </IframeWrapper>
    </Container>
  );
};

export default Hero;
