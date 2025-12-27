import { Table, Button } from "react-bootstrap";
import type { Product } from "../Product";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import type { SortKey, SortOrder } from "./ProductList";

interface Props {
  data: Product[];
  onEdit: (product: Product) => void;
  sortKey: SortKey;
  sortOrder: SortOrder;
  onSort: (key: SortKey) => void;
}

const SortIcon = ({
  column,
  sortKey,
  sortOrder
}: {
  column: SortKey;
  sortKey: SortKey;
  sortOrder: SortOrder;
}) => {
  if (sortKey !== column) return <FaSort />;
  return sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />;
};

const ProductTable: React.FC<Props> = ({
  data,
  onEdit,
  sortKey,
  sortOrder,
  onSort
}) => {
  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      <Table striped bordered hover responsive>
        <thead className="table-primary" style={{ position: "sticky", top: 0, zIndex: 2 }}>
          <tr>
            <th onClick={() => onSort("name")} style={{ cursor: "pointer" }}>
              Name <SortIcon column="name" sortKey={sortKey} sortOrder={sortOrder} />
            </th>
            <th onClick={() => onSort("price")} style={{ cursor: "pointer" }}>
              Price ₹ <SortIcon column="price" sortKey={sortKey} sortOrder={sortOrder} />
            </th>
            <th onClick={() => onSort("category")} style={{ cursor: "pointer" }}>
              Category <SortIcon column="category" sortKey={sortKey} sortOrder={sortOrder} />
            </th>
            <th onClick={() => onSort("stock")} style={{ cursor: "pointer" }}>
              Stock <SortIcon column="stock" sortKey={sortKey} sortOrder={sortOrder} />
            </th>
            <th onClick={() => onSort("isActive")} style={{ cursor: "pointer" }}>
              Status <SortIcon column="isActive" sortKey={sortKey} sortOrder={sortOrder} />
            </th>
            <th onClick={() => onSort("createdAt")} style={{ cursor: "pointer" }}>
              Created <SortIcon column="createdAt" sortKey={sortKey} sortOrder={sortOrder} />
            </th>
            <th>Tags </th>
            <th>Description </th>
            <th>Action </th>
          </tr>
        </thead>

        <tbody>
          {data.map(p => (
            <tr key={p.id}>
              <td style={{minWidth:"100px"}}>{p.name}</td>
              <td style={{minWidth:"100px"}} >{p.price}</td>
              <td style={{minWidth:"120px"}}>{p.category}</td>
              <td style={{minWidth:"100px"}}>{p.stock}</td>
              <td style={{minWidth:"120px"}} className={p.isActive ? "text-success" : "text-danger"}>
                {p.isActive ? "Active" : "Inactive"}
              </td>
              <td style={{minWidth:"120px"}}>{new Date(p.createdAt).toLocaleDateString()}</td>
              <td style={{minWidth:"120px"}}>{p.tags.join(", ")}</td>
              <td style={{minWidth:"120px"}}>{p.description}</td>
              <td>
                <Button size="sm" onClick={() => onEdit(p)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
