import React from 'react';
import './VideoCard.css'; // Optional: if you want to style it separately

function VideoCard({ videoLink }) {
  return (
    <div className="video-card">
      <iframe
        src={videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        id="video"
      />
    </div>
  );
}

export default VideoCard;
