import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  
const { createOrder } = useOrders();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    payment: "Cash On Delivery",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = (e) => {
  e.preventDefault();

  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    country,
    pincode,
    payment,
  } = formData;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !address ||
    !city ||
    !state ||
    !country ||
    !pincode
  ) {
    alert("Please fill all required fields.");
    return;
  }

  createOrder(cartItems, totalPrice, {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    country,
    pincode,
    payment,
  });

  clearCart();

  alert("Order Placed Successfully!");

  navigate("/orders");
};

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h1 className="text-3xl font-bold">
          Your Cart is Empty
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4">

        <h1 className="mb-8 text-4xl font-bold">
          Checkout
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Shipping Form */}

          <form
            onSubmit={handlePlaceOrder}
            className="rounded-xl bg-white p-6 shadow lg:col-span-2"
          >
            <h2 className="mb-6 text-2xl font-semibold">
              Shipping Address
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="rounded-lg border p-3 outline-none focus:border-blue-500"
              />

            </div>

            <textarea
              name="address"
              placeholder="Full Address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
              className="mt-5 w-full rounded-lg border p-3 outline-none focus:border-blue-500"
            />

            <h2 className="mb-4 mt-8 text-2xl font-semibold">
              Payment Method
            </h2>

            <div className="space-y-3">

              {[
                "Cash On Delivery",
                "Credit Card",
                "Debit Card",
                "UPI",
                "Net Banking",
              ].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-3"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={formData.payment === method}
                    onChange={handleChange}
                  />

                  {method}
                </label>
              ))}

            </div>

            <button
              type="submit"
              className="mt-8 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Place Order
            </button>

          </form>

          {/* Order Summary */}

          <div className="h-fit rounded-xl bg-white p-6 shadow">

            <h2 className="mb-6 text-2xl font-semibold">
              Order Summary
            </h2>

            <div className="space-y-5">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-4 border-b pb-4"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      Quantity : {item.quantity}
                    </p>

                    <p className="font-bold text-blue-600">
                      ₹{item.price}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            <div className="mt-6 space-y-3">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹0</span>
              </div>

              <hr />

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Checkout;