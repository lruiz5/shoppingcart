import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
const cartItems = [
  {
    id: "hp-1",
    poster: "1001.jpg",
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: "149",
  },

  {
    id: "hp-5",
    poster: "1005.jpg",
    name: "Apple Airpods Max Bluetooth Headset",
    price: "199",
  },
  {
    id: "hp-6",
    poster: "1006.jpg",
    name: "ZEBRONICS Zeb-Thunder Wired",
    price: "29",
  },
];

export const Cart = ({ title }) => {
  useTitle(title);
  return (
    <main>
      <section className="text-xl mx-auto pt-2">
        <p className="flex font-bold text-2xl justify-center py-10">
          Cart Items: {cartItems.length}
        </p>
        <div>
          {cartItems.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};
