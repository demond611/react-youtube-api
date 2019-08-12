import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    const { videoId } = video.id;
    return (
      <VideoItem key={videoId}
        video={video}
        onVideoSelect={onVideoSelect} />
    );
  });

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
}

export default VideoList;