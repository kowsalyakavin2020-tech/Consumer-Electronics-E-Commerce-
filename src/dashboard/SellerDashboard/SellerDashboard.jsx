import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faBoxOpen, faDollarSign, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth";
import "./SellerDashboard.css";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

function SellerDashboard() {
  const { user } = useAuth();

  const stats = [
    { icon: faStore, label: "Active Products", value: "24", color: "primary" },
    { icon: faBoxOpen, label: "Pending Orders", value: "6", color: "accent" },
    { icon: faDollarSign, label: "Total Revenue", value: "$8,420", color: "secondary" },
    { icon: faChartLine, label: "Growth", value: "+18%", color: "primary" },
  ];

  const recentOrders = [
    { id: "#ORD-9012", product: "Gaming Headset Elite", buyer: "Ravi Kumar", status: "Processing", amount: "$59.99" },
    { id: "#ORD-9013", product: "Power Bank 20000mAh", buyer: "Sneha Reddy", status: "Shipped", amount: "$24.99" },
    { id: "#ORD-9014", product: "UltraBook Pro 14", buyer: "Arjun Singh", status: "Delivered", amount: "$699.99" },
  ];

  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>
  Welcome back, {user?.name || "Seller"}{" "}
  <FontAwesomeIcon icon={faHandHoldingHeart} className="welcome-icon" />
</h2>
        <p>Here's an overview of your store performance.</p>
      </div>

      <div className="dash-stats-grid">
        {stats.map((s, i) => (
          <div className="dash-stat-card hover-lift" key={s.label} data-aos="fade-up" data-aos-delay={i * 80}>
            <div className={`dash-stat-icon icon-${s.color}`}>
              <FontAwesomeIcon icon={s.icon} />
            </div>
            <div>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dash-table-card" data-aos="fade-up">
        <div className="dash-table-header">
          <h3>Recent Orders</h3>
        </div>
        <div className="dash-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Buyer</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.product}</td>
                  <td>{o.buyer}</td>
                  <td>
                    <span className={`status-badge status-${o.status.toLowerCase()}`}>
                      {o.status}
                    </span>
                  </td>
                  <td>{o.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;