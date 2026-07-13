import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();

  const wishlistActive = isInWishlist(product.id);

  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>

        {/* New Badge */}
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
            NEW
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute right-3 top-3 rounded-full p-2 shadow transition ${
            wishlistActive
              ? "bg-red-500 text-white"
              : "bg-white text-gray-700 hover:bg-red-500 hover:text-white"
          }`}
        >
          <FiHeart />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3 p-4">
        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-2 text-lg font-semibold hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center">
          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <FiShoppingCart />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;