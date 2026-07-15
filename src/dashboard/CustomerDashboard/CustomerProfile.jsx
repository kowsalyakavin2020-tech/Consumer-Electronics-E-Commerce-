import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import "../shared/DashboardForms.css";

function CustomerProfile() {
  const { user } = useAuth();

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>My Profile</h2>
        <p>Manage your personal information.</p>
      </div>

      <form className="dash-form-card" onSubmit={handleSave} data-aos="fade-up">
        <h3>Personal Details</h3>
        <div className="dash-form-group">
          <label>Full Name</label>
          <input type="text" defaultValue={user?.name || ""} />
        </div>
        <div className="dash-form-group">
          <label>Email Address</label>
          <input type="email" defaultValue={user?.email || ""} />
        </div>
        <div className="dash-form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="+91 98765 43210" />
        </div>
        <button type="submit" className="btn btn-primary hover-lift">Save Changes</button>
      </form>
    </div>
  );
}

export default CustomerProfile;