import { useTheme } from "@/app/providers/ThemeProvider";
import { IPaginationProps } from "../../model/types";
import s from "./PaginationButtons.module.css";

const PaginationButtons = ({
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  totalPages,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div className={`${s.pagination} ${isDark ? s.dark : s.light}`}>
      <button
        onClick={handlePreviousPage}
        className={s.arrow}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={s.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={s.pageNumber}
              key={index}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNextPage}
        className={s.arrow}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginationButtons;
