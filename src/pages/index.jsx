import Head from "next/head";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import WhoWeAre from "@/components/Home/WhoWeAre";
import OurGoals from "@/components/Home/OurGoals";
import OurNews from "@/components/Home/OurNews";
import Trainings from "@/components/Home/Trainings";

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

export default function Home({ dataNews, dataTrainings }) {
  const combinedStyles = {
    ...Effra.style,
  };

  return (
    <>
      <Head>
        <title>ترتيل | لتعليم القرآن الكريم</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={combinedStyles} dir="rtl">
        <Navbar />
        <Hero />
        <WhoWeAre />
        <OurGoals />
        <OurNews dataNews={dataNews} />
        <Trainings dataTrainings={dataTrainings} />
      </main>
    </>
  );
}

// https://api.tarteel.org.sa/api/news

export async function getStaticProps() {

  const resNews = await fetch('https://api.tarteel.org.sa/api/news')
  const dataNews = await resNews.json();



  const resTrainings = await fetch('https://api.tarteel.org.sa/api/home-page')
  const dataTrainings = await resTrainings.json();


  return {
    props: {
      dataNews: dataNews?.data,
      dataTrainings: dataTrainings?.data?.counter?.courses

    },
    revalidate: 10
  };
}