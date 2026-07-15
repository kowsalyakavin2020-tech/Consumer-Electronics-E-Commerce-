import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStore, faBoxOpen, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth";
import "./AdminDashboard.css";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    { icon: faUsers, label: "Total Users", value: "1,240", color: "primary" },
    { icon: faStore, label: "Active Sellers", value: "86", color: "accent" },
    { icon: faBoxOpen, label: "Total Orders", value: "3,420", color: "secondary" },
    { icon: faDollarSign, label: "Platform Revenue", value: "$42,180", color: "primary" },
  ];

  const recentUsers = [
    { name: "Ravi Kumar", email: "ravi.kumar@example.com", role: "Customer", joined: "2 days ago" },
    { name: "Sneha Reddy", email: "sneha.reddy@example.com", role: "Seller", joined: "5 days ago" },
    { name: "Arjun Singh", email: "arjun.singh@example.com", role: "Customer", joined: "1 week ago" },
  ];

  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>
  Welcome back, {user?.name || "Admin"}{" "}
  <FontAwesomeIcon icon={faHandHoldingHeart} className="welcome-icon" />
</h2>
        <p>Here's the platform overview for today.</p>
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
          <h3>Recently Joined Users</h3>
        </div>
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
              {recentUsers.map((u) => (
                <tr key={u.email}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span className="status-badge status-processing">{u.role}</span>
                  </td>
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

export default AdminDashboard;