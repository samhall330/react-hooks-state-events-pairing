import React from "react";
import video from "../data/video.js";
import VideoPage from "./VideoPage"

function App() {
  console.log("Here's your data:", video);

  return (
   <VideoPage video={video}/>
  );
}

export default App;
