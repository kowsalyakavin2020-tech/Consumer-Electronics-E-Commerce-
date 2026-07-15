import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SellerDashboard.css";

const products = [
  { name: "Gaming Headset Elite", price: "$59.99", stock: 24, status: "Active" },
  { name: "Power Bank 20000mAh", price: "$24.99", stock: 8, status: "Active" },
  { name: "UltraBook Pro 14", price: "$699.99", stock: 0, status: "Out of Stock" },
];

function SellerProducts() {
  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>My Products</h2>
        <p>Manage your product listings.</p>
      </div>

      <div className="dash-table-card" data-aos="fade-up">
        <div className="dash-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.stock}</td>
                  <td><span className={`status-badge status-${p.status === "Active" ? "delivered" : "processing"}`}>{p.status}</span></td>
                  <td style={{ display: "flex", gap: 10 }}>
                    <FontAwesomeIcon icon={faPen} style={{ cursor: "pointer", color: "var(--color-primary)" }} />
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer", color: "#DC2626" }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SellerProducts;