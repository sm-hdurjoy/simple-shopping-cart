// Component Imports
import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  // dynamically updating the tab title
  useTitle("Home");

  // product objects array to show on the home screen
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
    },
  ];

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
