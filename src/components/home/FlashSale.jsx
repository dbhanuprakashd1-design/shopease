import products from "../../data/products";
import ProductCard from "../product/ProductCard";

const FlashSale = () => {
  // Show first 4 products
  const flashProducts = products.slice(0, 4);

  return (
    <section className="bg-orange-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-orange-600">
              ⚡ Flash Sale
            </h2>
            <p className="mt-2 text-gray-600">
              Limited-time deals on popular products.
            </p>
          </div>

          <div className="rounded-lg bg-orange-500 px-4 py-2 text-white font-semibold">
            Ends in: 12:34:56
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flashProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;