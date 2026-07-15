import "./AdminDashboard.css";

const orders = [
  { id: "#ORD-1234", customer: "Ravi Kumar", seller: "TechWorld Store", status: "Delivered", amount: "$49.99" },
  { id: "#ORD-1235", customer: "Sneha Reddy", seller: "GadgetHub", status: "Shipped", amount: "$89.99" },
  { id: "#ORD-1236", customer: "Arjun Singh", seller: "ElectroMart", status: "Processing", amount: "$34.99" },
];

function AdminOrders() {
  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>All Orders</h2>
        <p>Monitor all orders across the platform.</p>
      </div>

      <div className="dash-table-card" data-aos="fade-up">
        <div className="dash-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Seller</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.seller}</td>
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

export default AdminOrders;