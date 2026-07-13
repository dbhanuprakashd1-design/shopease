import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const Wishlist = () => {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4">
        <FiHeart className="mb-5 text-7xl text-gray-300" />

        <h1 className="text-4xl font-bold">
          Your Wishlist is Empty
        </h1>

        <p className="mt-3 text-gray-500">
          Save your favourite products here.
        </p>

        <Link
          to="/products"
          className="mt-8 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          My Wishlist
        </h1>

        <p className="text-gray-500">
          {wishlistItems.length} Item(s)
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlistItems.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />
            </Link>

            <div className="space-y-3 p-4">
              <p className="text-sm text-gray-500">
                {product.category}
              </p>

              <Link to={`/product/${product.id}`}>
                <h2 className="text-lg font-semibold hover:text-blue-600">
                  {product.name}
                </h2>
              </Link>

              <div className="flex items-center">
                <span className="text-yellow-500">
                  ⭐ {product.rating}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-600">
                  ₹{product.price}
                </span>

                <span className="text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => addToCart(product)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700"
                >
                  <FiShoppingCart />
                  Add To Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="rounded-lg bg-red-500 p-3 text-white transition hover:bg-red-600"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;