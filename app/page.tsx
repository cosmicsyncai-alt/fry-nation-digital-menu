"use client";

import { useState } from "react";

const categories = [
  { id: "tandoori", name: "Tandoori" },
  { id: "nonveg-tandoori", name: "Non-Veg Tandoori" },
  { id: "veg-starter", name: "Veg Starter" },
  { id: "nonveg-starter", name: "Non-Veg Starter" },
  { id: "fries", name: "Fries" },
  { id: "soup", name: "Soup" },
  { id: "sandwich", name: "Sandwich" },
  { id: "pizza", name: "Pizza" },
  { id: "biryani", name: "Biryani" },
  { id: "nonveg-main", name: "Non-Veg Main Course" },
  { id: "indian-main", name: "Indian Main Course" },
  { id: "dal", name: "Dal" },
  { id: "rice", name: "Rice" },
  { id: "noodles", name: "Noodles" },
  { id: "bread", name: "Bread" },
  { id: "salad", name: "Salad" },
  { id: "mocktail", name: "Mocktail" },
  { id: "shake", name: "Shake" },
  { id: "sweet-beverage", name: "Sweet & Beverage" },
];

const menuSections = [
  { id: "tandoori", title: "🔥 Tandoori", items: [
    { name: "Paneer Tikka", price: "₹220", type: "veg", bestseller: true },
    { name: "Mushroom Tikka", price: "₹230", type: "veg" },
  ]},
  { id: "nonveg-tandoori", title: "🍗 Tandoori Starter — Non Veg", items: [
    { name: "Chicken Tikka", price: "₹250", type: "nonveg", bestseller: true },
    { name: "Tandoori Chicken", price: "₹350", type: "nonveg" },
  ]},
  { id: "veg-starter", title: "🥗 Veg Starter", items: [
    { name: "Baby Corn Chilly", price: "₹200", type: "veg" },
    { name: "Mushroom Chilly", price: "₹210", type: "veg" },
    { name: "Paneer Chilly", price: "₹190", type: "veg", bestseller: true },
    { name: "Honey Chilly Potato", price: "₹180", type: "veg" },
    { name: "Paneer 65", price: "₹190", type: "veg" },
    { name: "Veg Manchurian", price: "₹160", type: "veg" },
    { name: "Paneer Manchurian", price: "₹190", type: "veg" },
    { name: "Paneer Pakoda", price: "₹150", type: "veg" },
    { name: "Baby Corn Crispy", price: "₹200", type: "veg" },
  ]},
  { id: "nonveg-starter", title: "🍗 Non Veg Starter", items: [
    { name: "Chicken Chilly", price: "₹220", type: "nonveg", bestseller: true },
    { name: "Chicken Lollipop (6 pcs)", price: "₹260", type: "nonveg" },
    { name: "Chicken 65", price: "₹230", type: "nonveg" },
    { name: "Crispy Chicken", price: "₹230", type: "nonveg" },
  ]},
  { id: "fries", title: "🍟 Fries", items: [
    { name: "French Fries", price: "₹90", type: "veg", bestseller: true },
    { name: "Cheese Fries", price: "₹120", type: "veg" },
    { name: "Masala Fries", price: "₹115", type: "veg" },
  ]},
  { id: "soup", title: "🍲 Soup", items: [
    { name: "Soup", price: "₹75", type: "veg" },
    { name: "Chicken Soup", price: "₹85", type: "nonveg" },
    { name: "Veg Monchao Soup", price: "₹85", type: "veg" },
  ]},
  { id: "sandwich", title: "🥪 Sandwich", items: [
    { name: "Indian Veg Sandwich", price: "₹80", type: "veg" },
    { name: "Tandoori Paneer Sandwich", price: "₹110", type: "veg", bestseller: true },
    { name: "Tandoori Chicken Sandwich", price: "₹130", type: "nonveg" },
    { name: "Chicken Cheese Sandwich", price: "₹140", type: "nonveg" },
    { name: "Paneer Cheese Sandwich", price: "₹140", type: "veg" },
    { name: "Cheese Sandwich", price: "₹110", type: "veg" },
    { name: "Egg Sandwich", price: "₹100", type: "nonveg" },
  ]},
  { id: "pizza", title: "🍕 Pizza", items: [
    { name: "Veg Loaded Pizza", price: "₹175", type: "veg" },
    { name: "Cheese Loaded Pizza", price: "₹175", type: "veg" },
    { name: "Paneer Loaded Pizza", price: "₹175", type: "veg", bestseller: true },
    { name: "Tandoori Chicken Pizza", price: "₹195", type: "nonveg" },
    { name: "Tandoori Paneer Pizza", price: "₹185", type: "veg" },
    { name: "Chicken Loaded Pizza", price: "₹205", type: "nonveg" },
    { name: "Mushroom Pizza", price: "₹175", type: "veg" },
  ]},
  { id: "biryani", title: "🍚 Biryani", items: [
    { name: "Veg Biryani", price: "₹165", type: "veg" },
    { name: "Paneer Biryani", price: "₹165", type: "veg" },
    { name: "Egg Biryani", price: "₹170", type: "nonveg" },
    { name: "Chicken Biryani", price: "₹190", type: "nonveg", bestseller: true },
    { name: "Chicken Biryani With Egg", price: "₹200", type: "nonveg" },
    { name: "Hyderabadi Chicken Biryani", price: "₹210", type: "nonveg" },
    { name: "Mutton Biryani", price: "₹250", type: "nonveg" },
  ]},
  { id: "nonveg-main", title: "🍗 Non Veg Indian Main Course", items: [
    { name: "Mutton Istu (2 pcs / 4 pcs)", price: "₹200", type: "nonveg" },
    { name: "Chicken Curry (4 pcs)", price: "₹240", type: "nonveg", bestseller: true },
    { name: "Mutton Curry (2 pcs / 4 pcs)", price: "₹190", type: "nonveg" },
    { name: "Chicken Dehati (4 pcs / 8 pcs)", price: "₹250", type: "nonveg" },
    { name: "Mutton Kadhai (2 pcs / 4 pcs)", price: "₹210", type: "nonveg" },
    { name: "Murg Masallam (8 pcs)", price: "₹550", type: "nonveg" },
    { name: "Mutton Masala (2 pcs / 4 pcs)", price: "₹200", type: "nonveg" },
  ]},
  { id: "indian-main", title: "🥘 Indian Main Course", items: [
    { name: "Shahi Paneer", price: "₹210", type: "veg", bestseller: true },
    { name: "Paneer Masala", price: "₹210", type: "veg" },
    { name: "Paneer Handi", price: "₹220", type: "veg" },
    { name: "Mushroom Kadhai", price: "₹230", type: "veg" },
    { name: "Mushroom Do Payaza", price: "₹230", type: "veg" },
    { name: "Mushroom Butter Masala", price: "₹230", type: "veg" },
    { name: "Mushroom Masala", price: "₹230", type: "veg" },
    { name: "Matar Mushroom", price: "₹200", type: "veg" },
    { name: "Matar Paneer Mushroom", price: "₹210", type: "veg" },
    { name: "Mix Veg", price: "₹180", type: "veg" },
    { name: "Palak Paneer", price: "₹210", type: "veg" },
    { name: "Mushroom Handi", price: "₹240", type: "veg" },
    { name: "Paneer Butter Masala", price: "₹220", type: "veg", bestseller: true },
    { name: "Matar Paneer", price: "₹200", type: "veg" },
  ]},
  { id: "dal", title: "🥣 Dal", items: [
    { name: "Dal Tadka", price: "₹110", type: "veg" },
    { name: "Dal Fry", price: "₹110", type: "veg" },
    { name: "Lahsuni Dal", price: "₹110", type: "veg" },
    { name: "Dal Makhani", price: "₹200", type: "veg", bestseller: true },
  ]},
  { id: "rice", title: "🍚 Rice", items: [
    { name: "Veg Fried Rice", price: "₹120", type: "veg" },
    { name: "Chicken Fried Rice", price: "₹150", type: "nonveg" },
    { name: "Paneer Fried Rice", price: "₹140", type: "veg" },
    { name: "Egg Fried Rice", price: "₹140", type: "nonveg" },
    { name: "Veg Schezwan Rice", price: "₹130", type: "veg" },
    { name: "Chicken Schezwan Fried Rice", price: "₹160", type: "nonveg" },
    { name: "Steam Rice", price: "₹75", type: "veg" },
    { name: "Kashmiri Pulao", price: "₹155", type: "veg" },
    { name: "Peas Pulao", price: "₹125", type: "veg" },
    { name: "Jeera Rice", price: "₹90", type: "veg" },
  ]},
  { id: "noodles", title: "🍜 Noodles", items: [
    { name: "Veg Hakka Noodle", price: "₹100", type: "veg" },
    { name: "Paneer Noodle", price: "₹140", type: "veg" },
    { name: "Egg Noodle", price: "₹130", type: "nonveg" },
    { name: "Chicken Hakka Noodle", price: "₹150", type: "nonveg" },
    { name: "Veg Schezwan Noodle", price: "₹120", type: "veg" },
    { name: "Chicken Schezwan Noodle", price: "₹160", type: "nonveg" },
    { name: "Paneer Schezwan Noodle", price: "₹150", type: "veg" },
  ]},
  { id: "bread", title: "🫓 Bread", items: [
    { name: "Tandoori Roti", price: "₹15", type: "veg" },
    { name: "Butter Tandoori Roti", price: "₹20", type: "veg" },
    { name: "Plain Naan", price: "₹30", type: "veg" },
    { name: "Butter Naan", price: "₹35", type: "veg" },
    { name: "Garlic Naan", price: "₹45", type: "veg" },
    { name: "Stuffed Naan", price: "₹55", type: "veg" },
    { name: "Kulcha", price: "₹65", type: "veg" },
    { name: "Tandoori Laccha Paratha", price: "₹45", type: "veg" },
    { name: "Tawa Laccha Paratha", price: "₹40", type: "veg" },
  ]},
  { id: "salad", title: "🥗 Salad", items: [
    { name: "Onion Salad", price: "₹45", type: "veg" },
    { name: "Green Salad", price: "₹65", type: "veg" },
    { name: "Raita", price: "₹45", type: "veg" },
    { name: "Papad Dry / Fry", price: "₹35", type: "veg" },
  ]},
  { id: "mocktail", title: "🍹 Mocktail", items: [
    { name: "Virgin Mojito", price: "₹90", type: "veg", bestseller: true },
    { name: "Blue Sea", price: "₹90", type: "veg" },
    { name: "Red Rose Mojito", price: "₹90", type: "veg" },
    { name: "Green Mint Mojito", price: "₹90", type: "veg" },
    { name: "Classic Mint Mojito", price: "₹100", type: "veg" },
  ]},
  { id: "shake", title: "🥤 Shake", items: [
    { name: "Cold Coffee", price: "₹90", type: "veg", bestseller: true },
    { name: "Oreo Shake", price: "₹100", type: "veg" },
    { name: "Banana Shake", price: "₹70", type: "veg" },
    { name: "Mango Shake", price: "₹70", type: "veg" },
    { name: "Kitkat Shake", price: "₹120", type: "veg" },
    { name: "Strawberry Shake", price: "₹90", type: "veg" },
    { name: "Fruit Punch", price: "₹120", type: "veg" },
  ]},
  { id: "sweet-beverage", title: "🍨 Sweet & Beverage", items: [
    { name: "Mineral Water", price: "₹20", type: "veg" },
    { name: "Cold Drink Maaza", price: "₹35", type: "veg" },
    { name: "Vanilla Ice Cream", price: "₹55", type: "veg" },
    { name: "Strawberry Ice Cream", price: "₹55", type: "veg" },
    { name: "Chocolate Ice Cream", price: "₹65", type: "veg" },
    { name: "Butter Scotch Ice Cream", price: "₹75", type: "veg" },
    { name: "Hot Coffee", price: "₹65", type: "veg" },
    { name: "Hot Gulab Jamun (2 pc)", price: "₹40", type: "veg" },
    { name: "Hot Gulab Jamun With Ice Cream", price: "₹75", type: "veg" },
  ]},
];

