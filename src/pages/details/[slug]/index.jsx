import DetailsComponents from '@/components/Pages/DetailsComponents'
import Head from 'next/head'
import React from 'react'

const Details = ({ dataImages, dataDetailsData }) => {
  const mainTitle = dataDetailsData.title;
  const mainFullDesc = dataDetailsData.full_desc;
  const imagePath = `assets/imgs/favicon.png`;

  return (
    <>
      <Head>
        <title>ترتيل | {mainTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf-token" content="JdDvDc4LUJomFM4T7QE0hFlH9CeKOHDXMoxV3wer" />
        <meta name="title" content="" />
        <link rel="icon" type="image/png" href={`/${imagePath}`} />
        <meta name="theme-color" content="#005d85" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={mainTitle} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={mainTitle} />
        <link rel="apple-touch-icon" href={`https://tartel.vercel.app/${imagePath}`} />
        <link rel="apple-touch-startup-image" href={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="author" content={mainTitle} />
        <meta name="description" content={mainFullDesc} />
        <link rel="canonical" href={`https://tarteel.org.sa/`} />
        <meta name="msapplication-TileColor" content="#005d85" />
        <meta name="msapplication-TileImage" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />

        <meta property="og:site_name" content={mainTitle} />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="ar" />
        <meta property="og:url" content={`https://tarteel.org.sa/`} />
        <meta property="og:title" content={mainTitle} />
        <meta property="og:description" content={mainFullDesc} />
        <meta property="og:image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta itemProp="name" content={mainTitle} />
        <meta itemProp="author" content={mainTitle} />
        <meta itemProp="image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta itemProp="description" content={mainFullDesc} />
        <meta name="twitter:image" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={mainTitle} />
        <meta name="twitter:image:src" content={`https://tartel.vercel.app/${imagePath}`} />
        <meta name="twitter:description" content={mainFullDesc} />
      </Head>


      <DetailsComponents dataImages={dataImages} dataDetailsData={dataDetailsData} />
    </>
  )
}

export default Details


export async function getStaticProps(context) {
  const { slug } = context.params;
  const url = 'https://api.tarteel.org.sa/api';

  const resImages = await fetch(`${url}/general`);
  const dataImages = await resImages.json();

  const resDetailsData = await fetch(`${url}/learning/${slug}`);
  const dataDetailsData = await resDetailsData.json();

  return {
    props: {
      dataImages: dataImages?.data,
      dataDetailsData: dataDetailsData?.data,
    },
    revalidate: 10,
  };
}



export async function getStaticPaths() {
  const url = 'https://api.tarteel.org.sa/api';
  const resTopiscSlugs = await fetch(`${url}/learnings`);
  const dataTopiscSlugs = await resTopiscSlugs.json();

  const paths = dataTopiscSlugs?.data?.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
