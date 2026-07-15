import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faHeart, faWallet, faStar } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth";
import "./CustomerDashboard.css";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

function CustomerDashboard() {
  const { user } = useAuth();

  const stats = [
    { icon: faBoxOpen, label: "Total Orders", value: "12", color: "primary" },
    { icon: faHeart, label: "Wishlist Items", value: "8", color: "accent" },
    { icon: faWallet, label: "Total Spent", value: "$1,240", color: "secondary" },
    { icon: faStar, label: "Reward Points", value: "350", color: "primary" },
  ];

  const recentOrders = [
    { id: "#ORD-1234", product: "Wireless Earbuds Pro", status: "Delivered", amount: "$49.99" },
    { id: "#ORD-1235", product: "Smart Watch Series X", status: "Shipped", amount: "$89.99" },
    { id: "#ORD-1236", product: "Bluetooth Speaker Max", status: "Processing", amount: "$34.99" },
  ];

  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>
  Welcome back, {user?.name || "Customer"}{" "}
  <FontAwesomeIcon icon={faHandHoldingHeart} className="welcome-icon" />
</h2>
        <p>Here's what's happening with your account today.</p>
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
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.product}</td>
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

export default CustomerDashboard;