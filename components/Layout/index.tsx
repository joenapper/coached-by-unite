import Head from "next/head";
import Footer from "../Footer";
import Header from "../Header";
// import Footer from "./Footer";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
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
