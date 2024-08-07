import LearningsComponents from '@/components/Pages/LearningsComponents';
import Head from 'next/head';
import React from 'react'

const Learning = ({ dataImages, dataAllTopics }) => {
  const imagePath = `assets/imgs/favicon.png`;

  return (
    <>
      <Head>
        <title>ترتيل  | التعليم</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf-token" content="JdDvDc4LUJomFM4T7QE0hFlH9CeKOHDXMoxV3wer" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`/${imagePath}`} />
        <meta name="theme-color" content="#005d85" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content="ترتيل |التعليم" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="ترتيل |التعليم" />
        <link rel="apple-touch-icon" href={`https://tartel.vercel.app/${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="author" content="ترتيل |التعليم" />
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

        <meta property="og:site_name" content="ترتيل |التعليم" />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={`https://tarteel.org.sa/`} />
        <meta property="og:title" content="ترتيل |التعليم" />
        <meta property="og:description" content={'تعليم القرآن الكريم على الوجه الصحيح لجميع المسلمين والمسلمات من جميع أنحاء العالم حفظًا وتلاوةً عبر مراكز متخصصة وبيئات محفزة وفق معايير التميز المؤسسي في العمل الخيري.'} />
        <meta property="og:image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta itemProp="name" content="ترتيل |التعليم" />
        <meta itemProp="author" content="ترتيل |التعليم" />
        <meta itemProp="image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta itemProp="description" content={'تعليم القرآن الكريم على الوجه الصحيح لجميع المسلمين والمسلمات من جميع أنحاء العالم حفظًا وتلاوةً عبر مراكز متخصصة وبيئات محفزة وفق معايير التميز المؤسسي في العمل الخيري.'} />
        <meta name="twitter:image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content="ترتيل |التعليم" />
        <meta name="twitter:image:src" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="twitter:description" content={'تعليم القرآن الكريم على الوجه الصحيح لجميع المسلمين والمسلمات من جميع أنحاء العالم حفظًا وتلاوةً عبر مراكز متخصصة وبيئات محفزة وفق معايير التميز المؤسسي في العمل الخيري.'} />
      </Head>

      <LearningsComponents dataImages={dataImages} dataAllTopics={dataAllTopics} />
    </>
  )
}

export default Learning



export async function getStaticProps() {
  const url = 'https://api.tarteel.org.sa/api';
  const resAllTopics = await fetch(`${url}/learnings`);
  const dataAllTopics = await resAllTopics.json();


  const resImages = await fetch(`${url}/general`)
  const dataImages = await resImages.json();

  return {
    props: {

      dataImages: dataImages?.data,
      dataAllTopics: dataAllTopics?.data

    },
    revalidate: 10
  };
}