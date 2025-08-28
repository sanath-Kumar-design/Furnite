import { useState, useEffect } from "react";
import Header from "../components/Header";
import { getCart } from "../Utils/cartUtil";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cart"));
    setCart(Array.isArray(savedCart) ? savedCart : []);
  }, []);

  const removeItem = (id) => {
    let updatedCart = cart.filter(item => item.id !== id);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  
  const updateQty = (id, qty) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, qty } : item
    );
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex justify-center">
      <div className="p-4 flex flex-col md:flex-row gap-6 md:gap-8 max-w-7xl w-full">
        <div className="max-w-xl w-full ">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-4 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
              <p className="font-bold text-xl md:text-3xl text-gray-400">
                Your Cart Is Empty!
              </p>
              <img
                className="w-64 md:w-96"
                src="https://i.pinimg.com/1200x/47/07/f4/4707f4138db3ff7930a081dc17974fd8.jpg"
                alt="Empty cart"
              />
            </div>
          ) : (
            cart.map((item, i) => (

              <div
                key={i}
                className="flex flex-row sm:flex-row gap-4 shadow-xl rounded-lg p-4 mt-4"
              >
                <div className="flex-shrink-0 w-full max-w-[150px] sm:max-w-[150px] md:w-[170px] max-h-[150px] rounded-md overflow-hidden">

                  <img
                    src={item.image_path}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 px-2">
                  <div>
                    <h2 className="font-semibold text-lg ml-0">{item.name}</h2>
                    <p className="font-semibold mt-2">${item.price}</p>
                    <p className="text-[12px] mt-1 text-green-500">Item in stock</p>
                    <p className="text-[12px] whitespace-nowrap mt-1 md:text-[14px]">Available for free shipping</p>
                  </div>
                  <div className="flex flex-row items-center sm:items-center gap-3 mt-4 sm:mt-2 justify-between rounded-lg text-sm md:text-md">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, parseInt(e.target.value))
                      }
                      className="rounded py-1 pr-2 ml-0"
                    >
                      {[...Array(10)].map((_, idx) => (
                        <option key={idx} value={idx + 1}>
                          Qty: {idx + 1}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-red-500 cursor-pointer"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="w-full md:w-[300px] max-h-fit px-6 py-5 rounded-lg shadow-2xl mt-4 md:mt-0 flex flex-col items-center">
            <h1 className="font-bold text-lg">Confirm Your Order</h1>
            <p className="mt-2 text-center whitespace-nowrap">
              Subtotal (
              {cart.reduce((total, item) => total + item.qty, 0)} Items) =
              ${cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
            </p>
            <button className="bg-yellow-400 px-5 py-2 mt-4 rounded-3xl w-full md:w-auto cursor-pointer">
              Proceed to Buy
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default Cart;
