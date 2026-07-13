const CategoryCard = ({ category }) => {
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={category.image}
        alt={category.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">
          {category.name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;