import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import type { Product } from "./../Product";
import ProductTable from "./ProductTable";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";

export type SortKey = "name" | "price" | "stock" | "createdAt" | "isActive" | "category" | "";
export type SortOrder = "asc" | "desc";

interface Props {
  products: Product[];
  setEditProduct: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, setEditProduct }) => {
  const [view, setView] = useState<"list" | "card">("list");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [sortKey, setSortKey] = useState<SortKey>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const perPage = view === "list" ? 10 : 4;

  const [debouncedSearch, setDebouncedSearch] = useState(search);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(t);
  }, [search]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setPage(1), [search, view]);

  //  FILTER
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // SORT
  const sorted = [...filtered].sort((a, b) => {
    if (!sortKey) return 0;

    const valA = a[sortKey];
    const valB = b[sortKey];

    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (page >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    }
    return pages;
  };

  return (
    <div>
      <div className="mb-3 d-flex">
        <input
          className="form-control w-25"
          placeholder="Search Name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="ms-auto">
          <Button
            className="me-2"
            variant={view === "list" ? "primary" : "secondary"}
            onClick={() => setView("list")}
          >
            List
          </Button>
          <Button
            variant={view === "card" ? "primary" : "secondary"}
            onClick={() => setView("card")}
          >
            Card
          </Button>
        </div>
      </div>

      {view === "list" ? (
        <ProductTable
          data={paginated}
          onEdit={setEditProduct}
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSort={handleSort}
        />
      ) : (
        <ProductCards data={paginated} onEdit={setEditProduct} />
      )}

      {/* PAGINATION */}
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        getVisiblePages={getVisiblePages}
      />
    </div>
  );
};

export default ProductList;
