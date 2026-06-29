import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

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
    <div>
      <div className="hook-demo-card">
        <div className="use-effect-exam">
          <h3>CountDown Timer</h3>
          <CountDownTimer initialSeconds={3600} />
        </div>
        <div className="use-effect-exam">
          <h3>Check Internet</h3>
          <CheckInternetState />
        </div>
      </div>

      <div className="hook-demo-card">
        <div className="use-effect-exam">
          <h3>Current Weather 🌤️</h3>
          <FetchWeatherApi />
        </div>
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

const CheckInternetState = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showBanner, setShowBanner] = useState(false);

  console.log("Show isOnline", isOnline);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowBanner(true);

      const timer = setInterval(() => setShowBanner(false), 3000);
      return () => clearInterval(timer);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowBanner(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  //   if (isOnline && !showBanner) return null;

  return (
    <div>
      {isOnline ? "🟢 Connected back online" : "🔴 You are currently offline"}
    </div>
  );
};

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
}

const FetchWeatherApi = () => {
  const [cityName, setCityName] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "e86b986fb158e202afe03cb94a0faf01";

  useEffect(() => {
    if (!cityName) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError("");

      console.log("API called");
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("City not found. Please try another name.");
        }

        const data: WeatherData = await response.json();
        console.log("API Data", data);
        setWeatherData(data);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred.");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("CityName", searchInput);
    if (searchInput.trim()) {
      setCityName(searchInput);
    }
  };

  return (
    <div className="weather-card">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Enter City"
        />
        <button type="submit" className="hook-button">
          Search
        </button>
      </form>

      {/* Based on API conditioning Managed UI Layouts */}
      {loading && (
        <div className="weather-widget">
          <p>Loading target city conditions...</p>
        </div>
      )}
      {error && (
        <div className="weather-widget">
          <p style={{ color: "red" }}>⚠️ {error}</p>
        </div>
      )}

      {weatherData && !loading && !error && (
        <div className="weather-widget">
          <h3>Current Condition in: {weatherData.name}</h3>
          <p>{Math.round(weatherData.main.temp)}°C</p>
          <p>Sky: {weatherData.weather[0].description}</p>
          <p>Humidity Level: {weatherData.main.humidity}</p>
        </div>
      )}
    </div>
  );
};

function UseRefDemo({ hookData }: { hookData: ReactHooksType }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <div className="hook-demo-card">
        <div className="use-effect-exam" style={{ alignItems: "center" }}>
          <h3>Auto Focus Input When Mount</h3>

          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="Enter Query"
          />
        </div>

        <div className="use-effect-exam">
          <h3>Previous value tracker</h3>
          <ValueTracker />
        </div>
      </div>
    </div>
  );
}

const ValueTracker = () => {
  const [count, setCount] = useState(0);

  const prevValueRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    console.log(count);
    console.log("valueRef", prevValueRef.current);
    prevValueRef.current = count;
  }, [count]);

  const prevValue = prevValueRef.current; //saving prev value for later comparison

  console.log("Previous", prevValue);

  return (
    <div className="hook-demo-card">
      <div className="use-state-exam">
        <h4>Previouse State</h4>
        <p>{prevValue === undefined ? "None" : prevValue}</p>
        <button
          className="hook-button"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increment
        </button>
      </div>

      <div className="use-state-exam">
        <h4>Current State</h4>
        <p>{count}</p>

        <button
          className="hook-button"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

function UseMemo() {
  return (
    <div>
      <div className="hook-demo-card">
        <div className="use-effect-exam">
          <ProductFiltering />
        </div>
      </div>
    </div>
  );
}

interface ProductType {
  id: number;
  name: string;
  category: string;
  price: number;
}

const MOCK_PRODUCTS: ProductType[] = Array.from({ length: 500 }, (_, index) => {
  const categories = ["Electronics", "Clothing", "Home", "Books"];
  const category = categories[index % categories.length];

  return {
    id: index + 1,
    name: `${category} Item #${index + 1}`,
    category: category,
    price: Math.floor(Math.random() * 900) + 100,
  };
});

const ProductFiltering = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [isDarkMode, setIsDarkMode] = useState(false);

  const filterProductsWithoutMemo = () => {
    console.log("❌ Bad: Filtering 500 items WITHOUT useMemo...");

    return MOCK_PRODUCTS.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  };

  const unoptimizedProducts = filterProductsWithoutMemo();

  const optimizedProducts = useMemo(() => {
    console.log("✅ Good: Filtering 500 items WITH useMemo!");
    return MOCK_PRODUCTS.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#000000",
        transition: "background-color 0.2s ease",
      }}
    >
      <h2 style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>
        📦 Smart Product Catalog
      </h2>

      {/* Trigger an unrelated re-render block */}
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          background: isDarkMode ? "#1e1e1e" : "#ffffff",
          color: "#000",
        }}
      >
        <p style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>
          <strong>Test Performance:</strong> Look at your browser console. Click
          this toggle button. The "Bad" console log will fire every time, but
          the "Good" memo log will stay silent!
        </p>
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
          Toggle Dark Mode (Current: {isDarkMode ? "Dark" : "Light"})
        </button>

        {/* Filter Inputs Controls */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "8px", flex: 1 }}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: "8px" }}
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home">Home</option>
            <option value="Books">Books</option>
          </select>
        </div>

        {/* Display Results */}
        <h3 style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>
          Showing {optimizedProducts.length} Results
        </h3>
        <div
          style={{
            maxHeight: "300px",
            overflowY: "scroll",
            border: `1px solid ${isDarkMode ? "#fff" : "#ccc"}`,
            padding: "10px",
          }}
        >
          {/* Swapping 'unoptimizedProducts' with 'optimizedProducts' prevents execution lag */}
          {optimizedProducts.map((product) => (
            <div
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "6px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>
                {product.name} ({product.category})
              </span>
              <strong style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>
                ${product.price}
              </strong>
            </div>
          ))}
        </div>
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
    case "useRef":
      return <UseRefDemo hookData={selectedHook} />;
    case "useMemo":
      return <UseMemo />;

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
