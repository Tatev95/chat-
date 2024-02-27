import React, { useState, useRef, SyntheticEvent } from "react";

interface VideoPlayerProps {
  videoUrl: string;
}

export const Video: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
    if (isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMetadata = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    const duration = event.currentTarget.duration;
    console.log(duration, "dur");
  };

  const handleCanPlay = () => {
    console.log("Can play");
  };

  const handleWaiting = () => {
    console.log("Video is waiting");
  };

  return (
    <div>
      <video
        onLoadedMetadata={handleMetadata}
        ref={videoRef}
        onCanPlay={handleCanPlay}
        onWaiting={handleWaiting}
        width="640"
        height="360"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {<button onClick={handlePlay}>{!isPlaying ? "Play" : "stop"}</button>}
    </div>
  );
};
