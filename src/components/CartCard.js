import { useCart } from "../context/CartContext";
import Stock from "../assets/images/1001.jpg";
import "./CartCard.css";

export const CartCard = ({ item }) => {
  const { removeFromCart } = useCart();
  const { name, price, poster_path } = item;
  const poster = poster_path ? `../assets/images/${poster_path}` : Stock;

  const handleRemove = () => {
    removeFromCart(item);
  };
  return (
    <div className="cartCard">
      <div className="">
        <img className="" src={poster} alt="" />
      </div>
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button type="button" class="" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};
