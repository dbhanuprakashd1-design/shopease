import products from "../../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Featured Products</h2>

        <button className="rounded-lg border px-4 py-2 hover:bg-gray-100">
          View All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;