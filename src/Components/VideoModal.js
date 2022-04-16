import React from "react";
const VideoModal = ({ data, setisOpen }) => {
  console.log(data.videos.results);
  const filteredVideo = data.videos.results.filter(
    (item) =>
      item.name.includes("Official Trailer") || item.name.includes("Trailer")
  );
  return (
    <div className="modal-container">
      <iframe
        src={`https://www.youtube.com/embed/${
          filteredVideo.length < 2
            ? filteredVideo[0].key
            : filteredVideo.length >= 2
            ? filteredVideo[1].key
            : data.videos.results.length === 0
            ? "ne"
            : data.videos.results[0]
        }?autoplay=1?muted=0`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoModal;
