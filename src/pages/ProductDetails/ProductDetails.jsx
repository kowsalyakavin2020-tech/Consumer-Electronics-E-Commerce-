import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faHeart,
  faTruckFast,
  faShieldHalved,
  faRotate,
  faMinus,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";

import product01 from "../../assets/images/products/product-01.webp";
import product02 from "../../assets/images/products/product-02.webp";
import product03 from "../../assets/images/products/product-03.webp";
import product04 from "../../assets/images/products/product-04.webp";
import product05 from "../../assets/images/products/product-05.webp";
import product06 from "../../assets/images/products/product-06.webp";
import user01 from "../../assets/images/testimonials/user-01.webp";
import user02 from "../../assets/images/testimonials/user-02.webp";
import user03 from "../../assets/images/testimonials/user-03.webp";

import "./ProductDetails.css";

const allProducts = [
  { id: 1, name: "Wireless Earbuds Pro", category: "Audio", price: 49.99, oldPrice: 69.99, img: product01, rating: 4.8, reviews: 128, desc: "Immersive sound with active noise cancellation, 30-hour battery life, and a comfortable, sweat-resistant fit perfect for workouts or daily commutes." },
  { id: 2, name: "Smart Watch Series X", category: "Wearables", price: 89.99, oldPrice: 120.0, img: product02, rating: 4.6, reviews: 96, desc: "Track your fitness, heart rate, and sleep with precision. Features a vibrant AMOLED display and up to 7 days of battery life." },
  { id: 3, name: "Bluetooth Speaker Max", category: "Audio", price: 34.99, oldPrice: null, img: product03, rating: 4.7, reviews: 210, desc: "Powerful 360-degree sound in a compact, waterproof design. Perfect for outdoor adventures and pool parties alike." },
  { id: 4, name: "Gaming Headset Elite", category: "Gaming", price: 59.99, oldPrice: 79.99, img: product04, rating: 4.9, reviews: 154, desc: "7.1 surround sound with a noise-cancelling mic, designed for long gaming sessions with maximum comfort." },
  { id: 5, name: "Power Bank 20000mAh", category: "Accessories", price: 24.99, oldPrice: null, img: product05, rating: 4.5, reviews: 340, desc: "High-capacity portable charger with fast-charging support for multiple devices simultaneously." },
  { id: 6, name: "UltraBook Pro 14", category: "Laptops", price: 699.99, oldPrice: 799.99, img: product06, rating: 4.8, reviews: 87, desc: "Sleek, lightweight, and powerful — built for professionals who need performance on the go." },
];

const reviews = [
  { name: "Ananya Sharma", img: user01, rating: 5, text: "Excellent quality for the price. Delivery was fast and packaging was secure." },
  { name: "Rahul Mehta", img: user02, rating: 4, text: "Works great, exactly as described. Would recommend to anyone looking for value." },
  { name: "Priya Nair", img: user03, rating: 5, text: "Really happy with this purchase. Customer support was helpful when I had questions." },
];

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = allProducts.find((p) => p.id === Number(id)) || allProducts[0];
  const { addToCart } = useCart();
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
  addToCart(
    { id: product.id, name: product.name, price: product.price, img: product.img },
    quantity
  );
  toast.success(`${quantity} × ${product.name} added to cart!`);
};

  return (
    <div className="pd-page">
      {/* ===== 1. BREADCRUMB ===== */}
      <section className="pd-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
        </div>
      </section>

      {/* ===== 2. PRODUCT MAIN SECTION ===== */}
      <section className="section pd-main">
        <div className="container pd-main-grid">
          <div className="pd-image-wrap" data-aos="fade-right">
            <img src={product.img} alt={product.name} />
          </div>

          <div className="pd-info" data-aos="fade-left">
            <span className="pd-category">{product.category}</span>
            <h1>{product.name}</h1>

            <div className="pd-rating">
              <FontAwesomeIcon icon={faStar} />
              <span>{product.rating}</span>
              <span className="pd-reviews-count">({product.reviews} reviews)</span>
            </div>

            <div className="pd-price">
              <span className="pd-price-current">${product.price}</span>
              {product.oldPrice && <span className="pd-price-old">${product.oldPrice}</span>}
              {product.oldPrice && (
                <span className="pd-discount">
                  {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p className="pd-short-desc">{product.desc}</p>

            <div className="pd-stock">
              <FontAwesomeIcon icon={faCheck} /> In Stock — Ready to Ship
            </div>

            <div className="pd-actions">
              <div className="pd-qty">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)} aria-label="Increase">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              <button className="btn btn-primary hover-lift" onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
              </button>

              <button className="pd-wishlist-btn hover-scale" aria-label="Add to Wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>

            <div className="pd-trust-row">
              <div className="pd-trust-item">
                <FontAwesomeIcon icon={faTruckFast} />
                <span>Free Shipping</span>
              </div>
              <div className="pd-trust-item">
                <FontAwesomeIcon icon={faShieldHalved} />
                <span>2 Year Warranty</span>
              </div>
              <div className="pd-trust-item">
                <FontAwesomeIcon icon={faRotate} />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. TABS: DESCRIPTION / SPECS / REVIEWS ===== */}
      <section className="section pd-tabs-section">
        <div className="container">
          <div className="pd-tabs" data-aos="fade-up">
            <button
              className={activeTab === "description" ? "pd-tab-active" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={activeTab === "specs" ? "pd-tab-active" : ""}
              onClick={() => setActiveTab("specs")}
            >
              Specifications
            </button>
            <button
              className={activeTab === "reviews" ? "pd-tab-active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({product.reviews})
            </button>
          </div>

          <div className="pd-tab-content" data-aos="fade-up">
            {activeTab === "description" && (
              <div>
                <p>{product.desc}</p>
                <p>
                  Designed with the modern user in mind, this product blends functionality with
                  style. Every detail has been engineered to deliver a premium experience,
                  backed by our quality guarantee.
                </p>
              </div>
            )}

            {activeTab === "specs" && (
              <table className="pd-specs-table">
                <tbody>
                  <tr><td>Category</td><td>{product.category}</td></tr>
                  <tr><td>Brand</td><td>Stackly</td></tr>
                  <tr><td>Warranty</td><td>2 Years</td></tr>
                  <tr><td>Return Policy</td><td>30 Days</td></tr>
                  <tr><td>In the Box</td><td>1 x {product.name}, User Manual, Warranty Card</td></tr>
                </tbody>
              </table>
            )}

            {activeTab === "reviews" && (
              <div className="pd-reviews-list">
                {reviews.map((r) => (
                  <div className="pd-review-item" key={r.name}>
                    <img src={r.img} alt={r.name} />
                    <div>
                      <div className="pd-review-header">
                        <strong>{r.name}</strong>
                        <span className="pd-review-stars">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <FontAwesomeIcon icon={faStar} key={i} />
                          ))}
                        </span>
                      </div>
                      <p>{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== 4. RELATED PRODUCTS ===== */}
      <section className="section pd-related">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">You May Also Like</span>
            <h2>Related Products</h2>
          </div>
          <div className="pd-related-grid">
            {relatedProducts.map((p, i) => (
              <Link
                to={`/product/${p.id}`}
                className="pd-related-card hover-lift"
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="pd-related-img-wrap">
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="pd-related-info">
                  <span>{p.category}</span>
                  <h3>{p.name}</h3>
                  <div className="pd-related-price">${p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;