import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Video() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { videoId } = useParams();
  const [data, setData] = useState({});
  const [sendComment, setSendComment] = useState({
    videoId: videoId,
    username: "",
    comment: "",
  });

  useEffect(() => {
    getVideo();
  }, []);

  async function getVideo() {
    await axios
      .get(`${API_URL}/videos/${videoId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setSendComment({
      ...sendComment,
      [name]: value,
    });
  }

  async function postComment(e) {
    e.preventDefault();
    await axios
      .post(`${API_URL}/videos/${videoId}/comments`, {
        username: sendComment.username,
        comment: sendComment.comment,
      })
      .then((res) => {
        console.log(res);
        getVideo();
      })
      .catch((err) => {
        console.log(err);
      });

    setSendComment({
      videoId: videoId,
      username: "",
      comment: "",
    });
  }

  return (
    <div className="grid max-h-screen w-full grid-cols-6">
      <div className="row-span-1  px-2" id="product">
        <Link to={`/`}>
          <button className="btn btn-primary btn-sm mb-2 flex w-full gap-4">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="var(--NN100, #E4EBF5)"
            >
              <path d="M20 11.25H4.78l5.73-5.72a.77.77 0 0 0 0-1.07.75.75 0 0 0-1.06 0l-7.1 7.1a.77.77 0 0 0 0 1.07l7.1 7.1a.75.75 0 0 0 1.06 0 .77.77 0 0 0 0-1.07l-5.92-5.91H20a.75.75 0 1 0 0-1.5Z"></path>
            </svg>
            Kembali
          </button>
        </Link>
        <div className="max-h-screen overflow-auto">
          {data?.products?.map((product, index) => {
            return (
              <div
                key={index}
                className="card-compact card mb-2 w-full border border-green-500"
              >
                <figure>
                  <img
                    src={product.url}
                    alt={product.title}
                    className=" h-[150px] w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>Rp.{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-4  max-h-screen bg-neutral-200" id="video">
        <div className="h-full w-full">
          <iframe
            src={data?.url}
            className="h-full w-full"
            title="A YouTube video"
            frameBorder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className=" flex max-h-screen flex-col p-1" id="comment">
        <div
          className=" h-5/6 overflow-auto rounded-md border border-green-500 p-2"
          id="comment-list"
        >
          <h2 className="text-center font-bold text-white">Komentar</h2>
          <ul>
            {data?.comments?.map((comment, index) => {
              return (
                <li key={index} className="text-white">
                  <span className="font-bold">{comment.username}:</span>{" "}
                  {comment.comment}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="row-span-2 rounded-md border border-green-500 p-2"
          id="comment-form"
        >
          <h2 className="mb-2 text-center font-bold text-white">
            Tambahkan Komentar
          </h2>
          <form onSubmit={postComment}>
            <div className="form-control mb-2 w-full max-w-xs">
              <input
                type="text"
                placeholder="Username"
                required
                onChange={handleInput}
                value={sendComment.username}
                name="username"
                className="input input-bordered input-xs w-full max-w-xs text-white"
              />
            </div>
            <textarea
              placeholder="Komentar"
              required
              name="comment"
              onChange={handleInput}
              value={sendComment.comment}
              className="textarea textarea-bordered textarea-xs w-full max-w-xs"
            ></textarea>
            <button className="btn btn-primary btn-xs w-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Video;
