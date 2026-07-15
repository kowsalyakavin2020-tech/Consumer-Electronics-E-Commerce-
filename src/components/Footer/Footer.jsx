import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
const location = useLocation();

const handleHomeClick = (e) => {
  e.preventDefault();
  if (location.pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    navigate("/");
  }
};
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-col footer-brand">
  <Link to="/" onClick={handleHomeClick}>
    <img src="/images/logo/logo.webp" alt="Stackly Logo" className="footer-logo" />
  </Link>
          <p>
            Your trusted destination for the latest electronics — quality
            products, honest prices, and fast delivery worldwide.
          </p>
          <div className="footer-socials">
            <Link to="/facebook" aria-label="Facebook" className="hover-scale"><FontAwesomeIcon icon={faFacebookF} /></Link>
<Link to="/instagram" aria-label="Instagram" className="hover-scale"><FontAwesomeIcon icon={faInstagram} /></Link>
<Link to="/twitter" aria-label="Twitter" className="hover-scale"><FontAwesomeIcon icon={faTwitter} /></Link>
<Link to="/youtube" aria-label="Youtube" className="hover-scale"><FontAwesomeIcon icon={faYoutube} /></Link>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul className="footer-contact">
            <li><FontAwesomeIcon icon={faLocationDot} /> MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, Salem, Tamil Nadu 636008</li>
            <li><FontAwesomeIcon icon={faPhone} /> +91 98765 43210</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> support@stackly.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Stackly. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;