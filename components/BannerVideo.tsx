"use client";

const BannerVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full bg-backgroundBlue opacity-20 object-cover"
      preload="auto" // Helps with preloading the video
    >
      {/* <source src="/video-bg-2.mp4" type="video/mp4" /> */}
      <source src="/bg-video-1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BannerVideo;
