import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { formLink, sponsorLink } from "../constants/App.constants";
import GetInTouch from "../slices/GetInTouch";
import MeetTheTeam from "../slices/MeetTheTeam";
import OnlineCoaching from "../slices/OnlineCoaching";

export default function Home() {
  return (
    <Layout isHomepage>
      <Hero />
      <OnlineCoaching />
      <CallToAction
        title="Make the change"
        text="Take your first step to better health by downloading our free app 
        and filling out our consultation form"
      >
        <a
          href={formLink}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Go to form
        </a>
      </CallToAction>
      <MeetTheTeam />
      <CallToAction
        title="Elite supps"
        text="Use code UNITE10 for 10% off your order!"
      >
        <a
          href={sponsorLink}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Try it now
        </a>
      </CallToAction>
      <GetInTouch />
    </Layout>
  );
}
