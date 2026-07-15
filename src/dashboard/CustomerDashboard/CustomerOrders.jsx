import "./CustomerDashboard.css";

const orders = [
  { id: "#ORD-1234", product: "Wireless Earbuds Pro", date: "Jul 5, 2026", status: "Delivered", amount: "$49.99" },
  { id: "#ORD-1235", product: "Smart Watch Series X", date: "Jul 8, 2026", status: "Shipped", amount: "$89.99" },
  { id: "#ORD-1236", product: "Bluetooth Speaker Max", date: "Jul 10, 2026", status: "Processing", amount: "$34.99" },
  { id: "#ORD-1237", product: "Gaming Headset Elite", date: "Jun 28, 2026", status: "Delivered", amount: "$59.99" },
];

function CustomerOrders() {
  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>My Orders</h2>
        <p>Track and manage all your past and current orders.</p>
      </div>

      <div className="dash-table-card" data-aos="fade-up">
        <div className="dash-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.product}</td>
                  <td>{o.date}</td>
                  <td><span className={`status-badge status-${o.status.toLowerCase()}`}>{o.status}</span></td>
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

export default CustomerOrders;