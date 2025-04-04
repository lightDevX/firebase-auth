import React from "react";
import { NavLink } from "react-router";
const Category = ({ category }) => {
  const { category_name, category_id } = category;
  return (
    <div>
      <NavLink
        to={`/category/${category_id}`}
        className="rounded-md px-8 py-2.5 text-neutral-900/60 active:bg-neutral-800/50 active:text-neutral-900"
      >
        {category_name}
      </NavLink>
    </div>
  );
};

export default Category;
