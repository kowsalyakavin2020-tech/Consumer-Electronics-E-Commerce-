import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUserTag,
  faUser,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import signupImg from "../../assets/images/hero/hero-banner-3.webp";
import "./Signup.css";

const schema = yup.object({
  name: yup.string().required("Full name is required"),
  role: yup.string().required("Please select a role"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  terms: yup.boolean().oneOf([true], "You must accept the Terms & Privacy Policy"),
});

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 800));
    toast.success(`Account created successfully, ${data.name}! Please login.`);
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className="auth-page">
      <Link to="/" className="home-btn hover-scale">
  <FontAwesomeIcon icon={faHouse} /> Home
</Link>
      <div className="auth-container">
        <div className="auth-image" data-aos="fade-right">
          <img src={signupImg} alt="Signup" />
          <div className="auth-image-overlay">
            <h2>Join Stackly Today</h2>
            <p>Create an account to unlock personalized deals and faster checkout.</p>
          </div>
        </div>

        <div className="auth-card" ref={cardRef}>
          <Link to="/" className="auth-logo">
            <img src="/images/logo/logo.webp" alt="Stackly" />
          </Link>

          <h1>Create Your Account</h1>
          <p className="auth-subtitle">Fill in your details to get started</p>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input type="text" placeholder="John Doe" {...register("name")} />
              </div>
              {errors.name && <span className="error-text">{errors.name.message}</span>}
            </div>

            <div className="form-group">
              <label>Register As</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faUserTag} className="input-icon" />
                <select {...register("role")} defaultValue="">
                  <option value="" disabled>Select role</option>
                  <option value="customer">Customer</option>
                  <option value="seller">Seller</option>
                </select>
              </div>
              {errors.role && <span className="error-text">{errors.role.message}</span>}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input type="email" placeholder="you@example.com" {...register("email")} />
              </div>
              {errors.email && <span className="error-text">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password.message}</span>}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("confirmPassword")}
                />
              </div>
              {errors.confirmPassword && (
                <span className="error-text">{errors.confirmPassword.message}</span>
              )}
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" {...register("terms")} />
                <span>
                  I agree to the <Link to="/terms">Terms & Conditions</Link> and{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </span>
              </label>
              {errors.terms && <span className="error-text">{errors.terms.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-block hover-lift" disabled={isSubmitting}>
              {isSubmitting ? "Creating Account..." : "Sign Up"} <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>

          <p className="auth-footer-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;