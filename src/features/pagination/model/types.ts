export interface IPaginationProps {
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  totalPages: number;
  currentPage: number;
}
