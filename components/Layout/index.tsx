import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutProps } from "./types";

const Layout = ({
  title,
  keywords,
  description,
  children,
  isHomepage = false,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header isHomepage={isHomepage} />
      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Unite Coaching | Your Online Coach",
  description:
    "We help every day people take the next step in their fitness journey.",
  keywords: "Online coach, coaching, online coach rotherham, ",
};

export default Layout;
