import "./AdminDashboard.css";

const sellers = [
  { name: "TechWorld Store", email: "contact@techworld.com", products: 34, status: "Verified" },
  { name: "GadgetHub", email: "info@gadgethub.com", products: 21, status: "Verified" },
  { name: "ElectroMart", email: "support@electromart.com", products: 8, status: "Pending" },
];

function AdminSellers() {
  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>All Sellers</h2>
        <p>Manage seller accounts and verification status.</p>
      </div>

      <div className="dash-table-card" data-aos="fade-up">
        <div className="dash-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Store Name</th>
                <th>Email</th>
                <th>Products</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((s) => (
                <tr key={s.email}>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.products}</td>
                  <td><span className={`status-badge status-${s.status === "Verified" ? "delivered" : "processing"}`}>{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminSellers;