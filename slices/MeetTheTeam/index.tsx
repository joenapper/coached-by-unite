import CoachSection from "../../components/CoachSection";
import Container from "../../components/Container";
import SubHeading from "../../components/SubHeading";

const MeetTheTeam = () => {
  return (
    <Container>
      <SubHeading>Meet the team</SubHeading>
      <CoachSection name="Coach Jack">
        <p>
          I've always been into sport but lacked confidence. I was 9 stone 6
          playing football 5 times a week with no structure to life at all.
          That’s when I started training and it's safe to say I’ve never looked
          back.
        </p>
        <br />
        <p>
          I immediately fell in love with constantly challenging myself. I
          wanted to be better every day - getting into good habits, routines and
          actually making a change in my life.
        </p>
        <br />
        <p>
          There’s more to it than just lifting weights, losing fat and looking
          good. It fires up a mentality in you that you’ll never have thought
          you had.
        </p>
      </CoachSection>
      <CoachSection reversed name="Coach Kev">
        <p>
          Coach and co-founder of Unite Coaching. My specialism is lifestyle
          coaching: 'manipulating your routine to maximise your results.'
        </p>
        <br />
        <p>
          I have worked with over 100 clients, male and female, and enjoy taking
          on any challenge but demand commitment to the process.
        </p>
        <br />
        <p>
          My experience and education from young has been science-based having
          covered the sciences at A-Level and then onto level 2 and 3 PT/gym
          instructor qualifications.
        </p>
        <br />
        <p>
          I am, currently heading into my first competitive season so currently
          looking to work with serious clients with long-term goals.
        </p>
        <br />
        <p>
          Those that really want to make a change to their life not only in the
          gym but in all avenues of life.
        </p>
        <br />
        <p>
          I have lived and experienced many different careers and lifestyles:
          student, employed, self-employed and now business owner so when it
          comes to walking the walk and finding the balance I'm sure I can help
          anyone seriously transform their lifestyle.
        </p>
      </CoachSection>
    </Container>
  );
};

export default MeetTheTeam;