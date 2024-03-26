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
      style={{ display: "block" }}
      data-ad-client="ca-pub-5738026098468973"
      data-ad-slot="1506991445"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSenseIklan;
