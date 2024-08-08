import Map from "@/components/Map";
import dynamic from "next/dynamic";
import React from "react";

const MapWithNoSSR = dynamic(() => import("@/components/Map2"), {
  ssr: false,
});

const map = () => {
  return (
    <>
      <MapWithNoSSR />
    </>
  );
};

export default map;
