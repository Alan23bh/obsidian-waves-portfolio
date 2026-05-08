import Head from "next/head";
import Script from "next/script";
//= Scripts
import generateStylesheetObject from "@/common/generateStylesheetsObject";
//= Common Components
// import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import Liquid from "@/components/Home/Liquid";
import Navbar from "@/components/Home/Navbar";
import MainBox from "@/components/Home/MainBox";
import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Referrals";
// import Blog from "@/components/Home/Blog";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "Alan Hernandez - Frontend developer",
  description:
    "Webmaster Alan Hernandez bringing the thunder with HTML, CSS, JS and React",
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      "/assets/css/plugins.css",
      "/assets/css/style.css",
    ]),
  },
};

export default function Home() {
  return (
    <body className="liquid">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/assets/imgs/og-image.jpg" />
        <meta
          property="og:url"
          content="https://obsidian-waves-portfolio.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/assets/imgs/og-image.jpg" />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
      </Head>
      {/*<LoadingScreen />*/}
      <Cursor />
      <ProgressScroll />
      <Liquid />
      <Navbar />
      <main>
        <MainBox />
        <Portfolio />
        <Testimonials />
        {/*<Blog />*/}
        <Contact />
      </main>
      <Footer />

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/plugins.js" strategy="lazyOnload" />
      <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
      <Script src="https://kit.fontawesome.com/d8d8f76b04.js" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  );
}
