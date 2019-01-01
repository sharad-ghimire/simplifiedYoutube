import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }
  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <div className="ui embed">
        <iframe src={videoSrc} title="Player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </React.Fragment>
  );
};

export default VideoDetails;
