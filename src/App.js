import "./App.css";
import Video from "./components/Video";
import React, { useState, useEffect } from "react";
import axios from "./components/axios";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/v2/posts");
      setVideos(res.data);
      return res;
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
        <Video
          url="https://res.cloudinary.com/dk24tnu4g/video/upload/
v1668110661/samples/sea-turtle.mp4"
          channel="nabendu82"
          description="Macbook Air to new Windows editing beast"
          song="I am a Windows PC"
          likes={345}
          shares={200}
          messages={90}
        />
        <Video
          url="https://res.cloudinary.com/dk24tnu4g/video/upload/v1668110664/samples/elephants.mp4"
          channel="thewebdev"
          description="Tuesday morning editing on kdenlive in Windows"
          song="Kdenlive is great"
          likes={445}
          shares={290}
          messages={109}
        />
      </div>
    </div>
  );
}
export default App;