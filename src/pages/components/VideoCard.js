import React from 'react';
import './VideoCard.css';

function VideoCard({ videoLink }) {
  return (
    <div className="video-card">
      <iframe
        width="560"
        height="315"
        src={videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export default VideoCard;
