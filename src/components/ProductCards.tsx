import { Card, Button } from "react-bootstrap";
import type { Product } from "./../Product";

interface Props {
  data: Product[];
  onEdit: (product: Product) => void;
}

const ProductCards: React.FC<Props> = ({ data, onEdit }) => {
  return (
    <div className="d-flex flex-wrap">
      {data.map(p => (
        <Card key={p.id} style={{ width: "17rem", marginRight: "10px" }}>
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {p.category}
            </Card.Subtitle>

            <Card.Text>
              <strong>Price:</strong> ₹{p.price}<br />
              <strong>Stock:</strong> {p.stock}<br />
              <strong>Status:</strong>{" "}
              <span className={p.isActive ? "text-success" : "text-danger"}>
                {p.isActive ? "Active" : "Inactive"}
              </span><br />
              <strong>Created:</strong>{" "}
              {new Date(p.createdAt).toLocaleDateString()}
            </Card.Text>

            <div className="mb-2">
              {p.tags.map((tag, i) => (
                <span key={i} className="badge bg-secondary me-1">
                  {tag}
                </span>
              ))}
            </div>

            <Button size="sm" onClick={() => onEdit(p)}>Edit</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductCards;
