import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiBriefcase } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [loginType, setLoginType] = useState("student");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await login(identifier, password, loginType);
      navigate("/dashboard");
    } catch (err) {
      // error is already set in context
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div className="logo-circle">E+</div>
        </div>
        <div className="login-heading">EduPlus</div>
        <div className="login-title">Command Center Login</div>

        {error && <div className="error-banner">{error}</div>}

        <div className="role-toggle">
          <button
            type="button"
            className={loginType === "student" ? "active" : ""}
            onClick={() => setLoginType("student")}
          >
            <FiUser />
            STUDENT
          </button>
          <button
            type="button"
            className={loginType === "staff" ? "active" : ""}
            onClick={() => setLoginType("staff")}
          >
            <FiBriefcase />
            STAFF/ADMIN
          </button>
        </div>

        <div style={{ margin: "0 0 16px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", textAlign: "center", marginBottom: "8px", letterSpacing: "0.5px" }}>
            ⚡ 1-Click Instant Demo Launch
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
            <button
              type="button"
              onClick={async () => {
                await login("admin@school.com", "admin123", "staff");
                navigate("/dashboard");
              }}
              style={{
                padding: "8px 6px",
                fontSize: "11px",
                fontWeight: 700,
                background: "var(--primary-light)",
                color: "var(--primary-dark)",
                border: "1px solid #d5d0fc",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              👑 Admin
            </button>
            <button
              type="button"
              onClick={async () => {
                await login("charusaraswat639649@gmail.com", "teacher123", "staff");
                navigate("/dashboard");
              }}
              style={{
                padding: "8px 6px",
                fontSize: "11px",
                fontWeight: 700,
                background: "var(--green-bg)",
                color: "var(--green)",
                border: "1px solid #c7f0db",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              👩‍🏫 Faculty
            </button>
            <button
              type="button"
              onClick={async () => {
                await login("4", "student123", "student");
                navigate("/dashboard");
              }}
              style={{
                padding: "8px 6px",
                fontSize: "11px",
                fontWeight: 700,
                background: "var(--gold-bg)",
                color: "#b45309",
                border: "1px solid #fde68a",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              🎒 Student
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label>{loginType === "student" ? "Roll Number / Email" : "Email"}</label>
            <div className="login-input">
              <FiMail />
              <input
                type="text"
                placeholder={loginType === "student" ? "Enter Roll No or Email" : "Enter Email"}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="login-field">
            <label>Password</label>
            <div className="login-input">
              <FiLock />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="forgot-link">
            <a href="#!">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary login-submit" disabled={submitting}>
            {submitting ? "Logging in..." : "Login →"}
          </button>
        </form>

        <div className="login-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
