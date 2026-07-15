import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import "./SellerDashboard.css";

const metrics = [
  { label: "This Month Revenue", value: "$8,420", trend: "+18%", up: true },
  { label: "Orders This Month", value: "142", trend: "+12%", up: true },
  { label: "Return Rate", value: "2.1%", trend: "-0.5%", up: false },
  { label: "Avg. Order Value", value: "$59.30", trend: "+4%", up: true },
];

function SellerAnalytics() {
  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>Analytics</h2>
        <p>Track your store's performance over time.</p>
      </div>

      <div className="dash-stats-grid">
        {metrics.map((m, i) => (
          <div className="dash-stat-card hover-lift" key={m.label} data-aos="fade-up" data-aos-delay={i * 80}>
            <div className={`dash-stat-icon icon-${m.up ? "primary" : "accent"}`}>
              <FontAwesomeIcon icon={m.up ? faArrowTrendUp : faArrowTrendDown} />
            </div>
            <div>
              <h3>{m.value}</h3>
              <p>{m.label} ({m.trend})</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dash-table-card" data-aos="fade-up" style={{ padding: 28 }}>
        <h3 style={{ marginBottom: 16 }}>Sales Overview</h3>
        <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
          Detailed charts coming soon. Your store has shown consistent growth over the past 30 days,
          with audio products being your top-performing category.
        </p>
      </div>
    </div>
  );
}

export default SellerAnalytics;