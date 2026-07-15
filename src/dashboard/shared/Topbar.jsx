import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth";
import "./Topbar.css";

function Topbar({ onMenuClick, title }) {
  const { user } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="topbar-menu-btn" onClick={onMenuClick} aria-label="Menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>{title}</h1>
      </div>

      <div className="topbar-right">
        <button className="topbar-icon-btn hover-scale" aria-label="Notifications">
          <FontAwesomeIcon icon={faBell} />
          <span className="topbar-badge">3</span>
        </button>

        <div className="topbar-user">
          <div className="topbar-user-avatar">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="topbar-user-info">
            <strong>{user?.name || "Guest User"}</strong>
            {/* ===== DYNAMIC EMAIL DISPLAY ===== */}
            <span>
              <FontAwesomeIcon icon={faEnvelope} /> {user?.email || "no-email@stackly.com"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;