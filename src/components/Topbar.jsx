import { useAuth } from "../context/AuthContext";
import { FiRefreshCw, FiShield, FiUser, FiAward } from "react-icons/fi";

const Topbar = () => {
  const { user, switchRole, resetAllData } = useAuth();
  const currentRole = user?.role || "student";

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "U";

  return (
    <header className="topbar" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
      {/* Institutional Session Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)" }} />
          <span>Active Session: 2025–2026</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>Central Campus</span>
        </div>
      </div>

      {/* Quick Role & Model Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
        {/* Interactive Persona Switcher */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "var(--page-bg)",
            padding: "3px",
            borderRadius: "10px",
            border: "1px solid var(--border)",
            gap: "2px",
          }}
          title="Instant Persona Switcher for Preview"
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--text-muted)",
              padding: "0 8px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Role:
          </span>

          <button
            type="button"
            onClick={() => switchRole("admin")}
            style={{
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: currentRole === "admin" ? 700 : 500,
              background: currentRole === "admin" ? "#ffffff" : "transparent",
              color: currentRole === "admin" ? "var(--primary)" : "var(--text-dark)",
              border: "none",
              borderRadius: "7px",
              boxShadow: currentRole === "admin" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "all 0.15s ease",
            }}
          >
            <FiShield size={12} />
            <span>Admin</span>
          </button>

          <button
            type="button"
            onClick={() => switchRole("teacher")}
            style={{
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: currentRole === "teacher" ? 700 : 500,
              background: currentRole === "teacher" ? "#ffffff" : "transparent",
              color: currentRole === "teacher" ? "var(--primary)" : "var(--text-dark)",
              border: "none",
              borderRadius: "7px",
              boxShadow: currentRole === "teacher" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "all 0.15s ease",
            }}
          >
            <FiAward size={12} />
            <span>Teacher</span>
          </button>

          <button
            type="button"
            onClick={() => switchRole("student")}
            style={{
              padding: "6px 12px",
              fontSize: "12px",
              fontWeight: currentRole === "student" ? 700 : 500,
              background: currentRole === "student" ? "#ffffff" : "transparent",
              color: currentRole === "student" ? "var(--primary)" : "var(--text-dark)",
              border: "none",
              borderRadius: "7px",
              boxShadow: currentRole === "student" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "all 0.15s ease",
            }}
          >
            <FiUser size={12} />
            <span>Student</span>
          </button>
        </div>

        {/* Reset Demo Data */}
        <button
          type="button"
          onClick={() => {
            if (window.confirm("Reset all students, attendance, marks and fees to original demo seed data?")) {
              resetAllData();
            }
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "7px 12px",
            fontSize: "11px",
            fontWeight: 600,
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            color: "var(--text-muted)",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
          title="Restore standard school mock database"
        >
          <FiRefreshCw size={11} />
          <span>Reset Data</span>
        </button>

        {/* User Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "6px" }}>
          <div className="topbar-user">
            <div className="name">{user?.name || "User"}</div>
            <div className="role" style={{ fontSize: "11px" }}>
              {currentRole.toUpperCase()} PORTAL
            </div>
          </div>
          <div className="avatar" style={{ overflow: "hidden" }}>
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt="avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ) : (
              initials
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
