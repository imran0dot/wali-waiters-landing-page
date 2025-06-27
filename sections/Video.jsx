import React from "react";

const Video = () => (
  <div className="flex flex-col justify-center items-center w-8/12 mx-auto">
    <iframe
      className="w-full h-[20em] md:h-[30em]"
      src="https://www.youtube.com/embed/zLV_zMm-IQE?si=Goievn0fOMuS2nOT&amp;controls=0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  </div>
);

export default Video;
