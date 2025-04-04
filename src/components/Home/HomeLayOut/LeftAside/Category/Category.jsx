import React from "react";
import { NavLink } from "react-router";
const Category = ({ category }) => {
  const { category_name, category_id } = category;
  return (
    <div>
      <NavLink
        to={`/category/${category_id}`}
        className={({ isActive }) =>
          `rounded-md px-8 py-2.5 ${
            isActive
              ? "bg-neutral-800 text-neutral-100"
              : "text-neutral-900/60 hover:bg-neutral-100"
          }`
        }
      >
        {category_name}
      </NavLink>
    </div>
  );
};

export default Category;
