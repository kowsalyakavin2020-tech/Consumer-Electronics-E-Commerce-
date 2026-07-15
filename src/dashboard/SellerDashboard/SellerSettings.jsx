import { toast } from "react-toastify";
import "../shared/DashboardForms.css";

function SellerSettings() {
  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Store settings updated successfully!");
  };

  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>Store Settings</h2>
        <p>Manage your store information and preferences.</p>
      </div>

      <form className="dash-form-card" onSubmit={handleSave} data-aos="fade-up">
        <h3>Store Details</h3>
        <div className="dash-form-group">
          <label>Store Name</label>
          <input type="text" placeholder="Your Store Name" />
        </div>
        <div className="dash-form-group">
          <label>Business Email</label>
          <input type="email" placeholder="store@example.com" />
        </div>
        <div className="dash-form-group">
          <label>Support Phone</label>
          <input type="tel" placeholder="+91 98765 43210" />
        </div>
        <button type="submit" className="btn btn-primary hover-lift">Save Settings</button>
      </form>
    </div>
  );
}

export default SellerSettings;