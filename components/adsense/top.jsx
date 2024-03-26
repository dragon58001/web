"use client";
import { useEffect } from "react";

const AdSenseIklan = () => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);
  return (
    <ins
      className="m-2 lg:m-0 adsbygoogle"
      style={{ display: "block", height: "100px"}}
      data-ad-client="ca-pub-5738026098468973"
      data-ad-slot="1506991445"
    ></ins>
  );
};

export default AdSenseIklan;
