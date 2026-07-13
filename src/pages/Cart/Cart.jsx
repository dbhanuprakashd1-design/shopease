import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-7xl py-20 text-center">
        <h1 className="text-4xl font-bold">
          Your Cart is Empty
        </h1>

        <p className="mt-4 text-gray-500">
          Add products to continue shopping.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">

      <h1 className="mb-10 text-4xl font-bold">
        Shopping Cart
      </h1>

      <div className="grid gap-10 lg:grid-cols-3">

        {/* Products */}

        <div className="space-y-6 lg:col-span-2">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex flex-col gap-6 rounded-xl bg-white p-5 shadow md:flex-row"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-40 rounded-lg object-cover"
              />

              <div className="flex-1">

                <h2 className="text-2xl font-semibold">
                  {item.name}
                </h2>

                <p className="mt-2 text-gray-500">
                  {item.category}
                </p>

                <p className="mt-4 text-2xl font-bold text-blue-600">
                  ₹{item.price}
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded-lg bg-gray-200 p-2"
                  >
                    <FiMinus />
                  </button>

                  <span className="text-lg font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded-lg bg-gray-200 p-2"
                  >
                    <FiPlus />
                  </button>

                </div>

              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="self-start text-red-500 hover:text-red-700"
              >
                <FiTrash2 size={22} />
              </button>

            </div>

          ))}

        </div>

        {/* Summary */}

        <div className="h-fit rounded-xl bg-gray-100 p-6">

          <h2 className="mb-6 text-2xl font-bold">
            Order Summary
          </h2>

          <div className="mb-4 flex justify-between">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="mb-4 flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="mt-4 flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <Link
  to="/checkout"
  className="mt-8 block w-full rounded-lg bg-blue-600 py-3 text-center text-white hover:bg-blue-700"
>
  Proceed to Checkout
</Link>

        </div>

      </div>

    </div>
  );
};

export default Cart;