import Container from "../../components/Container";
import SubHeading from "../../components/SubHeading";
import {
  OnlineCoachingWrapper,
  FlexContainer,
  VideoWrapper,
  Detail,
  Video,
} from "./styles";

const OnlineCoaching = () => {
  return (
    <Container>
      <OnlineCoachingWrapper>
        <SubHeading>What is online coaching?</SubHeading>
        <FlexContainer>
          <VideoWrapper>
            <Video
              playsInline
              disablePictureInPicture
              loop
              controls
              poster="./assets/video/unite-video-still.png"
            >
              <source
                src="./assets/video/unite-promo-video.mp4"
                type="video/mp4"
              />
            </Video>
          </VideoWrapper>
          <div>
            <Detail>💪 Result-Focused Training and Cardio Program</Detail>
            <Detail>🏋️ Exercise Video Demonstrations &amp; Analysis</Detail>
            <Detail>🥙 Personalised Results-Focused Nutrition Program</Detail>
            <Detail>💊 Custom Results-Focused Supplement Protocol</Detail>
            <Detail>🖥️ Weekly Video Response Check Ins</Detail>
            <Detail>🧠 1:1 Accountability &amp; Educational Calls</Detail>
            <Detail>📲 24/7 Support via WhatsApp</Detail>
            <Detail>⏰ Fast Undeniable Results</Detail>
            <Detail>🔥 Guaranteed Results Or Your Money Back!</Detail>
          </div>
        </FlexContainer>
      </OnlineCoachingWrapper>
    </Container>
  );
};

export default OnlineCoaching;
