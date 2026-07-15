import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  faArrowRight,
  faTruckFast,
  faShieldHalved,
  faTag,
  faHeadphones,
  faLaptop,
  faMobileScreenButton,
  faStopwatch,
  faHouseSignal,
  faGamepad,
  faRotate,
  faHeadset,
  faLock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

import heroBanner from "../../assets/images/hero/hero-banner-1.webp";
import catMobiles from "../../assets/images/categories/cat-mobiles.webp";
import catLaptops from "../../assets/images/categories/cat-laptops.webp";
import catAudio from "../../assets/images/categories/cat-audio.webp";
import catWearables from "../../assets/images/categories/cat-wearables.webp";
import catSmartHome from "../../assets/images/categories/cat-smarthome.webp";
import catGaming from "../../assets/images/categories/cat-gaming.webp";

import product01 from "../../assets/images/products/product-01.webp";
import product02 from "../../assets/images/products/product-02.webp";
import product03 from "../../assets/images/products/product-03.webp";
import product04 from "../../assets/images/products/product-04.webp";
import product05 from "../../assets/images/products/product-05.webp";
import product06 from "../../assets/images/products/product-06.webp";

import offerBanner from "../../assets/images/banners/offer-banner.webp";
import newsletterBg from "../../assets/images/banners/newsletter-bg.webp";

import user01 from "../../assets/images/testimonials/user-01.webp";
import user02 from "../../assets/images/testimonials/user-02.webp";
import user03 from "../../assets/images/testimonials/user-03.webp";

import brand01 from "../../assets/images/brands/brand-01.webp";
import brand02 from "../../assets/images/brands/brand-02.webp";
import brand03 from "../../assets/images/brands/brand-03.webp";

import "./Landing.css";

