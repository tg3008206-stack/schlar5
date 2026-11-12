const bcrypt = require("bcryptjs");

// In-memory data store for EduPlus
class InMemoryCollection {
  constructor(name, initialData = []) {
    this.name = name;
    this.items = [...initialData];
  }

  _clone(item) {
    if (!item) return null;
    const doc = JSON.parse(JSON.stringify(item));
    // Add Mongoose document helper methods
    doc.toObject = function () {
      return { ...this };
    };
    doc.save = async function () {
      return this;
    };
    if (this.name === "User") {
      doc.matchPassword = async function (entered) {
        if (this.password === entered) return true;
        try {
          return await bcrypt.compare(entered, this.password);
        } catch {
          return false;
        }
      };
    }
    return doc;
  }

  _matches(item, query = {}) {
    if (!query || Object.keys(query).length === 0) return true;

    for (const [key, val] of Object.entries(query)) {
      if (key === "$or" && Array.isArray(val)) {
        const matchesAny = val.some((subQ) => this._matches(item, subQ));
        if (!matchesAny) return false;
        continue;
      }

      const itemVal = item[key];

      if (val !== null && typeof val === "object" && !Array.isArray(val)) {
        if ("$ne" in val && itemVal === val.$ne) return false;
        if ("$in" in val && Array.isArray(val.$in) && !val.$in.includes(itemVal)) return false;
        if ("$nin" in val && Array.isArray(val.$nin) && val.$nin.includes(itemVal)) return false;
        if ("$gte" in val && itemVal < val.$gte) return false;
        if ("$lte" in val && itemVal > val.$lte) return false;
        if ("$gt" in val && itemVal <= val.$gt) return false;
        if ("$lt" in val && itemVal >= val.$lt) return false;
        if ("$regex" in val) {
          const reg = new RegExp(val.$regex, val.$options || "");
          if (!reg.test(String(itemVal || ""))) return false;
        }
        continue;
      }

      // Exact match
      if (itemVal != val) {
        return false;
      }
    }
    return true;
  }

  _makeQuery(data) {
    const self = this;
    return {
      _data: Array.isArray(data) ? data.map((d) => self._clone(d)) : self._clone(data),
      select(fields) {
        if (!fields || !this._data) return this;
        const fieldStr = typeof fields === "string" ? fields : "";
        const parts = fieldStr.split(" ").filter(Boolean);
        const exclusions = parts.filter((p) => p.startsWith("-")).map((p) => p.slice(1));
        const inclusions = parts.filter((p) => !p.startsWith("-"));

        const cleanDoc = (d) => {
          if (!d) return d;
          if (exclusions.length > 0) {
            exclusions.forEach((f) => delete d[f]);
          } else if (inclusions.length > 0) {
            const keep = { _id: d._id };
            inclusions.forEach((f) => {
              keep[f] = d[f];
            });
            return keep;
          }
          return d;
        };

        if (Array.isArray(this._data)) {
          this._data = this._data.map(cleanDoc);
        } else {
          this._data = cleanDoc(this._data);
        }
        return this;
      },
      sort(sortObj) {
        if (!sortObj || !Array.isArray(this._data)) return this;
        const [field, direction] = Object.entries(sortObj)[0] || [];
        if (!field) return this;
        this._data.sort((a, b) => {
          const aVal = a[field] ?? "";
          const bVal = b[field] ?? "";
          if (aVal < bVal) return direction === -1 ? 1 : -1;
          if (aVal > bVal) return direction === -1 ? -1 : 1;
          return 0;
        });
        return this;
      },
      populate(path, selectFields) {
        if (!this._data) return this;
        const populateItem = (item) => {
          if (!item || !item[path]) return item;
          const refId = typeof item[path] === "object" ? item[path]._id : item[path];
          // Find ref in user collection
          const userStore = inMemoryCollections["User"];
          if (userStore) {
            const refDoc = userStore.items.find((u) => String(u._id) === String(refId));
            if (refDoc) {
              const clone = { ...refDoc };
              delete clone.password;
              item[path] = clone;
            }
          }
          return item;
        };

        if (Array.isArray(this._data)) {
          this._data = this._data.map(populateItem);
        } else {
          this._data = populateItem(this._data);
        }
        return this;
      },
      limit(n) {
        if (Array.isArray(this._data)) {
          this._data = this._data.slice(0, n);
        }
        return this;
      },
      skip(n) {
        if (Array.isArray(this._data)) {
          this._data = this._data.slice(n);
        }
        return this;
      },
      then(resolve, reject) {
        return Promise.resolve(this._data).then(resolve, reject);
      },
    };
  }

