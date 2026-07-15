import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faGauge,
  faBoxOpen,
  faHeart,
  faUser,
  faGear,
  faRightFromBracket,
  faStore,
  faChartLine,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../hooks/useAuth";
import "./Sidebar.css";

const menuByRole = {
  customer: [
    { name: "Overview", icon: faGauge, path: "/dashboard/customer" },
    { name: "My Orders", icon: faBoxOpen, path: "/dashboard/customer/orders" },
    { name: "Wishlist", icon: faHeart, path: "/dashboard/customer/wishlist" },
    { name: "Profile", icon: faUser, path: "/dashboard/customer/profile" },
    { name: "Settings", icon: faGear, path: "/dashboard/customer/settings" },
  ],
  seller: [
    { name: "Overview", icon: faGauge, path: "/dashboard/seller" },
    { name: "My Products", icon: faStore, path: "/dashboard/seller/products" },
    { name: "Orders", icon: faBoxOpen, path: "/dashboard/seller/orders" },
    { name: "Analytics", icon: faChartLine, path: "/dashboard/seller/analytics" },
    { name: "Settings", icon: faGear, path: "/dashboard/seller/settings" },
  ],
  admin: [
    { name: "Overview", icon: faGauge, path: "/dashboard/admin" },
    { name: "Users", icon: faUsers, path: "/dashboard/admin/users" },
    { name: "Sellers", icon: faStore, path: "/dashboard/admin/sellers" },
    { name: "Orders", icon: faBoxOpen, path: "/dashboard/admin/orders" },
    { name: "Settings", icon: faGear, path: "/dashboard/admin/settings" },
  ],
};

function Sidebar({ role, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const menu = menuByRole[role] || [];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar-logo">
        <img src="/images/logo/logo.webp" alt="Stackly" />
      </Link>
      <button className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
  <FontAwesomeIcon icon={faXmark} />
</button>

      <nav className="sidebar-nav">
        <ul>
          {menu.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? "sidebar-active" : ""}
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="sidebar-logout" onClick={handleLogout}>
        <FontAwesomeIcon icon={faRightFromBracket} />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;