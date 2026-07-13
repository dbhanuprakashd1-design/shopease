import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import products from "../../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <span> / </span>

        <Link to="/products" className="hover:text-blue-600">
          Products
        </Link>

        <span> / </span>

        <span className="font-medium text-gray-800">
          {product.name}
        </span>
      </div>

      {/* Product Details */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="h-[500px] w-full rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-blue-600">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-yellow-500 text-lg">
              ⭐ {product.rating}
            </span>

            <span className="text-gray-400">
              (245 Reviews)
            </span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl font-bold text-blue-600">
              ₹{product.price}
            </span>

            <span className="text-2xl text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="mt-8 leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => addToCart(product)}
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Add To Cart
            </button>

            <button className="rounded-lg border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
              Buy Now
            </button>
          </div>

          {/* Product Info */}
          <div className="mt-10 space-y-3 rounded-xl bg-gray-100 p-6">
            <div className="flex justify-between">
              <span className="font-medium">Category</span>
              <span>{product.category}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Availability</span>
              <span className="text-green-600">
                In Stock
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Delivery</span>
              <span>2 - 4 Days</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Shipping</span>
              <span>Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold">
          Related Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="mt-2 text-blue-600 font-bold">
                  ₹{item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;