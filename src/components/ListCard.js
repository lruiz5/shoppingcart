import Stock from "../assets/images/1001.jpg";

export const ListCard = ({ item }) => {
  const { name, price, poster_path } = item;
  const poster = poster_path ? `../assets/images/${poster_path}` : Stock;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-3 my-3 px-2 py-4">
      <img className="" src={poster} alt="item poster" />
      <div>
        <p className="my-5 text-lg font-semibold text-gray-900">{name}</p>
        <div className="flex flex-row justify-between items-center">
          <p className="mb-3 text-lg font-semibold text-gray-700">${price}</p>
          <button
            type="button"
            class="text-white text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg px-3 py-1 mr-2 focus:outline-none"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
