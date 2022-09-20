import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button";
import Container from "../../components/Container";
import SubHeading from "../../components/SubHeading";
import {
  Wrapper,
  FormGroup,
  Form,
  ButtonWrapper,
  ImageGroup,
  ImageWrapper,
} from "./styles";
import { SuccessModal, FailModal } from "../Modals";
import Loader from "../../components/Loader";
import DropDown from "../../components/DropDown";

const GetInTouch = () => {
  const form = useRef();
  const [isDisabled, setDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleClose = () => setIsModalOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setDisabled(true);
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoading(false);
          setHasError(false);
          setIsModalOpen(true);
          console.log("ok", result);
        },
        (error) => {
          setIsLoading(false);
          setHasError(true);
          setIsModalOpen(true);
          console.log("error", error);
        }
      );
    e.target.reset();
  };

  const options = [
    { value: "Jack", label: "Jack | Physique Development" },
    { value: "Kev", label: "Kev | Lifestyle / Physique" },
  ];

  return (
    <>
      {isLoading && <Loader />}
      <Container id="contact">
        <Wrapper>
          <FormGroup>
            <SubHeading>Get in touch</SubHeading>
            <Form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Your Name" required name="name" />
              <input
                type="number"
                placeholder="Your Number"
                required
                name="number"
              />
              <input
                type="text"
                placeholder="Your Email"
                required
                name="email"
              />
              <DropDown
                name="coach"
                instanceId="contact-form-select-dropdown"
                placeholder="Choose Coach..."
                options={options}
                clearable
              />
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder="Your Message"
                required
              />
              <ButtonWrapper>
                <Button disabled={isDisabled}>Send</Button>
              </ButtonWrapper>
            </Form>
          </FormGroup>

          <div>
            <ImageGroup>
              <img
                src="./assets/images/jack1.jpg"
                alt="Jack of Unite Coaching"
              />
              <img src="./assets/images/kev1.jpg" alt="Kev of Unite Coaching" />
            </ImageGroup>
            <ImageWrapper>
              <img
                src="./assets/images/unite1.jpg"
                alt="Jack and Kev of Unite Coaching in the office"
              />
            </ImageWrapper>
          </div>
        </Wrapper>
      </Container>

      {hasError ? (
        <FailModal onClose={handleClose} isModalOpen={isModalOpen} />
      ) : (
        <SuccessModal onClose={handleClose} isModalOpen={isModalOpen} />
      )}
    </>
  );
};

export default GetInTouch;
