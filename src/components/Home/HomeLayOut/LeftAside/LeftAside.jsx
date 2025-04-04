import { useEffect, useState } from "react";
import Category from "./Category/Category";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categorieItems = async () => {
      try {
        const res = await fetch(
          `https://openapi.programming-hero.com/api/news/categories`,
        );
        const data = await res.json();
        setCategories(data.data.news_category);
        console.log(data.data.news_category);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    categorieItems();
  }, []);

  return (
    <div>
      <h1>All Categories</h1>
      <div className="mt-12 flex flex-col items-start justify-center gap-5">
        {categories.map((category) => (
          <Category key={category.category_id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
