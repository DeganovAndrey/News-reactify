import { ForwardedRef, forwardRef } from "react";
import s from "./Categories.module.css";
import { CategoriesType } from "@/entities/category";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={s.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? s.active : s.item}
        >
          All
        </button>

        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? s.active : s.item}
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
