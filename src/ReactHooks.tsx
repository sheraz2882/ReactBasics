import React from "react";
import { useState, useEffect } from "react";

interface ReactHooksType {
  code: string;
  name: string;
  description: string;
}

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItemType {
  product: ProductType;
  quantity: number;
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

const products: ProductType[] = [
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
  const [checkCart, setCheckCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const handleAddToCart = (product: ProductType) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const itemExists = prevItems.find(
        (item) => item.product.id === product.id,
      );

      if (itemExists) {
        // If it exists, increase the quantity of that specific item
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      // If it's a new item, add it to the cart with a quantity of 1
      return [...prevItems, { product, quantity: 1 }];
    });
  };

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

        {cartItems.length > 0 && (
          <div className="products-cart">
            <button
              className="hook-button"
              onClick={() => {
                setCheckCart(true);
              }}
            >
              Check Cart {cartItems.length}
            </button>
          </div>
        )}

        {checkCart ? (
          <div className="product-display-card">
            {cartItems.map((cartItem) => (
              <div className="product-info-card">
                <p style={{ fontSize: "60px", flexGrow: 1 }}>
                  {cartItem.product.image}
                </p>

                <p style={{ fontSize: "16px", flexGrow: 1, marginTop: "30px" }}>
                  {cartItem.product.name}
                </p>

                <p style={{ fontSize: "16px", flexGrow: 1 }}>
                  Rs. {cartItem.product.price}
                </p>

                <button
                  style={{ fontSize: "12px", marginTop: "10px" }}
                  className="hook-button"
                  onClick={() => {}}
                >
                  Remove Item - Quantity {cartItem.quantity}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <DisplayProducts addToCart={handleAddToCart} />
        )}
      </div>
    </div>
  );
}

interface DisplayProductsProps {
  addToCart: (product: ProductType) => void; // Callback returns nothing (void)
}

const DisplayProducts: React.FC<DisplayProductsProps> = ({ addToCart }) => {
  return (
    <div className="product-display-card">
      {products.map((product) => (
        <div className="product-info-card">
          <p style={{ fontSize: "60px", flexGrow: 1 }}>{product.image}</p>

          <p style={{ fontSize: "16px", flexGrow: 1, marginTop: "30px" }}>
            {product.name}
          </p>

          <p style={{ fontSize: "16px", flexGrow: 1 }}>Rs. {product.price}</p>

          <button
            style={{ fontSize: "12px", marginTop: "10px" }}
            className="hook-button"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

function UseEffectDemo({ hookData }: { hookData: ReactHooksType }) {
  return (
    <div className="hook-demo-card">
      <div className="use-effect-exam">
        <h3>CountDown Timer</h3>
        <CountDownTimer initialSeconds={3600} />
      </div>
      <div className="use-effect-exam">
        <h3>Check Internet</h3>
      </div>
    </div>
  );
}

interface CountDownTimerProps {
  initialSeconds: number;
}

const CountDownTimer = ({ initialSeconds }: CountDownTimerProps) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [active, setActive] = useState(true);

  let timer: number | null = null;

  useEffect(() => {
    if (active && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setActive(false);
    }

    //clear on unmount or before running effect again
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [active, seconds]); //Re-run effect whenever 'active or seconds' updates

  //format time util function

  const formatTimer = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    // Pad single digits with a leading zero
    return [hrs, mins, secs]
      .map((val) => String(val).padStart(2, "0"))
      .join(":");
  };

  return (
    <div className="timer-box">
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        {seconds > 0
          ? "Time Remaining " + formatTimer(seconds) + "s"
          : "⏰ Time's Up!"}
      </p>

      <div style={{ marginTop: "15px" }} className="timer-controls">
        <button
          className="hook-button"
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? "Pause" : "Play"}
        </button>
        <button
          className="hook-button"
          onClick={() => {
            (setSeconds(3600), setActive(true));
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

function selectedHookView(selectedHook: ReactHooksType) {
  switch (selectedHook.name) {
    case "useState":
      return <UseStateDemo hookData={selectedHook} />;
    case "useEffect":
      return <UseEffectDemo hookData={selectedHook} />;

    default:
      return <div></div>;
  }
}

export const ReactHooks = () => {
  const [selectedHook, setSelectedHook] = useState<ReactHooksType>(
    ReactHooksData[0],
  );
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
