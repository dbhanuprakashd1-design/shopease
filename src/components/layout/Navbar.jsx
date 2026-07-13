import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
} from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { totalItems } = useCart();
  const { wishlistItems } = useWishlist();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Orders", path: "/orders" },
    { name: "Profile", path: "/profile" },
  ];

  const activeClass =
    "text-blue-600 font-semibold";

  const normalClass =
    "text-gray-700 hover:text-blue-600 transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          ShopEase
        </Link>

        {/* Search */}
        <div className="relative hidden lg:block w-96">
          <FiSearch
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden items-center gap-6 lg:flex">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative"
          >
            <FiHeart size={22} />

            {wishlistItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {wishlistItems.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative"
          >
            <FiShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link to="/profile">
            <FiUser size={22} />
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? (
            <FiX size={28} />
          ) : (
            <FiMenu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white lg:hidden">

          <div className="space-y-4 p-4">

            <div className="relative">

              <FiSearch
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border py-2 pl-10 pr-4"
              />

            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "font-semibold text-blue-600"
                      : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex gap-6 pt-2">

              <Link
                to="/wishlist"
                className="relative"
              >
                <FiHeart size={22} />

                {wishlistItems.length > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative"
              >
                <FiShoppingCart size={22} />

                {totalItems > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                    {totalItems}
                  </span>
                )}
              </Link>

              <Link to="/profile">
                <FiUser size={22} />
              </Link>

            </div>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;