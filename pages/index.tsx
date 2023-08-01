import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { formLink } from "../constants/App.constants";
import GetInTouch from "../slices/GetInTouch";
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
      <GetInTouch />
    </Layout>
  );
}
