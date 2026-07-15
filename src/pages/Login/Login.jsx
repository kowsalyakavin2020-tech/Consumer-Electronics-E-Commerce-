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
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import loginImg from "../../assets/images/hero/hero-banner-2.webp";
import "./Login.css";

const schema = yup.object({
  role: yup.string().required("Please select a role"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
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

    const nameFromEmail = data.email.split("@")[0];
    login({ name: nameFromEmail, email: data.email, role: data.role });

    toast.success(`Welcome back! Redirecting to ${data.role} dashboard...`);

    setTimeout(() => {
      navigate(`/dashboard/${data.role}`);
    }, 1000);
  };

  return (
    <div className="auth-page">
      <Link to="/" className="home-btn hover-scale">
  <FontAwesomeIcon icon={faHouse} /> Home
</Link>
      <div className="auth-container">
        <div className="auth-image" data-aos="fade-right">
          <img src={loginImg} alt="Login" />
          <div className="auth-image-overlay">
            <h2>Welcome Back to Stackly</h2>
            <p>Login to track orders, manage your wishlist, and enjoy exclusive deals.</p>
          </div>
        </div>

        <div className="auth-card" ref={cardRef}>
          <Link to="/" className="auth-logo">
            <img src="/images/logo/logo.webp" alt="Stackly" />
          </Link>

          <h1>Login to Your Account</h1>
          <p className="auth-subtitle">Enter your credentials to continue</p>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="form-group">
              <label>Login As</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faUserTag} className="input-icon" />
                <select {...register("role")} defaultValue="">
                  <option value="" disabled>Select role</option>
                  <option value="customer">Customer</option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              {errors.role && <span className="error-text">{errors.role.message}</span>}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrap">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                />
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

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn btn-primary btn-block hover-lift" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"} <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>

          <p className="auth-footer-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;