  find(query = {}) {
    const matches = this.items.filter((item) => this._matches(item, query));
    return this._makeQuery(matches);
  }

  findOne(query = {}) {
    const match = this.items.find((item) => this._matches(item, query));
    return this._makeQuery(match || null);
  }

  findById(id) {
    const match = this.items.find((item) => String(item._id) === String(id));
    return this._makeQuery(match || null);
  }

  async create(data) {
    const itemsToCreate = Array.isArray(data) ? data : [data];
    const created = [];
    for (const item of itemsToCreate) {
      const doc = {
        ...item,
        _id: item._id || "id_" + Math.random().toString(36).substring(2, 10) + Date.now().toString(36),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (this.name === "User" && doc.password) {
        doc.password = bcrypt.hashSync(doc.password, 10);
      }
      this.items.push(doc);
      created.push(this._clone(doc));
    }
    return Array.isArray(data) ? created : created[0];
  }

  async findByIdAndUpdate(id, updates = {}, options = {}) {
    const idx = this.items.findIndex((item) => String(item._id) === String(id));
    if (idx === -1) return null;
    const current = this.items[idx];
    const updated = {
      ...current,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    this.items[idx] = updated;
    return this._clone(updated);
  }

  async findByIdAndDelete(id) {
    const idx = this.items.findIndex((item) => String(item._id) === String(id));
    if (idx === -1) return null;
    const [removed] = this.items.splice(idx, 1);
    return this._clone(removed);
  }

  async findOneAndUpdate(query = {}, update = {}, options = {}) {
    let matchIndex = this.items.findIndex((item) => this._matches(item, query));
    if (matchIndex === -1) {
      if (options.upsert) {
        const setOnInsert = update.$setOnInsert || {};
        const setFields = update.$set || {};
        const directFields = {};
        for (const [k, v] of Object.entries(update)) {
          if (!k.startsWith("$")) directFields[k] = v;
        }
        const newDoc = {
          ...query,
          ...setOnInsert,
          ...setFields,
          ...directFields,
          _id: "id_" + Math.random().toString(36).substring(2, 10) + Date.now().toString(36),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        this.items.push(newDoc);
        return this._clone(newDoc);
      }
      return null;
    }

    const current = this.items[matchIndex];
    const setFields = update.$set || {};
    const directFields = {};
    for (const [k, v] of Object.entries(update)) {
      if (!k.startsWith("$")) directFields[k] = v;
    }
    const updated = {
      ...current,
      ...setFields,
      ...directFields,
      updatedAt: new Date().toISOString(),
    };
    this.items[matchIndex] = updated;
    return this._clone(updated);
  }

  async countDocuments(query = {}) {
    return this.items.filter((item) => this._matches(item, query)).length;
  }

  async deleteMany(query = {}) {
    if (!query || Object.keys(query).length === 0) {
      const count = this.items.length;
      this.items = [];
      return { deletedCount: count };
    }
    const remaining = this.items.filter((item) => !this._matches(item, query));
    const deletedCount = this.items.length - remaining.length;
    this.items = remaining;
    return { deletedCount };
  }
}

// Global in-memory collections registry
const inMemoryCollections = {};

// Helper to get or create collection
function getInMemoryCollection(name, initialData = []) {
  if (!inMemoryCollections[name]) {
    inMemoryCollections[name] = new InMemoryCollection(name, initialData);
  }
  return inMemoryCollections[name];
}

// Seed initial data
const passwordHash = (pw) => bcrypt.hashSync(pw, 10);

const initialUsers = [
  {
    _id: "user_admin_001",
    name: "System Admin",
    email: "admin@school.com",
    password: passwordHash("admin123"),
    role: "admin",
    adminId: "SYSTEM_ADMIN",
    accessLevel: "Full Control (Root)",
    dutyStation: "Central Administration",
    accessProtocol: "ADMIN_SECURE_V1",
    status: "Active",
    contactNumber: "+1 (555) 019-2834",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "user_teacher_001",
    name: "Charu Sarswat",
    email: "charusaraswat639649@gmail.com",
    password: passwordHash("teacher123"),
    role: "teacher",
    teacherId: "123456",
    primarySubject: "Math",
    qualification: "PHD",
    employeeType: "Academic Faculty",
    experience: "4",
    department: "Math",
    payrollId: "PAY_123456",
    contractStatus: "ACTIVE",
    dutyStation: "Main Campus",
    monthlySalary: 65000,
    accessProtocol: "TEACHER_SECURE_V1",
    status: "Active",
    contactNumber: "+1 (555) 987-6543",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "user_student_001",
    name: "Ankit",
    email: "g@gmail.com",
    password: passwordHash("student123"),
    role: "student",
    rollNo: "4",
    class: "10",
    section: "A",
    bloodGroup: "A+",
    guardianContact: "9675700000",
    fatherName: "Mr neera",
    dob: "2008-05-22",
    religion: "HINDUISM",
    gender: "MALE",
    currentAddress: "Nagla bans post kumarpur Hathras",
    enrollmentNo: "4",
    academicSession: "2025-2026",
    status: "Active",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "user_student_002",
    name: "Ayush",
    email: "a@gmail.com",
    password: passwordHash("student123"),
    role: "student",
    rollNo: "5",
    class: "3",
    section: "C",
    guardianContact: "9875706630",
    bloodGroup: "B+",
    academicSession: "2025-2026",
    status: "Active",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "user_student_003",
    name: "Charu Sarswat",
    email: "charu@school.com",
    password: passwordHash("student123"),
    role: "student",
    rollNo: "2200330100078",
    class: "Grade 12",
    section: "A",
    guardianContact: "9875706630",
    bloodGroup: "O+",
    academicSession: "2025-2026",
    status: "Active",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "user_student_004",
    name: "Ankit Kumar",
    email: "ankit@school.com",
    password: passwordHash("student123"),
    role: "student",
    rollNo: "LO1001",
    class: "10",
    section: "B",
    bloodGroup: "AB+",
    academicSession: "2025-2026",
    status: "Active",
    createdAt: new Date().toISOString(),
  },
];

const initialNotices = [
  {
    _id: "notice_001",
    title: "ANNUAL SPORTS MEET 2026",
    content: "The annual sports meet will be held on August 15th. Registrations for track, field, and indoor sports are now officially open at the Physical Education desk.",
    audience: "EVERYONE",
    category: "Sports",
    publishedBy: "user_admin_001",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "notice_002",
    title: "Mid-Term Examination Schedule Released",
    content: "The mid-term examination timetable for grades 8 through 12 has been published. All students are advised to check the Exam Schedule module.",
    audience: "STUDENT",
    category: "Academic",
    publishedBy: "user_admin_001",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    _id: "notice_003",
    title: "Faculty Staff Meeting - Curriculum Review",
    content: "Mandatory faculty meeting this Thursday at 3:30 PM in Conference Hall B to review second-term syllabus progress and assessment metrics.",
    audience: "TEACHER",
    category: "Administrative",
    publishedBy: "user_admin_001",
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
];

const initialExams = [
  {
    _id: "exam_001",
    examName: "UNIT TEST",
    targetClass: "3",
    examDate: "2026-04-24",
    description: "Automated schedule for UNIT_TEST (Grade 3)",
    academicSession: "2025-2026",
  },
  {
    _id: "exam_002",
    examName: "MID TERM",
    targetClass: "10",
    examDate: "2026-05-14",
    description: "Science & Mathematics Sessional Assessments",
    academicSession: "2025-2026",
  },
  {
    _id: "exam_003",
    examName: "Half Yearly Examination",
    targetClass: "All Classes",
    examDate: "2026-08-25",
    description: "Primary & Secondary Wings comprehensive review",
    academicSession: "2025-2026",
  },
  {
    _id: "exam_004",
    examName: "Summer Project Submission",
    targetClass: "All Classes",
    examDate: "2026-09-12",
    description: "Final deadline for all project work and portfolios",
    academicSession: "2025-2026",
  },
];

const initialEvents = [
  {
    _id: "event_001",
    title: "Labour Day Holiday",
    type: "holiday",
    date: "2026-05-01",
    description: "School remains closed in observance of International Labour Day.",
    createdBy: "user_admin_001",
  },
  {
    _id: "event_002",
    title: "Annual Sports Meet 2026",
    type: "event",
    date: "2026-08-15",
    description: "Main Ground, 9:00 AM onwards. Track, relays, and prize ceremonies.",
    createdBy: "user_admin_001",
  },
  {
    _id: "event_003",
    title: "Parent-Teacher Conference",
    type: "event",
    date: "2026-09-05",
    description: "Discussion on first quarter progress and developmental milestones.",
    createdBy: "user_admin_001",
  },
];

const initialFees = [
  {
    _id: "fee_001",
    student: "user_student_001",
    class: "10",
    section: "A",
    month: "October",
    year: "2026",
    totalAmount: 4500,
    paidAmount: 4500,
    settlementStatus: "PAID",
  },
  {
    _id: "fee_002",
    student: "user_student_002",
    class: "3",
    section: "C",
    month: "October",
    year: "2026",
    totalAmount: 3500,
    paidAmount: 2000,
    settlementStatus: "PARTIAL",
  },
  {
    _id: "fee_003",
    student: "user_student_003",
    class: "Grade 12",
    section: "A",
    month: "October",
    year: "2026",
    totalAmount: 5500,
    paidAmount: 0,
    settlementStatus: "PENDING",
  },
  {
    _id: "fee_004",
    student: "user_student_004",
    class: "10",
    section: "B",
    month: "October",
    year: "2026",
    totalAmount: 4500,
    paidAmount: 4500,
    settlementStatus: "PAID",
  },
];

const initialTimetable = [
  { _id: "tt_001", class: "10", section: "A", day: "MONDAY", period: "LEC.01", subjectName: "Mathematics", subjectCode: "MATH101", subjectType: "Theory", facultyName: "Charu Sarswat", facultyCode: "123456", department: "Math" },
  { _id: "tt_002", class: "10", section: "A", day: "MONDAY", period: "LEC.02", subjectName: "Physics", subjectCode: "PHY101", subjectType: "Theory", facultyName: "Dr. R. Sharma", facultyCode: "123457", department: "Science" },
  { _id: "tt_003", class: "10", section: "A", day: "MONDAY", period: "LEC.03", subjectName: "Chemistry Lab", subjectCode: "CHEM102", subjectType: "Practical", facultyName: "Ms. Neha Verma", facultyCode: "123458", department: "Science" },
  { _id: "tt_004", class: "10", section: "A", day: "TUESDAY", period: "LEC.01", subjectName: "English Lit", subjectCode: "ENG101", subjectType: "Theory", facultyName: "Mr. David Miller", facultyCode: "123459", department: "Humanities" },
  { _id: "tt_005", class: "10", section: "A", day: "TUESDAY", period: "LEC.02", subjectName: "Mathematics", subjectCode: "MATH101", subjectType: "Theory", facultyName: "Charu Sarswat", facultyCode: "123456", department: "Math" },
  { _id: "tt_006", class: "10", section: "A", day: "WEDNESDAY", period: "LEC.01", subjectName: "Computer Science", subjectCode: "CS101", subjectType: "Practical", facultyName: "Mr. Alex Tan", facultyCode: "123460", department: "IT" },
];

const initialMaterials = [
  {
    _id: "mat_001",
    title: "Quadratic Equations & Polynomials - Complete Study Notes",
    targetClass: "10",
    section: "All Sections",
    category: "STUDY MATERIAL",
    subject: "Mathematics",
    link: "https://example.com/materials/math-ch4.pdf",
    uploadedBy: "user_teacher_001",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "mat_002",
    title: "Sample Practice Question Paper - Term 1 2026",
    targetClass: "10",
    section: "All Sections",
    category: "PAPER",
    subject: "Science",
    link: "https://example.com/materials/science-mock.pdf",
    uploadedBy: "user_teacher_001",
    createdAt: new Date().toISOString(),
  },
  {
    _id: "mat_003",
    title: "Geometry Problem Set #3 - Due Friday",
    targetClass: "10",
    section: "A",
    category: "HOMEWORK",
    subject: "Mathematics",
    link: "https://example.com/homework/math-ps3.pdf",
    uploadedBy: "user_teacher_001",
    createdAt: new Date().toISOString(),
  },
];

const initialMarks = [
  {
    _id: "mark_001",
    student: "user_student_001",
    class: "10",
    section: "A",
    assessmentType: "1st Sessional",
    subject: "Mathematics",
    marksObtained: 88,
    maxMarks: 100,
    remarks: "Excellent problem solving skills",
    year: "2026",
  },
  {
    _id: "mark_002",
    student: "user_student_001",
    class: "10",
    section: "A",
    assessmentType: "1st Sessional",
    subject: "Science",
    marksObtained: 92,
    maxMarks: 100,
    remarks: "Great practical lab work",
    year: "2026",
  },
  {
    _id: "mark_003",
    student: "user_student_004",
    class: "10",
    section: "B",
    assessmentType: "1st Sessional",
    subject: "Mathematics",
    marksObtained: 79,
    maxMarks: 100,
    remarks: "Good understanding of core concepts",
    year: "2026",
  },
];

// Initialize collections
getInMemoryCollection("User", initialUsers);
getInMemoryCollection("Notice", initialNotices);
getInMemoryCollection("Exam", initialExams);
getInMemoryCollection("Event", initialEvents);
getInMemoryCollection("Fee", initialFees);
getInMemoryCollection("Timetable", initialTimetable);
getInMemoryCollection("Material", initialMaterials);
getInMemoryCollection("SessionalMark", initialMarks);
getInMemoryCollection("Attendance", []);
getInMemoryCollection("StaffAttendance", []);

module.exports = {
  getInMemoryCollection,
  inMemoryCollections,
};
