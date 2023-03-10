import { useEffect, useState } from "react";
import Stock from "../assets/images/1001.jpg";
import { useCart } from "../context/CartContext";
import "./ListCard.css";

export const ListCard = ({ item }) => {
  const { addToCart, removeFromCart, cartList } = useCart();
  const [isInCart, setIsInCart] = useState(false);
  const { name, price, poster_path } = item;
  const poster = poster_path ? `../assets/images/${poster_path}` : Stock;

  useEffect(() => {
    const productInCart = cartList.find((current) => current.id === item.id);

    productInCart ? setIsInCart(true) : setIsInCart(false);
  }, [cartList, item.id]);
  return (
    <div className="productCard">
      <img src={poster} alt="product poster" />
      <p className="name">{name}</p>
      <div className="action">
        <p className="price">${price}</p>
        {isInCart ? (
          <button
            className="remove"
            type="button"
            onClick={() => removeFromCart(item)}
          >
            Remove
          </button>
        ) : (
          <button type="button" onClick={() => addToCart(item)}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
