import { toast } from "react-toastify";
import "../shared/DashboardForms.css";

function CustomerSettings() {
  const handleToggle = (label) => toast.success(`${label} preference updated`);

  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>Settings</h2>
        <p>Manage your account preferences.</p>
      </div>

      <div className="dash-form-card" data-aos="fade-up">
        <h3>Notifications</h3>
        <div className="dash-toggle-row">
          <div>
            <strong>Email Notifications</strong>
            <span>Get order updates via email</span>
          </div>
          <label className="dash-switch">
            <input type="checkbox" defaultChecked onChange={() => handleToggle("Email Notifications")} />
            <span className="dash-switch-slider"></span>
          </label>
        </div>
        <div className="dash-toggle-row">
          <div>
            <strong>SMS Alerts</strong>
            <span>Get delivery alerts via SMS</span>
          </div>
          <label className="dash-switch">
            <input type="checkbox" onChange={() => handleToggle("SMS Alerts")} />
            <span className="dash-switch-slider"></span>
          </label>
        </div>
        <div className="dash-toggle-row">
          <div>
            <strong>Marketing Emails</strong>
            <span>Receive offers and promotions</span>
          </div>
          <label className="dash-switch">
            <input type="checkbox" defaultChecked onChange={() => handleToggle("Marketing Emails")} />
            <span className="dash-switch-slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CustomerSettings;