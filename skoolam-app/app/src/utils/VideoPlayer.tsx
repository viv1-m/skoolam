import React from "react";

const VideoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Embedded YouTube Video */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: "0" }}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
