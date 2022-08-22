import Container from "../../components/Container";
import SubHeading from "../../components/SubHeading";
import AppStore from "../../icons/AppStore";
import GooglePlay from "../../icons/GooglePlay";
import { ImageWrapper, SubSubHeading, AppWrapper } from "./styles";

const UniteMobileApp = () => {
  return (
    <Container>
      <SubHeading>Unite mobile app</SubHeading>
      <ImageWrapper>
        <img src="./assets/images/app-preview.png" alt="Unite coaching app" />
      </ImageWrapper>
      <SubSubHeading>Track your progress – on the go</SubSubHeading>
      <p>
        The Unite Coaching mobile app helps you manage your journey from
        anywhere, so you can stay focused on what matters. Access diet plans,
        track your metrics and check in – all from your phone or tablet.
      </p>
      <AppWrapper>
        <a
          href="https://apps.apple.com/gb/app/unite-coaching/id1628823840"
          target="_blank"
        >
          <AppStore />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.cofox.kahunas.UNITECOACHING&gl=GB"
          target="_blank"
        >
          <GooglePlay />
        </a>
      </AppWrapper>
    </Container>
  );
};

export default UniteMobileApp;
