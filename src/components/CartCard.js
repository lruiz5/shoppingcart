import Stock from "../assets/images/1002.jpg";

export const CartCard = ({ item }) => {
  const { name, price, poster_path } = item;
  const poster = poster_path ? `../assets/images/${poster_path}` : Stock;
  return (
    <div className="flex flex-row justify-between items-center w-full p-2 mb-7 text-lg bg-white border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800">
      <div className="h-24">
        <img className="h-full other:hidden" src={poster} alt="" />
      </div>
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
