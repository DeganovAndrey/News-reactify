import { useTheme } from "../../context/ThemeContext";
import { IFilters } from "../../helpers/interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilters } from "../../store/slices/newsSlice";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import s from "./NewsFilters.module.css";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const dispatch = useAppDispatch();

  const { isDark } = useTheme();

  const { data } = useGetCategoriesQuery(null);

  return (
    <div className={s.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
