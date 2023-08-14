// eslint-disable-next-line react/prop-types
const VideoCard = ({ title, toko, view, thumbnail }) => (
  <div
    className={`relative flex h-[60vh] cursor-pointer flex-col justify-between rounded-xl`}
  >
    <div className="gradient-overlay"></div>
    <img
      src={thumbnail}
      className=" -z-10  h-full w-full rounded-xl object-cover"
      alt=""
    />
    <div className="absolute z-10 flex gap-2 p-2">
      <div className="h-fit w-fit rounded-md bg-red-600 p-1 text-xs font-semibold uppercase text-white">
        <p>LIVE</p>
      </div>
      <section className="flex h-fit w-fit gap-1 rounded-md bg-zinc-800  bg-opacity-80 p-1 text-xs text-white ">
        <svg
          className="unf-icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="var(--NN0, #FFFFFF)"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.24c7.41 0 10.56 7.16 10.69 7.46a.76.76 0 0 1 0 .59c-.13.3-3.28 7.45-10.69 7.45S1.44 12.59 1.31 12.29a.76.76 0 0 1 0-.59c.13-.3 3.28-7.46 10.69-7.46Zm-9.17 7.75c.64 1.3 3.48 6.25 9.17 6.25 5.69 0 8.53-4.95 9.17-6.25-.64-1.25-3.48-6.25-9.17-6.25-5.69 0-8.53 4.96-9.17 6.25Zm7.188-3.119A3.75 3.75 0 0 1 12.1 8.24 3.76 3.76 0 0 1 15.85 12a3.75 3.75 0 1 1-5.832-3.129Zm.831 4.99a2.25 2.25 0 1 0 2.502-3.74 2.25 2.25 0 0 0-2.502 3.74Z"
          ></path>
        </svg>
        <p>{view}</p>
      </section>
    </div>
    <section className="absolute bottom-0 z-10 p-2">
      <p className="line-clamp-3 text-base text-white">{title}</p>
      <p className="line-clamp-1 text-sm  text-zinc-300">{toko}</p>
    </section>
  </div>
);

export default VideoCard;
