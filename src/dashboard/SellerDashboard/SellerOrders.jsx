import "./SellerDashboard.css";

const orders = [
  { id: "#ORD-9012", product: "Gaming Headset Elite", buyer: "Ravi Kumar", status: "Processing", amount: "$59.99" },
  { id: "#ORD-9013", product: "Power Bank 20000mAh", buyer: "Sneha Reddy", status: "Shipped", amount: "$24.99" },
  { id: "#ORD-9014", product: "UltraBook Pro 14", buyer: "Arjun Singh", status: "Delivered", amount: "$699.99" },
];

function SellerOrders() {
  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>Orders</h2>
        <p>Manage orders placed for your products.</p>
      </div>

      <div className="dash-table-card" data-aos="fade-up">
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
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.product}</td>
                  <td>{o.buyer}</td>
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

export default SellerOrders;