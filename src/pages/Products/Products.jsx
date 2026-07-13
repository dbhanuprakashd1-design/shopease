import { useMemo, useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/product/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Category
    if (category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    // Sorting
    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [search, category, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-8 text-4xl font-bold">
        All Products
      </h1>

      {/* Filters */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search products..."
          className="rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="rounded-lg border p-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select
          className="rounded-lg border p-3"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed py-16 text-center text-gray-500">
          No products found.
        </div>
      )}
    </div>
  );
};

export default Products;