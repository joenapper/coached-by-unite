import Container from "../../components/Container";
import SubHeading from "../../components/SubHeading";
import { MeetTheTeamWrapper, Image, Title, Name } from "./styles";

const MeetTheTeam = () => {
  return (
    <Container>
      <SubHeading>Meet the team</SubHeading>
      <MeetTheTeamWrapper>
        <div>
          <Image src="./assets/images/kev2.jpg" alt="" />
          <Title>Head Coach</Title>
          <Name>Kevin ‘Kev’ Choto</Name>
        </div>
        <div>
          <Image src="./assets/images/kimi2.jpg" alt="" />
          <Title>Male Transformation Coach</Title>
          <Name>Keamhetsi “Kimi” Dube</Name>
        </div>
      </MeetTheTeamWrapper>
    </Container>
  );
};

export default MeetTheTeam;
