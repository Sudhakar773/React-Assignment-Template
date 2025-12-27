import { Button } from "react-bootstrap";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight
} from "react-icons/fa";

interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  getVisiblePages: () => (number | string)[];
}

const Pagination: React.FC<Props> = ({
  page,
  totalPages,
  setPage,
  getVisiblePages
}) => {
  return (
    <div className="d-flex justify-content-end align-items-center mt-3">
      <Button disabled={page === 1} onClick={() => setPage(1)}>
        <FaAngleDoubleLeft />
      </Button>

      <Button disabled={page === 1} className="mx-1" onClick={() => setPage(page - 1)}>
        <FaAngleLeft />
      </Button>

      {getVisiblePages().map((p, i) =>
        p === "..." ? (
          <span key={i} className="mx-2">...</span>
        ) : (
          <Button
            key={i}
            variant={page === p ? "primary" : "outline-primary"}
            className="mx-1"
            disabled={page === p}
            onClick={() => setPage(p as number)}
          >
            {p}
          </Button>
        )
      )}

      <Button disabled={page === totalPages} className="mx-1" onClick={() => setPage(page + 1)}>
        <FaAngleRight />
      </Button>

      <Button disabled={page === totalPages} onClick={() => setPage(totalPages)}>
        <FaAngleDoubleRight />
      </Button>
    </div>
  );
};

export default Pagination;
