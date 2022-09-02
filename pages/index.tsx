import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import GetInTouch from "../slices/GetInTouch";
import UniteMobileApp from "../slices/UniteMobileApp";

export default function Home() {
  return (
    <Layout isHomepage>
      <Hero />
      <UniteMobileApp />
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
