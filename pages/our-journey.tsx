import Layout from "../components/Layout";
import Hero from "../slices/OurJourneyPage/Hero";
import MeetTheTeam from "../slices/MeetTheTeam";
import CallToAction from "../components/CallToAction";
import GetInTouch from "../slices/GetInTouch";

export default function OurJourney() {
  return (
    <Layout>
      <Hero />

      <MeetTheTeam />

      <CallToAction
        title="Make the change"
        text="Take your first step to better health by filling out our free
          consultation form"
      >
        <a
          href="https://i7v1jqli83l.typeform.com/to/WKrk6YhX?typeform-source=www.liinks.co"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Go to form
        </a>
      </CallToAction>
      <GetInTouch />
    </Layout>
  );
}
