import DetailsComponents from '@/components/Pages/DetailsComponents'
import React from 'react'

const Details = ({ dataImages, dataDetailsData }) => {
  return (
    <>
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
