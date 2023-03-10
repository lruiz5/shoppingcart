import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";

export const Cart = ({ title }) => {
  const { total, cartList } = useCart();
  useTitle(title);
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length} / ${total}
        </h1>
        <div>
          {cartList.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};
