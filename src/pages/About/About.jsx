import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEye,
  faHeart,
  faUsers,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import aboutHero from "../../assets/images/hero/hero-banner-1.webp";
import user01 from "../../assets/images/testimonials/user-01.webp";
import user02 from "../../assets/images/testimonials/user-02.webp";
import user03 from "../../assets/images/testimonials/user-03.webp";
import brand01 from "../../assets/images/brands/brand-01.webp";
import brand02 from "../../assets/images/brands/brand-02.webp";
import brand03 from "../../assets/images/brands/brand-03.webp";

import "./About.css";

const values = [
  { icon: faBullseye, title: "Our Mission", desc: "To make quality electronics accessible and affordable for everyone, everywhere." },
  { icon: faEye, title: "Our Vision", desc: "To become the most trusted electronics destination in the global market." },
  { icon: faHeart, title: "Our Values", desc: "Honesty, quality, and customer-first thinking guide everything we build." },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "1,200+", label: "Products Listed" },
  { value: "86", label: "Verified Sellers" },
  { value: "4.8/5", label: "Average Rating" },
];

const team = [
  { name: "Ananya Sharma", role: "Founder & CEO", img: user01 },
  { name: "Rahul Mehta", role: "Head of Operations", img: user02 },
  { name: "Priya Nair", role: "Customer Success Lead", img: user03 },
];

function About() {
  return (
    <div className="about-page">
      {/* ===== 1. PAGE HEADER ===== */}
      <section className="about-header">
        <div className="container">
          <span className="section-tag" data-aos="fade-up">About Stackly</span>
          <h1 data-aos="fade-up" data-aos-delay="100">Powering Your Digital Life Since Day One</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            We're on a mission to bring the best electronics to your doorstep — honestly priced, carefully curated.
          </p>
        </div>
      </section>

      {/* ===== 2. STORY SECTION ===== */}
      <section className="section about-story">
        <div className="container story-inner">
          <div className="story-image" data-aos="fade-right">
            <img src={aboutHero} alt="Our Story" />
          </div>
          <div className="story-content" data-aos="fade-left">
            <span className="section-tag">Our Story</span>
            <h2>Built by Tech Lovers, for Tech Lovers</h2>
            <p>
              Stackly started with a simple idea — buying electronics online shouldn't be
              complicated or risky. What began as a small operation has grown into a trusted
              marketplace serving thousands of customers across the globe.
            </p>
            <p>
              Today, we partner with verified brands and sellers to bring you genuine products,
              fair prices, and a shopping experience you can rely on.
            </p>
            <Link to="/shop" className="btn btn-primary hover-lift">
              Explore Products <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 3. MISSION / VISION / VALUES ===== */}
      <section className="section about-values">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">What Drives Us</span>
            <h2>Mission, Vision & Values</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card hover-lift" key={v.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="value-icon">
                  <FontAwesomeIcon icon={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. STATS SECTION ===== */}
      <section className="about-stats">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={s.label} data-aos="zoom-in" data-aos-delay={i * 100}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 5. TEAM SECTION ===== */}
      <section className="section about-team">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">Meet The Team</span>
            <h2>The People Behind Stackly</h2>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div className="team-card hover-lift" key={t.name} data-aos="fade-up" data-aos-delay={i * 100}>
                <img src={t.img} alt={t.name} />
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. BRAND PARTNERS + CTA ===== */}
      <section className="about-cta" data-aos="fade-up">
        <div className="container">
          <div className="about-brands-row">
            <img src={brand01} alt="Brand partner" />
            <img src={brand02} alt="Brand partner" />
            <img src={brand03} alt="Brand partner" />
          </div>
          <div className="cta-box">
            <FontAwesomeIcon icon={faUsers} className="cta-icon" />
            <h2>Join Thousands of Happy Customers</h2>
            <p>Start shopping the latest electronics with confidence today.</p>
            <Link to="/shop" className="btn btn-accent hover-lift">
              Shop Now <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;