const taxSettings = {
  enabled: true,
  cgst: 2.5,
  sgst: 2.5,
};

const googleReviewUrl =
  "https://www.google.com/search?sca_esv=1ef16b6696f8b5b3&sxsrf=APpeQnvYdIYBDOuzzzpF13oZTf_8x7Nb7w:1791358702519&q=fry+nation&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_ynKgjzO38CyOtpFOC3Pb2tAka8DqqgVwGG-M96X9YdSc1WBJiVcwuG1JKl8oEuRhCRV7WWHLb0kGfUrmz16yF6yz9P_rzvzBU8z7KDPD-ms5pFcpA%3D%3D&sa=X&ved=2ahUKEwiWoYOZs6eXAxVTm-EIHc-RO5YQrrQLegQIHRAA&biw=1920&bih=945&dpr=1";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);
  const [showOrder, setShowOrder] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const addToOrder = (name: string, price: string) => {
    const numericPrice = Number(price.replace("₹", ""));
    setCart((current) => {
      const existing = current.find((item) => item.name === name);
      if (existing) {
        return current.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { name, price: numericPrice, quantity: 1 }];
    });
  };

  const updateQuantity = (name: string, change: number) => {
    setCart((current) =>
      current
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const selectCategory = (id: string) => {
    setSelectedCategory(id);
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const visibleSections =
    selectedCategory === "all"
      ? menuSections
      : menuSections.filter((section) => section.id === selectedCategory);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cgst = taxSettings.enabled
    ? subtotal * (taxSettings.cgst / 100)
    : 0;
  const sgst = taxSettings.enabled
    ? subtotal * (taxSettings.sgst / 100)
    : 0;
  const estimatedTotal = subtotal + cgst + sgst;

  return (
    <main className="min-h-screen bg-[#24170f] text-[#3a2518]">
      {/* ================= WELCOME ================= */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#24170f] px-6 text-center text-[#f5eadc]">
        <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#b89562] bg-[#38251a] text-4xl shadow-xl">
          🍽️
        </div>
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c9a66b]">
          Welcome to
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Fry Nation
        </h1>
        <p className="mt-2 text-lg text-[#d7c3ae]">Restro & Café</p>
        <p className="mt-6 max-w-md text-sm leading-6 text-[#bda996]">
          Delicious food, refreshing drinks & good vibes.
        </p>
        <a
          href="#menu"
          className="mt-10 rounded-full border border-[#c9a66b] bg-[#c9a66b] px-9 py-4 font-semibold text-[#24170f] shadow-xl transition hover:scale-105"
        >
          View Menu
        </a>
        <p className="mt-8 text-xs tracking-widest text-[#927963]">
          SCAN • EXPLORE • ENJOY
        </p>
      </section>

      {/* ================= MENU ================= */}
      <section id="menu" className="bg-[#f1e4d2] px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9a7148]">
              Fry Nation
            </p>
            <h2 className="mt-3 text-4xl font-bold text-[#38251a]">
              Our Menu
            </h2>
            <p className="mt-3 text-sm text-[#765d49]">
              Choose a category to explore
            </p>
          </div>

          {/* CATEGORY FILTER */}
          <div className="sticky top-0 z-20 -mx-5 bg-[#f1e4d2]/95 px-5 py-4 backdrop-blur">
            <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
              <button
                onClick={() => selectCategory("all")}
                className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm font-medium shadow-sm transition ${
                  selectedCategory === "all"
                    ? "border-[#38251a] bg-[#38251a] text-white"
                    : "border-[#c9ae91] bg-[#fffaf4] text-[#4a3020] hover:bg-[#38251a] hover:text-white"
                }`}
              >
                🍽️ All Menu
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => selectCategory(category.id)}
                  className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm font-medium shadow-sm transition ${
                    selectedCategory === category.id
                      ? "border-[#38251a] bg-[#38251a] text-white"
                      : "border-[#c9ae91] bg-[#fffaf4] text-[#4a3020] hover:bg-[#38251a] hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* ONLY SELECTED CATEGORY IS SHOWN */}
          <div className="mt-8">
            {visibleSections.map((section) => (
              <section key={section.id} className="mb-14">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#cdb79e]" />
                  <h3 className="whitespace-nowrap text-xl font-bold text-[#38251a] sm:text-2xl">
                    {section.title}
                  </h3>
                  <div className="h-px flex-1 bg-[#cdb79e]" />
                </div>

                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-[#eadbc8] bg-[#fffaf4] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-2 ${
                              item.type === "veg"
                                ? "border-green-600"
                                : "border-red-600"
                            }`}
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${
                                item.type === "veg"
                                  ? "bg-green-600"
                                  : "bg-red-600"
                              }`}
                            />
                          </span>
                          <h4 className="font-semibold text-[#38251a]">
                            {item.name}
                          </h4>
                        </div>

                        {item.bestseller && (
                          <span className="mt-2 inline-block rounded-full bg-[#ead8b9] px-2.5 py-1 text-xs font-semibold text-[#76532e]">
                            ⭐ Bestseller
                          </span>
                        )}
                      </div>

                      <div className="flex shrink-0 flex-col items-end gap-2">
                        <span className="whitespace-nowrap font-bold text-[#9a7148]">
                          {item.price}
                        </span>
                        <button
                          onClick={() => addToOrder(item.name, item.price)}
                          className="rounded-full bg-[#4b2e1f] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#321d14] active:scale-95"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ORDER BAR ================= */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4">
          <button
            onClick={() => setShowOrder(true)}
            className="flex w-full max-w-md items-center justify-between rounded-2xl bg-[#4b2e1f] px-5 py-4 text-white shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🛎️</span>
              <div className="text-left">
                <p className="font-bold">My Order</p>
                <p className="text-xs text-white/70">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </p>
              </div>
            </div>
            <span className="font-bold">₹{estimatedTotal.toFixed(0)}</span>
          </button>
        </div>
      )}

      {/* ================= ORDER SCREEN ================= */}
      {showOrder && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#f8f1e7]">
          <div className="mx-auto min-h-screen max-w-md">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-[#4b2e1f] px-5 py-4 text-white shadow">
              <div>
                <p className="text-xs text-white/60">Fry Nation Restro & Café</p>
                <h2 className="text-xl font-bold">Your Order</h2>
              </div>
              <button
                onClick={() => setShowOrder(false)}
                className="rounded-full bg-white/10 px-3 py-2 text-lg"
                aria-label="Close order"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 p-4">
              {cart.map((item) => (
                <div key={item.name} className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[#3b261a]">{item.name}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        ₹{item.price} each
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-[#f5eee5] px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.name, -1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white font-bold"
                      >
                        −
                      </button>
                      <span className="w-5 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.name, 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4b2e1f] font-bold text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 border-t pt-3 text-right font-bold text-[#4b2e1f]">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <>
                <div className="mx-4 rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="mb-4 text-lg font-bold text-[#3b261a]">
                    Estimated Bill
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>

                    {taxSettings.enabled && (
                      <>
                        <div className="flex justify-between">
                          <span>CGST {taxSettings.cgst}%</span>
                          <span>₹{cgst.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SGST {taxSettings.sgst}%</span>
                          <span>₹{sgst.toFixed(2)}</span>
                        </div>
                      </>
                    )}

                    <div className="my-3 border-t" />

                    <div className="flex justify-between text-lg font-bold text-[#4b2e1f]">
                      <span>Estimated Total</span>
                      <span>₹{estimatedTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-5 text-gray-500">
                    * Final bill may vary based on restaurant billing.
                  </p>
                </div>

                <div className="p-4">
                  <button
                    onClick={() => setOrderSubmitted(true)}
                    className="w-full rounded-2xl bg-[#4b2e1f] px-5 py-4 font-bold text-white shadow-lg transition hover:bg-[#321d14] active:scale-[0.99]"
                  >
                    🛎️ Show Order to Waiter
                  </button>

                  <div className="mt-6 text-center">
                    <p className="text-sm font-medium text-[#5f4938]">
                      Enjoyed your experience? ❤️
                    </p>
                    <p className="mt-1 text-xs text-[#8a7563]">
                      Your feedback helps Fry Nation grow.
                    </p>
                    <a
                      href={googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a66b] bg-white px-5 py-3 text-sm font-semibold text-[#4b2e1f] shadow-sm transition hover:bg-[#fff8ed]"
                    >
                      ⭐ Rate us on Google
                    </a>
                  </div>
                </div>
              </>
            )}

            <div className="h-8" />
          </div>
        </div>
      )}

      {/* ================= WAITER CONFIRMATION ================= */}
      {orderSubmitted && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-5">
          <div className="w-full max-w-sm rounded-3xl bg-[#f8f1e7] p-6 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
              ✓
            </div>

            <h2 className="text-2xl font-bold text-[#3b261a]">
              Order Ready!
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Please show this screen to the waiter.
            </p>

            <div className="mt-5 rounded-2xl bg-white p-4 text-left">
              <p className="mb-3 text-sm font-semibold text-gray-500">
                ORDER SUMMARY
              </p>

              {cart.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between gap-3 py-1 text-sm"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span className="shrink-0 font-semibold">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

              <div className="mt-3 border-t pt-3">
                <div className="flex justify-between font-bold">
                  <span>Estimated Total</span>
                  <span>₹{estimatedTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setOrderSubmitted(false);
                setShowOrder(false);
              }}
              className="mt-5 w-full rounded-2xl bg-[#4b2e1f] px-5 py-3 font-semibold text-white transition hover:bg-[#321d14]"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* ================= CUSTOMER ACTIONS ================= */}
      <section className="bg-[#24170f] px-5 py-16 text-center text-[#f5eadc]">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a66b]">
            Stay Connected
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            We'd love to hear from you
          </h2>
          <p className="mt-3 text-[#bda996]">
            Enjoyed your experience? Connect with us.
          </p>

          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-[#c9a66b] px-6 py-4 font-semibold text-[#24170f] shadow-lg transition hover:-translate-y-1"
          >
            ⭐ Rate us on Google
          </a>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href="https://maps.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#38251a] px-4 py-4 font-medium text-[#f5eadc] transition hover:bg-[#4b3324]"
            >
              📍 Find Us
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#38251a] px-4 py-4 font-medium text-[#f5eadc] transition hover:bg-[#4b3324]"
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+919999999999"
              className="rounded-2xl bg-[#38251a] px-4 py-4 font-medium text-[#f5eadc] transition hover:bg-[#4b3324]"
            >
              📞 Call Us
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#38251a] px-4 py-4 font-medium text-[#f5eadc] transition hover:bg-[#4b3324]"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#4b3324] bg-[#24170f] px-6 py-12 text-center text-[#f5eadc]">
        <h3 className="text-xl font-bold">Fry Nation Restro & Café</h3>
        <p className="mt-2 text-sm text-[#a9917c]">
          Thank you for visiting us.
        </p>

        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#806a58]">
            Digital menu by
          </p>
          <a
            href="https://anryzocard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-lg font-bold tracking-wide text-[#c9a66b] transition hover:opacity-70"
          >
            ANRYZO ↗
          </a>
          <p className="mt-1 text-xs text-[#927963]">
            Your Business Upgraded.
          </p>
        </div>

        <p className="mt-8 text-xs text-[#705b4b]">
          © 2026 Fry Nation Restro & Café
        </p>
      </footer>
    </main>
  );
}
