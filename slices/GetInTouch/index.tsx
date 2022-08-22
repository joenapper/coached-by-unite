import Button from "../../components/Button";
import Container from "../../components/Container";
import SubHeading from "../../components/SubHeading";
import { Wrapper, FormGroup, Form, ButtonWrapper, ImageGroup } from "./styles";

const GetInTouch = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Container>
      <Wrapper>
        <FormGroup>
          <SubHeading>Get in touch</SubHeading>
          <Form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="number" placeholder="Your Number" required />
            <input type="text" placeholder="Your Email" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
            />
            <ButtonWrapper>
              <Button>Send</Button>
            </ButtonWrapper>
          </Form>
        </FormGroup>

        <ImageGroup>
          <img src="./assets/images/jack1.png" alt="" />
          <img src="./assets/images/jack2.png" alt="" />
        </ImageGroup>
      </Wrapper>
    </Container>
  );
};

export default GetInTouch;
