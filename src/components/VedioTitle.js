function VedioTitle({ original_title, overview }) {
  return (
    <div className="w-full aspect-video pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{original_title}</h1>
      <p className="w-1/3  py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 bg-opacity-50 text-white p-4 px-12 text-xl rounded-lg mx-4">
          ℹ More Info
        </button>
      </div>
    </div>
  );
}

export default VedioTitle;
