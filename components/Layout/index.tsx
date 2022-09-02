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

// TODO: define better description & keywords for SEO
Layout.defaultProps = {
  title: "Unite Coaching | Your Online Coach",
  description: "Your Online Coach....",
  keywords: "Online coach, coaching, online coach rotherham, ",
};

export default Layout;
