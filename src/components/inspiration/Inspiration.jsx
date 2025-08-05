import React from "react";
import ReactPlayer from "react-player";

function Inspiration() {
  return (
    <div className="inspiration-div">
      <h1 id="inspiration-header">My Inspiration</h1>
      <p>
        If you ask five people which programming language is best to learn,
        you'll get at least 15 different answers. In the morning they might say,
        "Learn this one," and by evening, they'll suggest a different one.
      </p>

      <div className="video-div">
        <ReactPlayer
          className="inspiration_video"
          src="https://www.youtube.com/watch?v=DGHn2uOAVCE"
          controls
          style={{
            width: "650px",
            height: "300px",
            border: "1px solid green",
          }}></ReactPlayer>
      </div>
    </div>
  );
}

export default Inspiration;
