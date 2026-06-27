import React from "react";
import { useState, useEffect } from "react";

interface ReactHooksType {
  code: string;
  name: string;
  description: string;
}

const ReactHooksData: ReactHooksType[] = [
  {
    code: "1",
    name: "useState",
    description:
      "useState is a Hook that allows you to have state variables in functional components.",
  },
  {
    code: "2",
    name: "useEffect",
    description:
      "useEffect is a Hook that allows you to perform side effects in functional components.",
  },
  {
    code: "3",
    name: "useRef",
    description:
      "useRef is a Hook that allows you to create a reference to a DOM element or a value that persists across renders.",
  },
  {
    code: "4",
    name: "useMemo",
    description:
      "useMemo is a Hook that allows you to memoize values and avoid unnecessary recalculations.",
  },
];

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    image: "🎧",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 59.99,
    image: "👟",
    category: "Footwear",
  },
  { id: 3, name: "Coffee Mug", price: 14.99, image: "☕", category: "Kitchen" },
  { id: 4, name: "Backpack", price: 49.99, image: "🎒", category: "Bags" },
  {
    id: 5,
    name: "Sunglasses",
    price: 29.99,
    image: "🕶️",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Water Bottle",
    price: 19.99,
    image: "🍶",
    category: "Kitchen",
  },
];

function UseStateDemo({ hookData }: { hookData: ReactHooksType }) {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <div className="hook-demo-card">
        <div className="use-state-exam">
          <p style={{ fontSize: "26px", marginBottom: "10px" }}>
            Count : {counter}
          </p>

          <button
            className="hook-button"
            onClick={() => {
              console.log("button clicked");
              setCounter(counter + 1);
            }}
          >
            Count
          </button>
        </div>

        <div className="use-state-exam">
          <p
            style={{
              fontSize: "28px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            {theme.toUpperCase()}
          </p>

          <button
            className="hook-button"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            Change Theme
          </button>
        </div>
      </div>

      <div className="hook-shopping-cart">
        <h2>Shopping Cart</h2>

        <div className="product-display-card">
          {products.map((product) => (
            <div className="product-info-card">
              <p style={{ fontSize: "60px", flexGrow: 1 }}>{product.image}</p>

              <p style={{ fontSize: "16px", flexGrow: 1, marginTop: "30px" }}>
                {product.name}
              </p>

              <p style={{ fontSize: "16px", flexGrow: 1 }}>
                Rs. {product.price}
              </p>

              <button
                style={{ fontSize: "12px", marginTop: "10px" }}
                className="hook-button"
                onClick={() => {}}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function useEffectDemo() {
  return <div className="hook-demo-card"></div>;
}

function selectedHookView(selectedHook: ReactHooksType) {
  switch (selectedHook.name) {
    case "useState":
      return <UseStateDemo hookData={selectedHook} />;

    default:
      return <div></div>;
  }
}

export const ReactHooks = () => {
  const [selectedHook, setSelectedHook] = useState<ReactHooksType | null>(null);
  return (
    <>
      <div className="hooks-container">
        <h2>React Hooks</h2>

        {ReactHooksData.map((hook) => (
          <button
            key={hook.code}
            className="hook-button"
            onClick={() => {
              setSelectedHook(hook);
            }}
          >
            {hook.name}
          </button>
        ))}

        {selectedHook && selectedHookView(selectedHook)}
      </div>
    </>
  );
};
