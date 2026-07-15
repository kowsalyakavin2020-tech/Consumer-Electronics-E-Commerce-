import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
  faUser,
  faUserPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../hooks/useCart";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleLogoClick = (e) => {
  e.preventDefault();
  closeMenu();
  if (location.pathname === "/") {
    window.location.reload();
  } else {
    navigate("/");
  }
};

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo" onClick={handleLogoClick}>
          <img src="/images/logo/logo.webp" alt="Stackly Logo" />
        </Link>

        <nav className={`header-nav ${menuOpen ? "nav-open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={location.pathname === link.path ? "nav-active" : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn hover-scale"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <div className="account-dropdown-wrap">
  <button
    className="icon-btn hover-scale"
    aria-label="Account"
    onClick={() => setAccountOpen(!accountOpen)}
  >
    <FontAwesomeIcon icon={faUser} />
  </button>

  {accountOpen && (
    <div className="account-dropdown">
      <Link to="/login" onClick={() => { setAccountOpen(false); closeMenu(); }}>
        <FontAwesomeIcon icon={faUser} /> Login
      </Link>
      <Link to="/signup" onClick={() => { setAccountOpen(false); closeMenu(); }}>
        <FontAwesomeIcon icon={faUserPlus} /> Sign Up
      </Link>
    </div>
  )}
</div>
          <Link to="/cart" className="icon-btn hover-scale cart-btn" aria-label="Cart" onClick={closeMenu}>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="search-overlay">
          <form className="search-form container" onSubmit={handleSearchSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="button" onClick={() => setSearchOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;