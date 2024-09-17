import useFetch from "./useFetch";
import CategoryList from "./CategoryList";
import ProductController from "./ProductController";

const categoryUrl = "https://fakestoreapi.com/products/categories";

const CategoryController = ({ selectedCategory, handleCategoryChange }) => {
  const { data: categories, loading, error } = useFetch(categoryUrl);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 id="page-title">Products</h1>
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <ProductController selectedCategory={selectedCategory} />
    </div>
  );
};

export default CategoryController;
