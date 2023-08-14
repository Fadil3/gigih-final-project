import { Link } from "react-router-dom";
import { Category, VideoCard } from "./components";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [videos, setVideos] = useState([]);
  const categoryData = [
    { title: "All", isActive: true },
    {
      title: "Food",
      isActive: false,
    },
  ];
  useEffect(() => {
    axios
      .get(`${API_URL}/videos`)
      .then((response) => {
        setVideos(response.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="m-4">
      <div className="mb-10 flex justify-between">
        <h1 className="text-base font-bold text-white">Play</h1>
        <button>
          <svg
            className="unf-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="#C7CBD2"
            // style="display: inline-block; vertical-align: middle;"
          >
            <path d="m20.53 19.46-4.4-4.4a7.33 7.33 0 1 0-1.07 1.06l4.41 4.41a.77.77 0 0 0 1.06 0 .77.77 0 0 0 0-1.07Zm-15.78-9a5.75 5.75 0 1 1 5.75 5.75 5.76 5.76 0 0 1-5.75-5.72v-.03Z"></path>
          </svg>
        </button>
      </div>
      <div className="mb-4 flex gap-4">
        {categoryData.map((category, index) => {
          return (
            <Category
              title={category.title}
              isActive={category.isActive}
              key={index}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6">
        {videos?.map((video, index) => {
          return (
            <Link to={`/video/${video._id}`} key={index}>
              <VideoCard
                title={video.title}
                toko={video.shop}
                view={video.views}
                thumbnail={new URL(video.thumbnail)}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}

export default App;
