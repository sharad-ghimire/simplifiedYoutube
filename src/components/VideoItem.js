import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const title = video.snippet.title;
  const imgThumb = video.snippet.thumbnails.medium.url;
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={imgThumb} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
