import Container from "../../components/Container";
import SubHeading from "../../components/SubHeading";
import { appStore, playStore } from "../../config";
import AppStore from "../../icons/AppStore";
import GooglePlay from "../../icons/GooglePlay";
import {
  FlexContainer,
  ImageWrapper,
  SubSubHeading,
  AppWrapper,
} from "./styles";

const UniteMobileApp = () => {
  return (
    <Container>
      <SubHeading>Unite mobile app</SubHeading>
      <FlexContainer>
        <ImageWrapper>
          <img src="./assets/images/app-preview.jpg" alt="Unite coaching app" />
        </ImageWrapper>
        <div>
          <SubSubHeading>Track your progress – on the go</SubSubHeading>
          <p>
            The Unite Coaching mobile app helps you manage your journey from
            anywhere, so you can stay focused on what matters. Access diet
            plans, track your metrics and check in – all from your phone or
            tablet.
          </p>
          <AppWrapper>
            <a href={appStore} target="_blank" rel="noreferrer">
              <AppStore />
            </a>
            <a href={playStore} target="_blank" rel="noreferrer">
              <GooglePlay />
            </a>
          </AppWrapper>
        </div>
      </FlexContainer>
    </Container>
  );
};

export default UniteMobileApp;
