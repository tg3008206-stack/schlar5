import { createContext, useContext, useState } from "react";
import api from "../api/axios";
import { mockStore } from "../api/mockData";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("eduplus_user");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        // ignore parse error
      }
    }
    // Default to System Admin for immediate rich preview
    const defaultAdmin = mockStore.users.find((u) => u.role === "admin") || mockStore.users[0];
    localStorage.setItem("eduplus_user", JSON.stringify(defaultAdmin));
    localStorage.setItem("eduplus_token", "mock_token_" + defaultAdmin._id);
    return defaultAdmin;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (identifier, password, loginType) => {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.post("/auth/login", { identifier, password, loginType });
      localStorage.setItem("eduplus_token", data.token);
      localStorage.setItem("eduplus_user", JSON.stringify(data));
      setUser(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload) => {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.post("/auth/register", payload);
      localStorage.setItem("eduplus_token", data.token);
      localStorage.setItem("eduplus_user", JSON.stringify(data));
      setUser(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Registration failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("eduplus_token");
    localStorage.removeItem("eduplus_user");
    setUser(null);
  };

  const switchRole = (role) => {
    let target;
    if (role === "admin") {
      target = mockStore.users.find((u) => u.role === "admin");
    } else if (role === "teacher") {
      target = mockStore.users.find((u) => u.role === "teacher");
    } else {
      target = mockStore.users.find((u) => u.role === "student");
    }

    if (target) {
      localStorage.setItem("eduplus_token", "mock_token_" + target._id);
      localStorage.setItem("eduplus_user", JSON.stringify(target));
      setUser(target);
    }
  };

  const resetAllData = () => {
    mockStore.resetToDefaults();
    const admin = mockStore.users.find((u) => u.role === "admin");
    localStorage.setItem("eduplus_user", JSON.stringify(admin));
    localStorage.setItem("eduplus_token", "mock_token_" + admin._id);
    setUser(admin);
    window.location.reload();
  };

  const updateUser = (data) => {
    const updated = { ...user, ...data };
    localStorage.setItem("eduplus_user", JSON.stringify(updated));
    setUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        switchRole,
        resetAllData,
        updateUser,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
