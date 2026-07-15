import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
  faChevronDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "./Contact.css";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const contactInfo = [
  { icon: faLocationDot, title: "Our Address", desc: "MMR Complex, Chinna Thirupathi, near Chinna Muniyappan Kovil, Salem, Tamil Nadu 636008" },
  { icon: faPhone, title: "Phone Number", desc: "+91 98765 43210" },
  { icon: faEnvelope, title: "Email Address", desc: "support@stackly.com" },
  { icon: faClock, title: "Working Hours", desc: "Mon - Sat: 9:00 AM - 8:00 PM" },
];

const faqs = [
  { q: "What is your return policy?", a: "We offer a hassle-free 30-day return policy on all products, provided they are unused and in original packaging." },
  { q: "How long does shipping take?", a: "Standard shipping takes 2-4 business days. Express shipping options are available at checkout for faster delivery." },
  { q: "Do you ship internationally?", a: "Yes, we ship to select countries worldwide. Shipping costs and delivery times vary by destination." },
  { q: "How can I track my order?", a: "Once your order ships, you'll receive a tracking link via email to monitor your delivery in real time." },
];

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 800));
    toast.success(`Thanks ${data.name}, we'll get back to you soon!`);
    reset();
  };

  return (
    <div className="contact-page">
      {/* ===== 1. PAGE HEADER ===== */}
      <section className="contact-header">
        <div className="container">
          <span className="section-tag" data-aos="fade-up">Get In Touch</span>
          <h1 data-aos="fade-up" data-aos-delay="100">We'd Love to Hear From You</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Have a question about an order, a product, or anything else? Our team is here to help.
          </p>
        </div>
      </section>

      {/* ===== 2. CONTACT INFO CARDS ===== */}
      <section className="section contact-info-section">
        <div className="container contact-info-grid">
          {contactInfo.map((c, i) => (
            <div className="contact-info-card hover-lift" key={c.title} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="contact-info-icon">
                <FontAwesomeIcon icon={c.icon} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3. FORM + MAP SECTION ===== */}
      <section className="section contact-main-section">
        <div className="container contact-main-grid">
          <div className="contact-form-wrap" data-aos="fade-right">
            <span className="section-tag">Send a Message</span>
            <h2>Fill Out the Form Below</h2>
            <p className="contact-form-subtitle">We typically respond within 24 hours.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" {...register("name")} />
                  {errors.name && <span className="error-text">{errors.name.message}</span>}
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@example.com" {...register("email")} />
                  {errors.email && <span className="error-text">{errors.email.message}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" {...register("subject")} />
                {errors.subject && <span className="error-text">{errors.subject.message}</span>}
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us more..." {...register("message")}></textarea>
                {errors.message && <span className="error-text">{errors.message.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary hover-lift" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"} <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>

          <div className="contact-map-wrap" data-aos="fade-left">
            <iframe
              title="Stackly Location"
              src="https://maps.google.com/maps?q=Chennai,Tamil%20Nadu,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== 4. FAQ SECTION ===== */}
      <section className="section contact-faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                className={`faq-item ${openFaq === i ? "faq-open" : ""}`}
                key={f.q}
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="faq-icon" />
                </button>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. SUPPORT CHANNELS ===== */}
      <section className="contact-support-section">
        <div className="container support-grid">
          <div className="support-card hover-lift" data-aos="fade-up">
            <h3>Live Chat</h3>
            <p>Chat with our support team in real time for instant help.</p>
            <span className="support-link">Start Chat <FontAwesomeIcon icon={faArrowRight} /></span>
          </div>
          <div className="support-card hover-lift" data-aos="fade-up" data-aos-delay="100">
            <h3>Email Support</h3>
            <p>Send us a detailed message and we'll respond within a day.</p>
            <span className="support-link">support@stackly.com <FontAwesomeIcon icon={faArrowRight} /></span>
          </div>
          <div className="support-card hover-lift" data-aos="fade-up" data-aos-delay="200">
            <h3>Call Us</h3>
            <p>Speak directly with our customer care team.</p>
            <span className="support-link">+91 98765 43210 <FontAwesomeIcon icon={faArrowRight} /></span>
          </div>
        </div>
      </section>

      {/* ===== 6. CTA BANNER ===== */}
      <section className="contact-cta" data-aos="fade-up">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Our team is always happy to help you find what you're looking for.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;