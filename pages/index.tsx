import { useEffect, useState } from "react";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import GetInTouch from "../slices/GetInTouch";
import UniteMobileApp from "../slices/UniteMobileApp";
import { getOperatingSystem, getDownloadLink } from "../utils";

export default function Home() {
  const [downloadLink, setDownloadLink] = useState(null);

  useEffect(() => {
    const os = getOperatingSystem((global as typeof globalThis).window);
    const downloadLink = getDownloadLink(os);
    setDownloadLink(downloadLink);
  }, [downloadLink]);

  return (
    <Layout isHomepage>
      <Hero />
      <UniteMobileApp />
      <CallToAction
        title="Make the change"
        text="Take your first step to better health by downloading our free app 
        and filling out our consultation form"
      >
        <a
          href={downloadLink}
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Download the app
        </a>
      </CallToAction>
      <GetInTouch />
    </Layout>
  );
}
