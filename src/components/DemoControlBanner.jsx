import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiZap,
  FiUserPlus,
  FiCheckCircle,
  FiAward,
  FiDollarSign,
  FiRotateCcw,
  FiShield,
  FiUser,
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiChevronUp,
  FiChevronDown,
  FiExternalLink,
} from "react-icons/fi";
import { mockStore } from "../api/mockData";
import { useAuth } from "../context/AuthContext";

const DemoControlBanner = () => {
  const { user, switchRole, resetAllData } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate();

  const showFeedback = (msg) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(""), 4000);
  };

  const handleAutoGenerateAll = () => {
    const res = mockStore.autoGenerateFullSchool();
    showFeedback(`Generated full school: ${res.studentsCount} students, ${res.staffCount} faculty, ${res.timetableCount} schedule slots, and complete assessment records!`);
    window.dispatchEvent(new Event("eduplus_data_changed"));
  };

  const handleAddBatchStudents = () => {
    const added = mockStore.generateBatchStudents(5);
    showFeedback(`Generated ${added.length} new enrolled students with complete academic profiles!`);
    window.dispatchEvent(new Event("eduplus_data_changed"));
  };

  const handleSimulateAttendance = () => {
    const res = mockStore.simulateAttendanceToday();
    showFeedback(`Simulated school-wide attendance for ${res.markedCount} students and faculty on ${res.date}!`);
    window.dispatchEvent(new Event("eduplus_data_changed"));
  };

  const handleGenerateMarks = () => {
    const res = mockStore.generateExamMarks();
    showFeedback(`Generated assessment scores and progress cards for all students (${res.totalMarks} total grades recorded)!`);
    window.dispatchEvent(new Event("eduplus_data_changed"));
  };

  const handleCollectFees = () => {
    const res = mockStore.simulateFeeCollection();
    showFeedback(`Recorded ${res.collectedCount} fee settlements as PAID with updated receipts!`);
    window.dispatchEvent(new Event("eduplus_data_changed"));
  };

  const currentRole = user?.role || "student";

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #181c2b 0%, #24293d 100%)",
        color: "#ffffff",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        position: "relative",
        zIndex: 40,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: collapsed ? "8px 24px" : "12px 24px 14px",
          transition: "all 0.2s ease",
        }}
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(106, 92, 240, 0.25)",
                color: "#c3bdfd",
                padding: "3px 10px",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                border: "1px solid rgba(106, 92, 240, 0.4)",
              }}
            >
              <FiZap size={12} color="#a78bfa" />
              <span>Interactive Demo Model</span>
            </div>

            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
              All school modules preloaded with realistic data — click any generator below to simulate records live:
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {statusMessage && (
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#34d399",
                  background: "rgba(52, 211, 153, 0.15)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  border: "1px solid rgba(52, 211, 153, 0.3)",
                  animation: "fadeIn 0.2s ease",
                }}
              >
                ✓ {statusMessage}
              </span>
            )}

            <button
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#e2e8f0",
                fontSize: "11px",
                fontWeight: 600,
                padding: "4px 9px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {collapsed ? (
                <>
                  <span>Show Demo Bar</span>
                  <FiChevronDown size={12} />
                </>
              ) : (
                <>
                  <span>Hide Demo Bar</span>
                  <FiChevronUp size={12} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Expanded Controls Body */}
        {!collapsed && (
          <div
            style={{
              marginTop: "12px",
              paddingTop: "12px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            {/* Auto-Generation Action Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={handleAutoGenerateAll}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "linear-gradient(135deg, #6a5cf0 0%, #8b5cf6 100%)",
                  color: "#ffffff",
                  border: "none",
                  padding: "7px 14px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(106, 92, 240, 0.35)",
                }}
                title="Generates complete school with 30+ students, 8 faculty, timetables, and full year logs"
              >
                <FiZap size={13} />
                <span>Auto-Generate Full School (50+ Records)</span>
              </button>

              <button
                type="button"
                onClick={handleAddBatchStudents}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "rgba(255,255,255,0.1)",
                  color: "#f1f5f9",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <FiUserPlus size={13} />
                <span>+5 Students</span>
              </button>

              <button
                type="button"
                onClick={handleSimulateAttendance}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "rgba(255,255,255,0.1)",
                  color: "#f1f5f9",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <FiCheckCircle size={13} color="#34d399" />
                <span>Mark Attendance</span>
              </button>

              <button
                type="button"
                onClick={handleGenerateMarks}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "rgba(255,255,255,0.1)",
                  color: "#f1f5f9",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <FiAward size={13} color="#fbbf24" />
                <span>Generate Marks</span>
              </button>

              <button
                type="button"
                onClick={handleCollectFees}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "rgba(255,255,255,0.1)",
                  color: "#f1f5f9",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <FiDollarSign size={13} color="#38bdf8" />
                <span>Collect Fees</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (window.confirm("Reset all data to clean seed records?")) {
                    resetAllData();
                  }
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "transparent",
                  color: "rgba(255,255,255,0.6)",
                  border: "1px dashed rgba(255,255,255,0.25)",
                  padding: "7px 11px",
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                <FiRotateCcw size={12} />
                <span>Reset Seed</span>
              </button>
            </div>

            {/* Quick Jumps for Instant Tour */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 700, textTransform: "uppercase" }}>
                Quick Jump:
              </span>

              <Link
                to="/students/user_student_001/report"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "rgba(255,255,255,0.06)",
                  color: "#cbd5e1",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <FiFileText size={11} color="#f59e0b" />
                <span>Sample Report Card</span>
              </Link>

              <Link
                to="/manage-timetable"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "rgba(255,255,255,0.06)",
                  color: "#cbd5e1",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <FiCalendar size={11} color="#60a5fa" />
                <span>Class 10 Timetable</span>
              </Link>

              <Link
                to="/class-fees"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "rgba(255,255,255,0.06)",
                  color: "#cbd5e1",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <FiDollarSign size={11} color="#34d399" />
                <span>Fee Ledger</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoControlBanner;
