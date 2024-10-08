import Head from "next/head";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import WhoWeAre from "@/components/Home/WhoWeAre";
import OurGoals from "@/components/Home/OurGoals";
import OurNews from "@/components/Home/OurNews";
import Trainings from "@/components/Home/Trainings";
import Partners from "@/components/Home/Partners";
import Web from "@/components/Home/Web";
// import Contacts from "@/components/Home/Contacts";
import Footer from "@/components/Footer";
import Contacts from "@/components/Home/Contacts";

const Effra = localFont({
  src: [
    {
      path: "../../public/fonts/Effra_Md.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Effra_Heavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Effra_Rg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Effra-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});




export default function Home({ dataNews, dataGoals, goals_desc, dataTrainings, partners, dataImages }) {
  const combinedStyles = {
    ...Effra.style,
  };

  const imagePath = `assets/imgs/favicon.png`;

  return (
    <>
      <Head>
        <title>ترتيل | لتعليم القرآن الكريم</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf-token" content="JdDvDc4LUJomFM4T7QE0hFlH9CeKOHDXMoxV3wer" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`/${imagePath}`} />
        <meta name="theme-color" content="#005d85" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content="ترتيل | لتعليم القرآن الكريم" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="ترتيل | لتعليم القرآن الكريم" />
        <link rel="apple-touch-icon" href={`https://tartel.vercel.app/${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="author" content="ترتيل | لتعليم القرآن الكريم" />
        <meta name="description" content={'تعليم القرآن الكريم على الوجه الصحيح لجميع المسلمين والمسلمات من جميع أنحاء العالم حفظًا وتلاوةً عبر مراكز متخصصة وبيئات محفزة وفق معايير التميز المؤسسي في العمل الخيري.'} />
        <link rel="canonical" href={`https://tarteel.org.sa/`} />
        <meta name="msapplication-TileColor" content="#005d85" />
        <meta name="msapplication-TileImage" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="ترتيل | لتعليم القرآن الكريم" />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={`https://tarteel.org.sa/`} />
        <meta property="og:title" content="ترتيل | لتعليم القرآن الكريم" />
        <meta property="og:description" content={'تعليم القرآن الكريم على الوجه الصحيح لجميع المسلمين والمسلمات من جميع أنحاء العالم حفظًا وتلاوةً عبر مراكز متخصصة وبيئات محفزة وفق معايير التميز المؤسسي في العمل الخيري.'} />
        <meta property="og:image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta itemProp="name" content="ترتيل | لتعليم القرآن الكريم" />
        <meta itemProp="author" content="ترتيل | لتعليم القرآن الكريم" />
        <meta itemProp="image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta itemProp="description" content={'تعليم القرآن الكريم على الوجه الصحيح لجميع المسلمين والمسلمات من جميع أنحاء العالم حفظًا وتلاوةً عبر مراكز متخصصة وبيئات محفزة وفق معايير التميز المؤسسي في العمل الخيري.'} />
        <meta name="twitter:image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content="ترتيل | لتعليم القرآن الكريم" />
        <meta name="twitter:image:src" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="twitter:description" content={'تعليم القرآن الكريم على الوجه الصحيح لجميع المسلمين والمسلمات من جميع أنحاء العالم حفظًا وتلاوةً عبر مراكز متخصصة وبيئات محفزة وفق معايير التميز المؤسسي في العمل الخيري.'} />
      </Head>


      <main style={combinedStyles} dir="rtl">
        <Navbar dataImages={dataImages} />
        <Hero hero_imageData={dataImages} />
        <WhoWeAre dataImages={dataImages} who_we_are={dataImages?.images?.who_we_are} our_messages={dataImages?.images?.our_messages}
        />
        <OurGoals dataGoals={dataGoals} goals_desc={goals_desc} />
        <OurNews dataNews={dataNews} />

        <Trainings dataTrainings={dataTrainings} />
        <Partners partners={partners} />
        <Web electronic_readingData={dataImages} />
        <Contacts dataImages={dataImages} />
        <Footer dataImages={dataImages} />
      </main>

    </>
  );
}

export async function getStaticProps() {
  const url = 'https://api.tarteel.org.sa/api';

  const resNews = await fetch(`${url}/news`);
  const dataNews = await resNews.json();

  const resHomePage = await fetch(`${url}/home-page`)
  const dataHomePage = await resHomePage.json();

  const resTrainings = await fetch(`${url}/trainings`)
  const dataTrainings = await resTrainings.json();

  const resImages = await fetch(`${url}/general`)
  const dataImages = await resImages.json();

  return {
    props: {
      dataNews: dataNews?.data,

      dataGoals: dataHomePage?.data?.goals,
      goals_desc: dataHomePage?.data?.goals_desc,
      partners: dataHomePage?.data?.partners,
      dataTrainings: dataTrainings?.data,
      dataImages: dataImages?.data

    },
    revalidate: 10
  };
}