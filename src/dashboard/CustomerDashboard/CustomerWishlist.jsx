import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import product01 from "../../assets/images/products/product-01.webp";
import product02 from "../../assets/images/products/product-02.webp";
import product03 from "../../assets/images/products/product-03.webp";
import "./CustomerDashboard.css";

const wishlist = [
  { name: "Wireless Earbuds Pro", price: "$49.99", img: product01 },
  { name: "Smart Watch Series X", price: "$89.99", img: product02 },
  { name: "Bluetooth Speaker Max", price: "$34.99", img: product03 },
];

function CustomerWishlist() {
  return (
    <div className="dash-page">
      <div className="dash-welcome" data-aos="fade-up">
        <h2>My Wishlist</h2>
        <p>Products you've saved for later.</p>
      </div>

      <div className="dash-stats-grid">
        {wishlist.map((item, i) => (
          <div className="dash-stat-card hover-lift" key={item.name} data-aos="fade-up" data-aos-delay={i * 80}>
            <img src={item.img} alt={item.name} style={{ width: 52, height: 52, objectFit: "contain" }} />
            <div>
              <h3 style={{ fontSize: 15 }}>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerWishlist;