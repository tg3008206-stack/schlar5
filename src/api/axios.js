import axios from "axios";
import { mockStore } from "./mockData";

// Pure Frontend Model API Adapter
// Serves requests directly from in-memory localStorage store for instant, reliable interaction
const api = {
  create() {
    return this;
  },
  interceptors: {
    request: { use: () => {} },
    response: { use: () => {} },
  },

  async get(url, config = {}) {
    await new Promise((r) => setTimeout(r, 60)); // subtle micro-latency for realistic interaction
    const params = config.params || {};
    const path = url.split("?")[0];

    // Auth
    if (path === "/auth/me") {
      const stored = localStorage.getItem("eduplus_user");
      const user = stored ? JSON.parse(stored) : mockStore.users[0];
      return { data: user };
    }

    // Dashboard
    if (path === "/dashboard/stats") {
      return { data: mockStore.getDashboardStats() };
    }

    // Students
    if (path === "/students") {
      return { data: mockStore.getStudents(params) };
    }
    if (path.startsWith("/students/")) {
      const id = path.split("/students/")[1];
      const student = mockStore.getStudentById(id);
      return { data: student };
    }

    // Staff
    if (path === "/staff") {
      return { data: mockStore.getStaff() };
    }

    // Exams
    if (path === "/exams") {
      return { data: mockStore.getExams() };
    }

    // Events
    if (path === "/events") {
      return { data: mockStore.getEvents() };
    }

    // Notices
    if (path === "/notices") {
      return { data: mockStore.getNotices(params.category) };
    }

    // Fees
    if (path.startsWith("/fees/student/")) {
      const id = path.split("/fees/student/")[1];
      return { data: mockStore.getStudentFees(id) };
    }
    if (path === "/fees") {
      return { data: mockStore.getFees(params) };
    }

    // Timetable
    if (path === "/timetable") {
      return { data: mockStore.getTimetable(params) };
    }

    // Materials
    if (path === "/materials") {
      return { data: mockStore.getMaterials(params) };
    }

    // Marks
    if (path.startsWith("/marks/student/")) {
      const id = path.split("/marks/student/")[1];
      return { data: mockStore.getStudentMarks(id) };
    }
    if (path === "/marks") {
      return { data: mockStore.getMarks(params) };
    }

    // Attendance
    if (path === "/attendance/roll") {
      return { data: mockStore.getAttendanceRoll(params.class, params.section, params.date) };
    }
    if (path.startsWith("/attendance/student/")) {
      const id = path.split("/attendance/student/")[1];
      return { data: mockStore.getStudentAttendance(id) };
    }
    if (path === "/attendance/summary") {
      return { data: mockStore.getAttendanceSummary(params) };
    }

    // Staff Attendance
    if (path === "/staff-attendance") {
      return { data: mockStore.getStaffAttendance(params.date) };
    }

    return { data: [] };
  },

  async post(url, body = {}, config = {}) {
    await new Promise((r) => setTimeout(r, 80));

    // Auth Login
    if (url === "/auth/login") {
      try {
        const user = mockStore.login(body.identifier, body.password, body.loginType);
        return { data: user };
      } catch (err) {
        const error = new Error(err.message || "Invalid credentials");
        error.response = { data: { message: err.message || "Invalid credentials" } };
        throw error;
      }
    }

    // Auth Register
    if (url === "/auth/register") {
      try {
        const user = mockStore.register(body);
        return { data: user };
      } catch (err) {
        const error = new Error(err.message || "Registration failed");
        error.response = { data: { message: err.message || "Registration failed" } };
        throw error;
      }
    }

    // Students
    if (url === "/students") {
      const student = mockStore.addStudent(body);
      return { data: student };
    }

    // Staff
    if (url === "/staff") {
      const staff = mockStore.addStaff(body);
      return { data: staff };
    }

    // Exams
    if (url === "/exams") {
      const exam = mockStore.addExam(body);
      return { data: exam };
    }

    // Events
    if (url === "/events") {
      const event = mockStore.addEvent(body);
      return { data: event };
    }

    // Notices
    if (url === "/notices") {
      const notice = mockStore.addNotice(body);
      return { data: notice };
    }

    // Timetable
    if (url === "/timetable/assign") {
      const result = mockStore.assignTimetableSlot(body);
      return { data: result };
    }

    // Materials
    if (url === "/materials") {
      const material = mockStore.addMaterial(body);
      return { data: material };
    }

    // Marks
    if (url === "/marks/save") {
      const result = mockStore.saveMarks(body.entries);
      return { data: result };
    }

    // Attendance Save
    if (url === "/attendance/save") {
      const result = mockStore.saveAttendance(body.class, body.section, body.date, body.records);
      return { data: result };
    }

    // Staff Attendance Save
    if (url === "/staff-attendance/save") {
      const result = mockStore.saveStaffAttendance(body.date, body.entries);
      return { data: result };
    }

    return { data: { success: true } };
  },

  async put(url, body = {}, config = {}) {
    await new Promise((r) => setTimeout(r, 60));

    // Profile update
    if (url === "/auth/profile") {
      const stored = localStorage.getItem("eduplus_user");
      const current = stored ? JSON.parse(stored) : mockStore.users[0];
      const updated = { ...current, ...body };
      return { data: updated };
    }

    // Student update
    if (url.startsWith("/students/")) {
      const id = url.split("/students/")[1];
      const updated = mockStore.updateStudent(id, body);
      return { data: updated };
    }

    // Staff update
    if (url.startsWith("/staff/")) {
      const id = url.split("/staff/")[1];
      const updated = mockStore.updateStaff(id, body);
      return { data: updated };
    }

    // Fees update
    if (url.startsWith("/fees/")) {
      const id = url.split("/fees/")[1];
      const updated = mockStore.updateFee(id, body);
      return { data: updated };
    }

    return { data: { success: true } };
  },

  async delete(url, config = {}) {
    await new Promise((r) => setTimeout(r, 60));

    // Student delete
    if (url.startsWith("/students/")) {
      const id = url.split("/students/")[1];
      const result = mockStore.deleteStudent(id);
      return { data: result };
    }

    // Staff delete
    if (url.startsWith("/staff/")) {
      const id = url.split("/staff/")[1];
      const result = mockStore.deleteStaff(id);
      return { data: result };
    }

    // Exam delete
    if (url.startsWith("/exams/")) {
      const id = url.split("/exams/")[1];
      const result = mockStore.deleteExam(id);
      return { data: result };
    }

    // Timetable delete
    if (url.startsWith("/timetable/")) {
      const id = url.split("/timetable/")[1];
      const result = mockStore.deleteTimetableSlot(id);
      return { data: result };
    }

    return { data: { success: true } };
  },
};

export default api;
