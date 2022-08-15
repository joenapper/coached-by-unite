import { Wrapper, ImageGroup, TextGroup } from "./styles";
import { CoachSectionProps } from "./types";

const CoachSection = ({ reversed, name, children }: CoachSectionProps) => {
  return (
    <Wrapper reversed={reversed}>
      <ImageGroup>
        <img src="./assets/images/jack1.png" alt="" />
        <img src="./assets/images/jack2.png" alt="" />
      </ImageGroup>
      <TextGroup>
        <h3>
          <span>{name}</span>
        </h3>
        {children}
      </TextGroup>
    </Wrapper>
  );
};

export default CoachSection;
