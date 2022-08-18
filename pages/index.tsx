import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import GetInTouch from "../slices/GetInTouch";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CallToAction
        title="Make the change"
        text="Take your first step to better health by filling out our free
          consultation form"
      >
        <a href="/consultation-form.html" className="underline">
          Go to form
        </a>
      </CallToAction>
      <GetInTouch />
    </Layout>
  );
}
