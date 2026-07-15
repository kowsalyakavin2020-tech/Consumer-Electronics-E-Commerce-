import "./AdminDashboard.css";

const users = [
  { name: "Ravi Kumar", email: "ravi.kumar@example.com", role: "Customer", joined: "2 days ago" },
  { name: "Sneha Reddy", email: "sneha.reddy@example.com", role: "Seller", joined: "5 days ago" },
  { name: "Arjun Singh", email: "arjun.singh@example.com", role: "Customer", joined: "1 week ago" },
  { name: "Meera Iyer", email: "meera.iyer@example.com", role: "Customer", joined: "2 weeks ago" },
];

function AdminUsers() {
  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>All Users</h2>
        <p>Manage registered customers and their accounts.</p>
      </div>

      <div className="dash-table-card" data-aos="fade-up">
        <div className="dash-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.email}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td><span className="status-badge status-processing">{u.role}</span></td>
                  <td>{u.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;