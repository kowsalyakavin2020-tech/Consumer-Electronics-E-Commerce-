import { toast } from "react-toastify";
import "../shared/DashboardForms.css";

function AdminSettings() {
  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Platform settings updated successfully!");
  };

  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>Platform Settings</h2>
        <p>Manage global platform configuration.</p>
      </div>

      <form className="dash-form-card" onSubmit={handleSave} data-aos="fade-up">
        <h3>General Settings</h3>
        <div className="dash-form-group">
          <label>Platform Name</label>
          <input type="text" defaultValue="Stackly" />
        </div>
        <div className="dash-form-group">
          <label>Support Email</label>
          <input type="email" defaultValue="support@stackly.com" />
        </div>
        <div className="dash-form-group">
          <label>Commission Rate (%)</label>
          <input type="number" defaultValue="5" />
        </div>
        <button type="submit" className="btn btn-primary hover-lift">Save Settings</button>
      </form>
    </div>
  );
}

export default AdminSettings;