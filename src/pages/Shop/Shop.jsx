import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faXmark,
  faTruckFast,
  faShieldHalved,
  faRotate,
  faHeadset,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import ProductCard from "../../components/ProductCard/ProductCard";

import product01 from "../../assets/images/products/product-01.webp";
import product02 from "../../assets/images/products/product-02.webp";
import product03 from "../../assets/images/products/product-03.webp";
import product04 from "../../assets/images/products/product-04.webp";
import product05 from "../../assets/images/products/product-05.webp";
import product06 from "../../assets/images/products/product-06.webp";
import offerBanner from "../../assets/images/banners/offer-banner.webp";

import "./Shop.css";

const allProducts = [
  { id: 1, name: "Wireless Earbuds Pro", category: "Audio", price: 49.99, oldPrice: 69.99, img: product01, rating: 4.8 },
  { id: 2, name: "Smart Watch Series X", category: "Wearables", price: 89.99, oldPrice: 120.0, img: product02, rating: 4.6 },
  { id: 3, name: "Bluetooth Speaker Max", category: "Audio", price: 34.99, oldPrice: null, img: product03, rating: 4.7 },
  { id: 4, name: "Gaming Headset Elite", category: "Gaming", price: 59.99, oldPrice: 79.99, img: product04, rating: 4.9 },
  { id: 5, name: "Power Bank 20000mAh", category: "Accessories", price: 24.99, oldPrice: null, img: product05, rating: 4.5 },
  { id: 6, name: "UltraBook Pro 14", category: "Laptops", price: 699.99, oldPrice: 799.99, img: product06, rating: 4.8 },
  { id: 7, name: "Wireless Earbuds Lite", category: "Audio", price: 29.99, oldPrice: null, img: product01, rating: 4.3 },
  { id: 8, name: "Smart Watch Basic", category: "Wearables", price: 49.99, oldPrice: 59.99, img: product02, rating: 4.2 },
];

const categories = ["All", "Audio", "Wearables", "Gaming", "Accessories", "Laptops"];

const trustBadges = [
  { icon: faTruckFast, title: "Fast Delivery", desc: "2-4 business days" },
  { icon: faShieldHalved, title: "Secure Payment", desc: "100% protected" },
  { icon: faRotate, title: "Easy Returns", desc: "30-day policy" },
  { icon: faHeadset, title: "24/7 Support", desc: "Always available" },
];

function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const filteredProducts = useMemo(() => {
    let list = [...allProducts];

    if (searchQuery) {
      list = list.filter((p) => p.name.toLowerCase().includes(searchQuery));
    }

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (sortBy === "low-high") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="shop-page">
      {/* ===== 1. PAGE HEADER ===== */}
      <section className="shop-header">
        <div className="container">
          <span className="section-tag" data-aos="fade-up">Our Collection</span>
          <h1 data-aos="fade-up" data-aos-delay="100">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Shop All Products"}
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Browse our full range of electronics, curated for quality and value
          </p>
        </div>
      </section>

      {/* ===== 2. TRUST BADGES STRIP ===== */}
      <section className="trust-strip">
        <div className="container trust-strip-inner">
          {trustBadges.map((b, i) => (
            <div className="trust-item" key={b.title} data-aos="fade-up" data-aos-delay={i * 80}>
              <FontAwesomeIcon icon={b.icon} />
              <div>
                <strong>{b.title}</strong>
                <span>{b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. FILTERS + PRODUCTS GRID ===== */}
      <section className="section shop-section">
        <div className="container shop-layout">
          {filterOpen && (
            <div className="filter-overlay" onClick={() => setFilterOpen(false)}></div>
          )}

          <aside className={`shop-filters ${filterOpen ? "filters-open" : ""}`}>
            <div className="shop-filters-header">
              <h3>Categories</h3>
              <button
                className="filter-close-btn"
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <ul className="filter-list">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={activeCategory === cat ? "filter-active" : ""}
                    onClick={() => {
                      setActiveCategory(cat);
                      setFilterOpen(false);
                    }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="shop-main">
            <div className="shop-toolbar">
              <button
                className="mobile-filter-btn"
                onClick={() => setFilterOpen(true)}
              >
                <FontAwesomeIcon icon={faSliders} /> Filters
              </button>

              <span className="result-count">
                {filteredProducts.length} Products Found
              </span>

              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            <div className="shop-products-grid">
              {filteredProducts.map((p, i) => (
                <ProductCard key={p.id} {...p} delay={(i % 4) * 80} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="no-products">
                <p>No products found{searchQuery ? ` for "${searchQuery}"` : " in this category"}.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== 4. SPECIAL OFFER BANNER ===== */}
      <section className="shop-offer-section" data-aos="fade-up">
        <div className="container offer-inner">
          <img src={offerBanner} alt="Special Offer" className="offer-bg-img" />
          <div className="offer-content">
            <span className="offer-tag">Limited Time</span>
            <h2>Extra 15% Off on Your First Order</h2>
            <p>Use code WELCOME15 at checkout to unlock the discount.</p>
            <Link to="/checkout" className="btn btn-accent hover-lift">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 5. WHY SHOP WITH US ===== */}
      <section className="section why-shop-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">Our Guarantee</span>
            <h2>Why Shop With Stackly</h2>
          </div>
          <div className="why-shop-grid">
            <div className="why-shop-card hover-lift" data-aos="fade-up" data-aos-delay="0">
              <h3>Genuine Products</h3>
              <p>Every item is 100% authentic, sourced directly from verified brands and sellers.</p>
            </div>
            <div className="why-shop-card hover-lift" data-aos="fade-up" data-aos-delay="100">
              <h3>Best Price Guarantee</h3>
              <p>Found it cheaper elsewhere? We'll match the price within 7 days of purchase.</p>
            </div>
            <div className="why-shop-card hover-lift" data-aos="fade-up" data-aos-delay="200">
              <h3>Hassle-Free Returns</h3>
              <p>Not satisfied? Return any item within 30 days for a full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. NEWSLETTER CTA ===== */}
      <section className="shop-newsletter" data-aos="fade-up">
        <div className="container">
          <h2>Never Miss a Deal</h2>
          <p>Subscribe for early access to sales, new arrivals, and exclusive discounts</p>
          <form className="shop-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="btn btn-primary hover-scale">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Shop;