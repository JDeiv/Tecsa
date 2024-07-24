// YouTubeVideo.tsx
import React from 'react';

interface YouTubeVideoProps {
  videoId: string; // El ID del video de YouTube
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  return (
    <div className="youtube-video">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder={0}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