function Landing() {
  const [email, setEmail] = useState("");

const handleNewsletterSubmit = (e) => {
  e.preventDefault();
  if (!email || !email.includes("@")) {
    toast.error("Please enter a valid email address");
    return;
  }
  toast.success("Successfully subscribed! Check your inbox for confirmation.");
  setEmail("");
};
  const categories = [
    { name: "Mobiles", img: catMobiles, icon: faMobileScreenButton },
    { name: "Laptops", img: catLaptops, icon: faLaptop },
    { name: "Audio", img: catAudio, icon: faHeadphones },
    { name: "Wearables", img: catWearables, icon: faStopwatch },
    { name: "Smart Home", img: catSmartHome, icon: faHouseSignal },
    { name: "Gaming", img: catGaming, icon: faGamepad },
  ];

  const trendingProducts = [
    { id: 1, name: "Wireless Earbuds Pro", category: "Audio", price: 49.99, oldPrice: 69.99, img: product01, rating: 4.8 },
    { id: 2, name: "Smart Watch Series X", category: "Wearables", price: 89.99, oldPrice: 120.0, img: product02, rating: 4.6 },
    { id: 3, name: "Bluetooth Speaker Max", category: "Audio", price: 34.99, oldPrice: null, img: product03, rating: 4.7 },
    { id: 4, name: "Gaming Headset Elite", category: "Gaming", price: 59.99, oldPrice: 79.99, img: product04, rating: 4.9 },
  ];

  const bestSellers = [
    { id: 5, name: "Power Bank 20000mAh", category: "Accessories", price: 24.99, oldPrice: null, img: product05, rating: 4.5 },
    { id: 6, name: "UltraBook Pro 14", category: "Laptops", price: 699.99, oldPrice: null, img: product06, rating: 4.8 },
    { id: 1, name: "Wireless Earbuds Pro", category: "Audio", price: 49.99, oldPrice: 69.99, img: product01, rating: 4.8 },
    { id: 2, name: "Smart Watch Series X", category: "Wearables", price: 89.99, oldPrice: null, img: product02, rating: 4.6 },
  ];

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Verified Buyer",
      img: user01,
      text: "Ordered a smartwatch and it arrived faster than expected. Build quality feels premium and the battery lasts all day.",
    },
    {
      name: "Rahul Mehta",
      role: "Verified Buyer",
      img: user02,
      text: "The earbuds sound amazing for the price. Customer support was quick to help when I had a sizing question.",
    },
    {
      name: "Priya Nair",
      role: "Verified Buyer",
      img: user03,
      text: "Great packaging, genuine products, and the checkout process was smooth. Will definitely shop here again.",
    },
  ];

  const whyChooseUs = [
    { icon: faTruckFast, title: "Fast Delivery", desc: "Get your order within 2-4 business days across the country." },
    { icon: faRotate, title: "Easy Returns", desc: "30-day hassle-free return and replacement policy on all items." },
    { icon: faLock, title: "Secure Payments", desc: "Your transactions are protected with industry-standard encryption." },
    { icon: faHeadset, title: "24/7 Support", desc: "Our support team is available around the clock to help you." },
  ];

  return (
    <>
      {/* ===== 1. HERO SECTION ===== */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content" data-aos="fade-right" data-aos-duration="900">
            <span className="hero-badge">New Season Arrivals</span>
            <h1 className="hero-title">
              Power Up Your <span className="text-highlight">Digital Life</span>
            </h1>
            <p className="hero-desc">
              Discover the latest smartphones, laptops, audio gear, and smart
              devices — engineered for performance, priced for you.
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn btn-primary hover-lift">
                Shop Now <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link to="/about" className="btn btn-outline hover-scale">
                Learn More
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <FontAwesomeIcon icon={faTruckFast} />
                <div>
                  <strong>Free Shipping</strong>
                  <span>On orders over $50</span>
                </div>
              </div>
              <div className="hero-stat">
                <FontAwesomeIcon icon={faShieldHalved} />
                <div>
                  <strong>2 Year Warranty</strong>
                  <span>On all electronics</span>
                </div>
              </div>
              <div className="hero-stat">
                <FontAwesomeIcon icon={faTag} />
                <div>
                  <strong>Best Prices</strong>
                  <span>Guaranteed value</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image" data-aos="fade-left" data-aos-duration="900">
            <div className="hero-image-glow"></div>
            <img src={heroBanner} alt="Latest Electronics Collection" />
          </div>
        </div>
      </section>

      {/* ===== 2. FEATURED CATEGORIES ===== */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">Categories</span>
            <h2>Shop by Category</h2>
            <p>Explore our wide range of electronics across every category</p>
          </div>

          <div className="categories-grid">
            {categories.map((cat, i) => (
              <CategoryCard
                key={cat.name}
                name={cat.name}
                img={cat.img}
                icon={cat.icon}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. TRENDING PRODUCTS ===== */}
      <section className="section trending-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">Trending Now</span>
            <h2>Popular This Week</h2>
            <p>Handpicked products loved by thousands of customers</p>
          </div>

          <div className="products-grid">
            {trendingProducts.map((p, i) => (
              <ProductCard key={p.id + "-trend"} {...p} delay={(i % 4) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. WHY CHOOSE US ===== */}
      <section className="section why-us-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">Our Promise</span>
            <h2>Why Choose Stackly</h2>
            <p>We're committed to giving you the best shopping experience</p>
          </div>

          <div className="why-us-grid">
            {whyChooseUs.map((item, i) => (
              <div
                className="why-us-card hover-lift"
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="why-us-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. SPECIAL OFFER BANNER ===== */}
      <section className="offer-section" data-aos="fade-up">
        <div className="container offer-inner">
          <img src={offerBanner} alt="Special Offer" className="offer-bg-img" />
          <div className="offer-content">
            <span className="offer-tag">Limited Time</span>
            <h2>Up to 40% Off on Audio Devices</h2>
            <p>Grab your favorite headphones and speakers before the offer ends.</p>
            <Link to="/shop" className="btn btn-accent hover-lift">
              Grab The Deal <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6. BEST SELLERS ===== */}
      <section className="section bestsellers-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">Best Sellers</span>
            <h2>Most Loved Products</h2>
            <p>Top-rated items our customers keep coming back for</p>
          </div>

          <div className="products-grid">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.id + "-best"} {...p} delay={(i % 4) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. TESTIMONIALS ===== */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">Testimonials</span>
            <h2>What Our Customers Say</h2>
            <p>Real feedback from real customers who shopped with us</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                role={t.role}
                img={t.img}
                text={t.text}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. BRAND PARTNERS ===== */}
      <section className="section brands-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">Trusted Brands</span>
            <h2>Our Brand Partners</h2>
          </div>

          <div className="brands-row" data-aos="fade-up">
            <img src={brand01} alt="Brand partner" />
            <img src={brand02} alt="Brand partner" />
            <img src={brand03} alt="Brand partner" />
          </div>
        </div>
      </section>

      {/* ===== 9. NEWSLETTER ===== */}
      <section className="newsletter-section" data-aos="fade-up">
        <img src={newsletterBg} alt="" className="newsletter-bg" />
        <div className="container newsletter-inner">
          <h2>Stay Updated With Our Latest Deals</h2>
          <p>Subscribe to our newsletter and never miss an offer</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
  <input
    type="email"
    placeholder="Enter your email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <button type="submit" className="btn btn-primary hover-scale">
    Subscribe <FontAwesomeIcon icon={faPaperPlane} />
  </button>
</form>
        </div>
      </section>
    </>
  );
}

export default Landing;