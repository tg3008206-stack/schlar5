// Self-contained in-browser database for Schlar Frontend Model
const STORAGE_PREFIX = "eduplus_db_";

// Comprehensive photo assets for students & staff
const STUDENT_AVATARS = [
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=180&q=80",
];

const TEACHER_AVATARS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=180&q=80",
];

// Rich predefined seed data
export const createDefaultSchoolDataset = () => {
  const users = [
    // --- ADMIN ---
    {
      _id: "user_admin_001",
      name: "System Administrator",
      email: "admin@school.com",
      role: "admin",
      adminId: "ADMIN-ROOT-01",
      accessLevel: "Full Institutional Control",
      dutyStation: "Central Administration Office",
      contactNumber: "+1 (555) 019-2834",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
      status: "Active",
      createdAt: "2025-01-10T08:00:00Z",
    },

    // --- TEACHERS (8 Faculty members across core subjects) ---
    {
      _id: "user_teacher_001",
      name: "Dr. Charu Sarswat",
      email: "charusaraswat639649@gmail.com",
      role: "teacher",
      teacherId: "FAC-123456",
      primarySubject: "Mathematics",
      qualification: "Ph.D. in Pure Mathematics",
      employeeType: "Academic Faculty",
      experience: "7 Years",
      department: "Mathematics",
      dutyStation: "Senior Academic Wing",
      monthlySalary: 72000,
      payrollId: "PAY-123456",
      contractStatus: "ACTIVE",
      contactNumber: "+91 98765 11001",
      profileImage: TEACHER_AVATARS[0],
      status: "Active",
      createdAt: "2025-02-01T09:00:00Z",
    },
    {
      _id: "user_teacher_002",
      name: "Dr. Vikram Sethi",
      email: "vikram.sethi@school.com",
      role: "teacher",
      teacherId: "FAC-123457",
      primarySubject: "Physics",
      qualification: "Ph.D. in Physics, M.Sc.",
      employeeType: "Academic Faculty",
      experience: "9 Years",
      department: "Science",
      dutyStation: "Physics Research Lab",
      monthlySalary: 68000,
      payrollId: "PAY-123457",
      contractStatus: "ACTIVE",
      contactNumber: "+91 98765 11002",
      profileImage: TEACHER_AVATARS[1],
      status: "Active",
      createdAt: "2025-02-05T09:00:00Z",
    },
    {
      _id: "user_teacher_003",
      name: "Mrs. Clara Woods",
      email: "clara.woods@school.com",
      role: "teacher",
      teacherId: "FAC-123458",
      primarySubject: "English Literature",
      qualification: "M.A. English, B.Ed.",
      employeeType: "Academic Faculty",
      experience: "5 Years",
      department: "Humanities",
      dutyStation: "Humanities Block",
      monthlySalary: 58000,
      payrollId: "PAY-123458",
      contractStatus: "ACTIVE",
      contactNumber: "+91 98765 11003",
      profileImage: TEACHER_AVATARS[2],
      status: "Active",
      createdAt: "2025-02-10T09:00:00Z",
    },
    {
      _id: "user_teacher_004",
      name: "Mr. Alex Tan",
      email: "alex.tan@school.com",
      role: "teacher",
      teacherId: "FAC-123459",
      primarySubject: "Computer Applications",
      qualification: "M.Tech in Computer Science",
      employeeType: "Academic Faculty",
      experience: "6 Years",
      department: "IT & Computing",
      dutyStation: "Advanced Computing Lab",
      monthlySalary: 65000,
      payrollId: "PAY-123459",
      contractStatus: "ACTIVE",
      contactNumber: "+91 98765 11004",
      profileImage: TEACHER_AVATARS[4],
      status: "Active",
      createdAt: "2025-02-12T09:00:00Z",
    },
    {
      _id: "user_teacher_005",
      name: "Dr. Neha Verma",
      email: "neha.verma@school.com",
      role: "teacher",
      teacherId: "FAC-123460",
      primarySubject: "Chemistry",
      qualification: "Ph.D. in Organic Chemistry",
      employeeType: "Academic Faculty",
      experience: "8 Years",
      department: "Science",
      dutyStation: "Chemistry Wet Lab",
      monthlySalary: 67000,
      payrollId: "PAY-123460",
      contractStatus: "ACTIVE",
      contactNumber: "+91 98765 11005",
      profileImage: TEACHER_AVATARS[3],
      status: "Active",
      createdAt: "2025-02-15T09:00:00Z",
    },
    {
      _id: "user_teacher_006",
      name: "Mr. Rajan Nair",
      email: "rajan.nair@school.com",
      role: "teacher",
      teacherId: "FAC-123461",
      primarySubject: "Social Sciences",
      qualification: "M.A. History, B.Ed.",
      employeeType: "Academic Faculty",
      experience: "11 Years",
      department: "Social Studies",
      dutyStation: "Senior Academic Wing",
      monthlySalary: 62000,
      payrollId: "PAY-123461",
      contractStatus: "ACTIVE",
      contactNumber: "+91 98765 11006",
      profileImage: TEACHER_AVATARS[5],
      status: "Active",
      createdAt: "2025-02-20T09:00:00Z",
    },

    // --- STUDENTS (20+ students across Class 10-A, 10-B, 12-A, 9-A, 3-C) ---
    {
      _id: "user_student_001",
      name: "Ankit Sharma",
      email: "g@gmail.com",
      role: "student",
      rollNo: "4",
      class: "10",
      section: "A",
      bloodGroup: "A+",
      guardianContact: "9675700000",
      fatherName: "Mr. Neeraj Sharma",
      motherName: "Mrs. Sunita Sharma",
      dob: "2009-05-22",
      religion: "Hinduism",
      gender: "Male",
      currentAddress: "Nagla Bans, Hathras, UP",
      permanentAddress: "Nagla Bans, Hathras, UP",
      enrollmentNo: "ENR-2025-004",
      academicSession: "2025-2026",
      contactNumber: "+91 96757 00000",
      profileImage: STUDENT_AVATARS[0],
      status: "Active",
      createdAt: "2025-04-01T10:00:00Z",
    },
    {
      _id: "user_student_002",
      name: "Ayush Verma",
      email: "a@gmail.com",
      role: "student",
      rollNo: "5",
      class: "3",
      section: "C",
      bloodGroup: "B+",
      guardianContact: "9875706630",
      fatherName: "Mr. Rajesh Verma",
      motherName: "Mrs. Anita Verma",
      dob: "2016-08-14",
      gender: "Male",
      currentAddress: "Sector 14, Civil Lines",
      permanentAddress: "Sector 14, Civil Lines",
      enrollmentNo: "ENR-2025-005",
      academicSession: "2025-2026",
      contactNumber: "+91 98757 06630",
      profileImage: STUDENT_AVATARS[1],
      status: "Active",
      createdAt: "2025-04-02T10:00:00Z",
    },
    {
      _id: "user_student_003",
      name: "Charu Saraswat",
      email: "charu@school.com",
      role: "student",
      rollNo: "2200330100078",
      class: "Grade 12",
      section: "A",
      bloodGroup: "O+",
      guardianContact: "9875706630",
      fatherName: "Mr. R. Saraswat",
      motherName: "Mrs. K. Saraswat",
      dob: "2007-11-03",
      gender: "Female",
      currentAddress: "Orchid Residency, Apt 402",
      permanentAddress: "Orchid Residency, Apt 402",
      enrollmentNo: "ENR-2025-078",
      academicSession: "2025-2026",
      contactNumber: "+91 98757 06630",
      profileImage: STUDENT_AVATARS[2],
      status: "Active",
      createdAt: "2025-04-05T10:00:00Z",
    },
    {
      _id: "user_student_004",
      name: "Ankit Kumar",
      email: "ankit@school.com",
      role: "student",
      rollNo: "LO1001",
      class: "10",
      section: "B",
      bloodGroup: "AB+",
      guardianContact: "9123456789",
      fatherName: "Mr. S. Kumar",
      motherName: "Mrs. M. Kumar",
      dob: "2009-02-18",
      gender: "Male",
      currentAddress: "Green Park Extension, House 12",
      permanentAddress: "Green Park Extension, House 12",
      enrollmentNo: "ENR-2025-101",
      academicSession: "2025-2026",
      contactNumber: "+91 91234 56789",
      profileImage: STUDENT_AVATARS[3],
      status: "Active",
      createdAt: "2025-04-06T10:00:00Z",
    },
    {
      _id: "user_student_005",
      name: "Riya Sen",
      email: "riya.sen@school.com",
      role: "student",
      rollNo: "12",
      class: "10",
      section: "A",
      bloodGroup: "O-",
      guardianContact: "9811223344",
      fatherName: "Mr. Alok Sen",
      motherName: "Mrs. Priya Sen",
      dob: "2009-07-29",
      gender: "Female",
      currentAddress: "Lakeview Towers, Flat 9A",
      permanentAddress: "Lakeview Towers, Flat 9A",
      enrollmentNo: "ENR-2025-012",
      academicSession: "2025-2026",
      contactNumber: "+91 98112 23344",
      profileImage: STUDENT_AVATARS[4],
      status: "Active",
      createdAt: "2025-04-10T10:00:00Z",
    },
    {
      _id: "user_student_006",
      name: "Devendra Patel",
      email: "devendra.patel@school.com",
      role: "student",
      rollNo: "15",
      class: "10",
      section: "A",
      bloodGroup: "B+",
      guardianContact: "9822334455",
      fatherName: "Mr. Suresh Patel",
      motherName: "Mrs. Geeta Patel",
      dob: "2009-09-12",
      gender: "Male",
      currentAddress: "Royal Palms, Villa 34",
      permanentAddress: "Royal Palms, Villa 34",
      enrollmentNo: "ENR-2025-015",
      academicSession: "2025-2026",
      contactNumber: "+91 98223 34455",
      profileImage: STUDENT_AVATARS[5],
      status: "Active",
      createdAt: "2025-04-12T10:00:00Z",
    },
    {
      _id: "user_student_007",
      name: "Sneha Reddy",
      email: "sneha.reddy@school.com",
      role: "student",
      rollNo: "18",
      class: "10",
      section: "A",
      bloodGroup: "A-",
      guardianContact: "9833445566",
      fatherName: "Mr. K. Reddy",
      motherName: "Mrs. L. Reddy",
      dob: "2009-03-15",
      gender: "Female",
      currentAddress: "Green Glen Layout, House 88",
      permanentAddress: "Green Glen Layout, House 88",
      enrollmentNo: "ENR-2025-018",
      academicSession: "2025-2026",
      contactNumber: "+91 98334 45566",
      profileImage: STUDENT_AVATARS[6],
      status: "Active",
      createdAt: "2025-04-14T10:00:00Z",
    },
    {
      _id: "user_student_008",
      name: "Rohan Kapoor",
      email: "rohan.kapoor@school.com",
      role: "student",
      rollNo: "21",
      class: "10",
      section: "A",
      bloodGroup: "O+",
      guardianContact: "9844556677",
      fatherName: "Mr. Amit Kapoor",
      motherName: "Mrs. Ritu Kapoor",
      dob: "2009-11-20",
      gender: "Male",
      currentAddress: "Parijat Enclave, Block C-3",
      permanentAddress: "Parijat Enclave, Block C-3",
      enrollmentNo: "ENR-2025-021",
      academicSession: "2025-2026",
      contactNumber: "+91 98445 56677",
      profileImage: STUDENT_AVATARS[7],
      status: "Active",
      createdAt: "2025-04-15T10:00:00Z",
    },
    {
      _id: "user_student_009",
      name: "Meera Nair",
      email: "meera.nair@school.com",
      role: "student",
      rollNo: "24",
      class: "10",
      section: "B",
      bloodGroup: "B-",
      guardianContact: "9855667788",
      fatherName: "Mr. V. Nair",
      motherName: "Mrs. P. Nair",
      dob: "2009-01-08",
      gender: "Female",
      currentAddress: "Hill View Apartments, #501",
      permanentAddress: "Hill View Apartments, #501",
      enrollmentNo: "ENR-2025-024",
      academicSession: "2025-2026",
      contactNumber: "+91 98556 67788",
      profileImage: STUDENT_AVATARS[8],
      status: "Active",
      createdAt: "2025-04-18T10:00:00Z",
    },
    {
      _id: "user_student_010",
      name: "Karan Johar",
      email: "karan.johar@school.com",
      role: "student",
      rollNo: "28",
      class: "10",
      section: "B",
      bloodGroup: "A+",
      guardianContact: "9866778899",
      fatherName: "Mr. Yash Johar",
      motherName: "Mrs. Hiroo Johar",
      dob: "2009-06-30",
      gender: "Male",
      currentAddress: "Bandra West, Marine Drive #12",
      permanentAddress: "Bandra West, Marine Drive #12",
      enrollmentNo: "ENR-2025-028",
      academicSession: "2025-2026",
      contactNumber: "+91 98667 78899",
      profileImage: STUDENT_AVATARS[9],
      status: "Active",
      createdAt: "2025-04-20T10:00:00Z",
    },
    {
      _id: "user_student_011",
      name: "Tanvi Deshmukh",
      email: "tanvi.d@school.com",
      role: "student",
      rollNo: "32",
      class: "9",
      section: "A",
      bloodGroup: "O+",
      guardianContact: "9877889900",
      fatherName: "Mr. R. Deshmukh",
      motherName: "Mrs. G. Deshmukh",
      dob: "2010-04-17",
      gender: "Female",
      currentAddress: "Shivaji Nagar, Lane 4",
      permanentAddress: "Shivaji Nagar, Lane 4",
      enrollmentNo: "ENR-2025-032",
      academicSession: "2025-2026",
      contactNumber: "+91 98778 89900",
      profileImage: STUDENT_AVATARS[10],
      status: "Active",
      createdAt: "2025-04-22T10:00:00Z",
    },
    {
      _id: "user_student_012",
      name: "Aditya Bhatt",
      email: "aditya.b@school.com",
      role: "student",
      rollNo: "36",
      class: "9",
      section: "A",
      bloodGroup: "AB-",
      guardianContact: "9888990011",
      fatherName: "Mr. M. Bhatt",
      motherName: "Mrs. S. Bhatt",
      dob: "2010-10-05",
      gender: "Male",
      currentAddress: "Sunset Boulevard, House 5",
      permanentAddress: "Sunset Boulevard, House 5",
      enrollmentNo: "ENR-2025-036",
      academicSession: "2025-2026",
      contactNumber: "+91 98889 90011",
      profileImage: STUDENT_AVATARS[11],
      status: "Active",
      createdAt: "2025-04-25T10:00:00Z",
    },
    {
      _id: "user_student_013",
      name: "Pooja Hegde",
      email: "pooja.h@school.com",
      role: "student",
      rollNo: "40",
      class: "Grade 12",
      section: "A",
      bloodGroup: "A+",
      guardianContact: "9899001122",
      fatherName: "Mr. M. Hegde",
      motherName: "Mrs. L. Hegde",
      dob: "2007-09-19",
      gender: "Female",
      currentAddress: "Palm Meadows, Villa 102",
      permanentAddress: "Palm Meadows, Villa 102",
      enrollmentNo: "ENR-2025-040",
      academicSession: "2025-2026",
      contactNumber: "+91 98990 01122",
      profileImage: STUDENT_AVATARS[2],
      status: "Active",
      createdAt: "2025-04-26T10:00:00Z",
    },
    {
      _id: "user_student_014",
      name: "Siddharth Rao",
      email: "sid.rao@school.com",
      role: "student",
      rollNo: "44",
      class: "Grade 12",
      section: "A",
      bloodGroup: "B+",
      guardianContact: "9800112233",
      fatherName: "Mr. K. Rao",
      motherName: "Mrs. V. Rao",
      dob: "2007-12-25",
      gender: "Male",
      currentAddress: "Defence Colony, #A-22",
      permanentAddress: "Defence Colony, #A-22",
      enrollmentNo: "ENR-2025-044",
      academicSession: "2025-2026",
      contactNumber: "+91 98001 12233",
      profileImage: STUDENT_AVATARS[0],
      status: "Active",
      createdAt: "2025-04-28T10:00:00Z",
    },
  ];

  // Notices
  const notices = [
    {
      _id: "notice_001",
      title: "ANNUAL SPORTS MEET 2026",
      content: "The annual sports championship will be held on August 15th. Registrations for 100m, 400m relay, long jump, table tennis and basketball are open at the PE desk.",
      audience: "EVERYONE",
      category: "Sports",
      publishedBy: { _id: "user_admin_001", name: "System Administrator", role: "admin" },
      createdAt: new Date().toISOString(),
    },
    {
      _id: "notice_002",
      title: "Mid-Term Examination Schedule Released",
      content: "The mid-term examination timetable for Classes 8 through 12 has been published. All students are advised to download the syllabus guide from Academic Resources.",
      audience: "STUDENT",
      category: "Academic",
      publishedBy: { _id: "user_admin_001", name: "System Administrator", role: "admin" },
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      _id: "notice_003",
      title: "Mandatory Faculty Curriculum Meeting",
      content: "All academic department heads and subject leads must attend the term evaluation meeting this Thursday at 3:30 PM in Conference Room B.",
      audience: "TEACHER",
      category: "Administrative",
      publishedBy: { _id: "user_admin_001", name: "System Administrator", role: "admin" },
      createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    },
    {
      _id: "notice_004",
      title: "Inter-School Science Olympiad Registrations",
      content: "Selected students from Classes 9 to 12 can now register for the National Science Olympiad. Contact Dr. Vikram Sethi in the Physics Lab before Friday.",
      audience: "STUDENT",
      category: "Academic",
      publishedBy: { _id: "user_teacher_002", name: "Dr. Vikram Sethi", role: "teacher" },
      createdAt: new Date(Date.now() - 86400000 * 6).toISOString(),
    },
    {
      _id: "notice_005",
      title: "Quarterly Fee Settlement Reminder",
      content: "Parents and guardians are kindly reminded that 2nd Quarter Tuition Fees should be cleared by the 10th of next month to prevent late processing charges.",
      audience: "EVERYONE",
      category: "General",
      publishedBy: { _id: "user_admin_001", name: "System Administrator", role: "admin" },
      createdAt: new Date(Date.now() - 86400000 * 8).toISOString(),
    },
  ];

  // Exams
  const exams = [
    {
      _id: "exam_001",
      examName: "UNIT TEST - I",
      targetClass: "3",
      examDate: "24/04/2026",
      description: "Formative evaluation for English, Math, and Environmental Science.",
      academicSession: "2025-2026",
    },
    {
      _id: "exam_002",
      examName: "MID TERM EXAMINATION",
      targetClass: "10",
      examDate: "14/05/2026",
      description: "Major academic assessment across all Core STEM & Language subjects.",
      academicSession: "2025-2026",
    },
    {
      _id: "exam_003",
      examName: "Half Yearly Board Prep",
      targetClass: "Grade 12",
      examDate: "25/08/2026",
      description: "Mock board testing simulating official CBSE/State curriculum rules.",
      academicSession: "2025-2026",
    },
    {
      _id: "exam_004",
      examName: "Pre-Board Mock Exam - Series 1",
      targetClass: "10",
      examDate: "10/11/2026",
      description: "Comprehensive 3-hour written examination papers for Class 10 candidates.",
      academicSession: "2025-2026",
    },
    {
      _id: "exam_005",
      examName: "Practical Science Viva & Lab Assessment",
      targetClass: "All Classes",
      examDate: "05/12/2026",
      description: "Laboratory experiments, record book verification, and external viva.",
      academicSession: "2025-2026",
    },
  ];

  // Events
  const events = [
    {
      _id: "event_001",
      title: "Labour Day Observance",
      type: "holiday",
      date: "2026-05-01",
      description: "School campus remains closed in honor of workers and support staff.",
      createdBy: "user_admin_001",
    },
    {
      _id: "event_002",
      title: "Annual Sports Meet & Exhibition",
      type: "event",
      date: "2026-08-15",
      description: "Main sports arena, starting 9:00 AM. Athletic meets, march-past, and prize ceremony.",
      createdBy: "user_admin_001",
    },
    {
      _id: "event_003",
      title: "Science & Robotics Fair 2026",
      type: "event",
      date: "2026-09-18",
      description: "Interactive projects and autonomous robotics showcase by senior wings.",
      createdBy: "user_admin_001",
    },
    {
      _id: "event_004",
      title: "Gandhi Jayanti Holiday",
      type: "holiday",
      date: "2026-10-02",
      description: "National holiday observing the birth anniversary of Mahatma Gandhi.",
      createdBy: "user_admin_001",
    },
    {
      _id: "event_005",
      title: "Diwali Autumn Vacation",
      type: "holiday",
      date: "2026-11-12",
      description: "Campus closed for festive holiday recess.",
      createdBy: "user_admin_001",
    },
  ];

  // Fees
  const fees = [
    {
      _id: "fee_001",
      student: { _id: "user_student_001", name: "Ankit Sharma", rollNo: "4", class: "10", section: "A" },
      class: "10",
      section: "A",
      month: "October",
      year: "2026",
      totalAmount: 4800,
      paidAmount: 4800,
      settlementStatus: "PAID",
    },
    {
      _id: "fee_002",
      student: { _id: "user_student_002", name: "Ayush Verma", rollNo: "5", class: "3", section: "C" },
      class: "3",
      section: "C",
      month: "October",
      year: "2026",
      totalAmount: 3600,
      paidAmount: 2000,
      settlementStatus: "PARTIAL",
    },
    {
      _id: "fee_003",
      student: { _id: "user_student_003", name: "Charu Saraswat", rollNo: "2200330100078", class: "Grade 12", section: "A" },
      class: "Grade 12",
      section: "A",
      month: "October",
      year: "2026",
      totalAmount: 6200,
      paidAmount: 0,
      settlementStatus: "PENDING",
    },
    {
      _id: "fee_004",
      student: { _id: "user_student_004", name: "Ankit Kumar", rollNo: "LO1001", class: "10", section: "B" },
      class: "10",
      section: "B",
      month: "October",
      year: "2026",
      totalAmount: 4800,
      paidAmount: 4800,
      settlementStatus: "PAID",
    },
    {
      _id: "fee_005",
      student: { _id: "user_student_005", name: "Riya Sen", rollNo: "12", class: "10", section: "A" },
      class: "10",
      section: "A",
      month: "October",
      year: "2026",
      totalAmount: 4800,
      paidAmount: 4800,
      settlementStatus: "PAID",
    },
    {
      _id: "fee_006",
      student: { _id: "user_student_006", name: "Devendra Patel", rollNo: "15", class: "10", section: "A" },
      class: "10",
      section: "A",
      month: "October",
      year: "2026",
      totalAmount: 4800,
      paidAmount: 3000,
      settlementStatus: "PARTIAL",
    },
    {
      _id: "fee_007",
      student: { _id: "user_student_007", name: "Sneha Reddy", rollNo: "18", class: "10", section: "A" },
      class: "10",
      section: "A",
      month: "October",
      year: "2026",
      totalAmount: 4800,
      paidAmount: 4800,
      settlementStatus: "PAID",
    },
    {
      _id: "fee_008",
      student: { _id: "user_student_008", name: "Rohan Kapoor", rollNo: "21", class: "10", section: "A" },
      class: "10",
      section: "A",
      month: "October",
      year: "2026",
      totalAmount: 4800,
      paidAmount: 0,
      settlementStatus: "PENDING",
    },
  ];

  // Full Weekly Timetable for Class 10 - Section A
  const timetable = [
    { _id: "tt_101", class: "10", section: "A", day: "MONDAY", period: "LEC.01", subjectName: "Advanced Mathematics", subjectCode: "MATH-101", subjectType: "Theory", facultyName: "Dr. Charu Sarswat", facultyCode: "FAC-123456", department: "Mathematics" },
    { _id: "tt_102", class: "10", section: "A", day: "MONDAY", period: "LEC.02", subjectName: "Modern Physics", subjectCode: "PHYS-101", subjectType: "Theory", facultyName: "Dr. Vikram Sethi", facultyCode: "FAC-123457", department: "Science" },
    { _id: "tt_103", class: "10", section: "A", day: "MONDAY", period: "LEC.03", subjectName: "Chemistry Practical Lab", subjectCode: "CHEM-LAB", subjectType: "Practical", facultyName: "Dr. Neha Verma", facultyCode: "FAC-123460", department: "Science" },
    { _id: "tt_104", class: "10", section: "A", day: "MONDAY", period: "LEC.04", subjectName: "English Literature", subjectCode: "ENG-101", subjectType: "Theory", facultyName: "Mrs. Clara Woods", facultyCode: "FAC-123458", department: "Humanities" },
    { _id: "tt_105", class: "10", section: "A", day: "MONDAY", period: "LEC.05", subjectName: "Computer Applications", subjectCode: "CS-101", subjectType: "Practical", facultyName: "Mr. Alex Tan", facultyCode: "FAC-123459", department: "IT & Computing" },
    { _id: "tt_106", class: "10", section: "A", day: "MONDAY", period: "LEC.06", subjectName: "Social Sciences", subjectCode: "SOC-101", subjectType: "Theory", facultyName: "Mr. Rajan Nair", facultyCode: "FAC-123461", department: "Social Studies" },

    { _id: "tt_201", class: "10", section: "A", day: "TUESDAY", period: "LEC.01", subjectName: "English Literature", subjectCode: "ENG-101", subjectType: "Theory", facultyName: "Mrs. Clara Woods", facultyCode: "FAC-123458", department: "Humanities" },
    { _id: "tt_202", class: "10", section: "A", day: "TUESDAY", period: "LEC.02", subjectName: "Advanced Mathematics", subjectCode: "MATH-101", subjectType: "Theory", facultyName: "Dr. Charu Sarswat", facultyCode: "FAC-123456", department: "Mathematics" },
    { _id: "tt_203", class: "10", section: "A", day: "TUESDAY", period: "LEC.03", subjectName: "Modern Physics", subjectCode: "PHYS-101", subjectType: "Theory", facultyName: "Dr. Vikram Sethi", facultyCode: "FAC-123457", department: "Science" },
    { _id: "tt_204", class: "10", section: "A", day: "TUESDAY", period: "LEC.04", subjectName: "Chemistry Theory", subjectCode: "CHEM-101", subjectType: "Theory", facultyName: "Dr. Neha Verma", facultyCode: "FAC-123460", department: "Science" },
    { _id: "tt_205", class: "10", section: "A", day: "TUESDAY", period: "LEC.05", subjectName: "Physical Education", subjectCode: "PE-101", subjectType: "Practical", facultyName: "Coach R. Singh", facultyCode: "FAC-123469", department: "Sports" },

    { _id: "tt_301", class: "10", section: "A", day: "WEDNESDAY", period: "LEC.01", subjectName: "Computer Applications", subjectCode: "CS-101", subjectType: "Practical", facultyName: "Mr. Alex Tan", facultyCode: "FAC-123459", department: "IT & Computing" },
    { _id: "tt_302", class: "10", section: "A", day: "WEDNESDAY", period: "LEC.02", subjectName: "Advanced Mathematics", subjectCode: "MATH-101", subjectType: "Theory", facultyName: "Dr. Charu Sarswat", facultyCode: "FAC-123456", department: "Mathematics" },
    { _id: "tt_303", class: "10", section: "A", day: "WEDNESDAY", period: "LEC.03", subjectName: "Social Sciences", subjectCode: "SOC-101", subjectType: "Theory", facultyName: "Mr. Rajan Nair", facultyCode: "FAC-123461", department: "Social Studies" },

    { _id: "tt_401", class: "10", section: "A", day: "THURSDAY", period: "LEC.01", subjectName: "Modern Physics Lab", subjectCode: "PHYS-LAB", subjectType: "Practical", facultyName: "Dr. Vikram Sethi", facultyCode: "FAC-123457", department: "Science" },
    { _id: "tt_402", class: "10", section: "A", day: "THURSDAY", period: "LEC.02", subjectName: "Chemistry Theory", subjectCode: "CHEM-101", subjectType: "Theory", facultyName: "Dr. Neha Verma", facultyCode: "FAC-123460", department: "Science" },
    { _id: "tt_403", class: "10", section: "A", day: "THURSDAY", period: "LEC.03", subjectName: "English Literature", subjectCode: "ENG-101", subjectType: "Theory", facultyName: "Mrs. Clara Woods", facultyCode: "FAC-123458", department: "Humanities" },

    { _id: "tt_501", class: "10", section: "A", day: "FRIDAY", period: "LEC.01", subjectName: "Environmental Studies", subjectCode: "EVS-101", subjectType: "Theory", facultyName: "Dr. Neha Verma", facultyCode: "FAC-123460", department: "Science" },
    { _id: "tt_502", class: "10", section: "A", day: "FRIDAY", period: "LEC.02", subjectName: "Advanced Mathematics", subjectCode: "MATH-101", subjectType: "Theory", facultyName: "Dr. Charu Sarswat", facultyCode: "FAC-123456", department: "Mathematics" },
    { _id: "tt_503", class: "10", section: "A", day: "FRIDAY", period: "LEC.03", subjectName: "Library & Self-Study", subjectCode: "LIB-101", subjectType: "Practical", facultyName: "Chief Librarian", facultyCode: "FAC-LIB", department: "General" },

    { _id: "tt_601", class: "10", section: "A", day: "SATURDAY", period: "LEC.01", subjectName: "Weekly Assessment Test", subjectCode: "REV-101", subjectType: "Theory", facultyName: "Dr. Charu Sarswat", facultyCode: "FAC-123456", department: "Mathematics" },
    { _id: "tt_602", class: "10", section: "A", day: "SATURDAY", period: "LEC.02", subjectName: "Science Club & Projects", subjectCode: "PRJ-101", subjectType: "Practical", facultyName: "Dr. Vikram Sethi", facultyCode: "FAC-123457", department: "Science" },
  ];

  // Materials
  const materials = [
    {
      _id: "mat_001",
      title: "Class 10 Mathematics: Quadratic Equations, Proofs & Graphing Formulae",
      targetClass: "10",
      section: "All Sections",
      category: "STUDY MATERIAL",
      subject: "Mathematics",
      link: "https://example.com/materials/math-ch4.pdf",
      uploadedBy: { name: "Dr. Charu Sarswat", role: "teacher" },
      createdAt: new Date().toISOString(),
    },
    {
      _id: "mat_002",
      title: "Physics Mock Practice Paper: Optics, Ray Tracing & Refraction (Term 1)",
      targetClass: "10",
      section: "All Sections",
      category: "PAPER",
      subject: "Physics",
      link: "https://example.com/materials/physics-mock.pdf",
      uploadedBy: { name: "Dr. Vikram Sethi", role: "teacher" },
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
    {
      _id: "mat_003",
      title: "Weekly Calculus & Algebra Homework Problem Set #4",
      targetClass: "10",
      section: "A",
      category: "HOMEWORK",
      subject: "Mathematics",
      link: "https://example.com/materials/math-homework-4.pdf",
      uploadedBy: { name: "Dr. Charu Sarswat", role: "teacher" },
      createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
    {
      _id: "mat_004",
      title: "Organic Chemistry: Functional Groups, Reactions & Lab Safety Guide",
      targetClass: "10",
      section: "All Sections",
      category: "STUDY MATERIAL",
      subject: "Chemistry",
      link: "https://example.com/materials/chemistry-organic.pdf",
      uploadedBy: { name: "Dr. Neha Verma", role: "teacher" },
      createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    },
    {
      _id: "mat_005",
      title: "English Essay Writing Guide: The Art of Critical Literary Composition",
      targetClass: "10",
      section: "All Sections",
      category: "STUDY MATERIAL",
      subject: "English Literature",
      link: "https://example.com/materials/english-essays.pdf",
      uploadedBy: { name: "Mrs. Clara Woods", role: "teacher" },
      createdAt: new Date(Date.now() - 86400000 * 9).toISOString(),
    },
  ];

  // Marks for Ankit Sharma (and others) across subjects & terms
  const marks = [
    {
      _id: "mark_001",
      student: { _id: "user_student_001", name: "Ankit Sharma", rollNo: "4", class: "10", section: "A" },
      class: "10",
      section: "A",
      assessmentType: "1st Sessional",
      subject: "Mathematics",
      marksObtained: 94,
      maxMarks: 100,
      remarks: "Outstanding algebraic problem solving and analytical clarity.",
      year: "2026",
    },
    {
      _id: "mark_002",
      student: { _id: "user_student_001", name: "Ankit Sharma", rollNo: "4", class: "10", section: "A" },
      class: "10",
      section: "A",
      assessmentType: "1st Sessional",
      subject: "Physics",
      marksObtained: 89,
      maxMarks: 100,
      remarks: "Very strong experimental concepts and clear laboratory notes.",
      year: "2026",
    },
    {
      _id: "mark_003",
      student: { _id: "user_student_001", name: "Ankit Sharma", rollNo: "4", class: "10", section: "A" },
      class: "10",
      section: "A",
      assessmentType: "1st Sessional",
      subject: "Chemistry",
      marksObtained: 87,
      maxMarks: 100,
      remarks: "Good command over molecular weights and reaction mechanisms.",
      year: "2026",
    },
    {
      _id: "mark_004",
      student: { _id: "user_student_001", name: "Ankit Sharma", rollNo: "4", class: "10", section: "A" },
      class: "10",
      section: "A",
      assessmentType: "1st Sessional",
      subject: "English Literature",
      marksObtained: 85,
      maxMarks: 100,
      remarks: "Eloquent expression and high grammatical accuracy.",
      year: "2026",
    },
    {
      _id: "mark_005",
      student: { _id: "user_student_001", name: "Ankit Sharma", rollNo: "4", class: "10", section: "A" },
      class: "10",
      section: "A",
      assessmentType: "1st Sessional",
      subject: "Computer Applications",
      marksObtained: 96,
      maxMarks: 100,
      remarks: "Exceptional algorithm design and coding logic.",
      year: "2026",
    },
    // Riya Sen
    {
      _id: "mark_006",
      student: { _id: "user_student_005", name: "Riya Sen", rollNo: "12", class: "10", section: "A" },
      class: "10",
      section: "A",
      assessmentType: "1st Sessional",
      subject: "Mathematics",
      marksObtained: 96,
      maxMarks: 100,
      remarks: "Flawless theorem derivations and geometric accuracy.",
      year: "2026",
    },
    {
      _id: "mark_007",
      student: { _id: "user_student_005", name: "Riya Sen", rollNo: "12", class: "10", section: "A" },
      class: "10",
      section: "A",
      assessmentType: "1st Sessional",
      subject: "Physics",
      marksObtained: 92,
      maxMarks: 100,
      remarks: "Excellent grasp of motion equations and wave theory.",
      year: "2026",
    },
    // Ankit Kumar
    {
      _id: "mark_008",
      student: { _id: "user_student_004", name: "Ankit Kumar", rollNo: "LO1001", class: "10", section: "B" },
      class: "10",
      section: "B",
      assessmentType: "1st Sessional",
      subject: "Mathematics",
      marksObtained: 78,
      maxMarks: 100,
      remarks: "Steady progress; recommended to practice trigonometric proofs.",
      year: "2026",
    },
  ];

  // Attendance history for Class 10-A students
  const attendance = [];
  const dates = [
    "10/01/2026", "10/02/2026", "10/03/2026", "10/05/2026", "10/06/2026",
    "10/07/2026", "10/08/2026", "10/09/2026", "10/12/2026", "10/13/2026",
    "10/14/2026", "10/15/2026", "10/16/2026", "10/17/2026", "10/19/2026",
    "10/20/2026",
  ];

  const class10Students = users.filter((u) => u.role === "student" && u.class === "10" && u.section === "A");

  dates.forEach((d, dIdx) => {
    class10Students.forEach((st, sIdx) => {
      // realistic 94% presence
      const isAbsent = (dIdx + sIdx) % 17 === 0;
      const isLate = (dIdx + sIdx) % 11 === 0 && !isAbsent;
      const status = isAbsent ? "absent" : isLate ? "late" : "present";
      attendance.push({
        _id: `att_${dIdx}_${st._id}`,
        student: st._id,
        class: "10",
        section: "A",
        date: d,
        status,
        period: "Daily (Full Day)",
      });
    });
  });

  // Staff attendance
  const staffAttendance = [
    { _id: "satt_001", staff: "user_teacher_001", date: "10/20/2026", status: "present" },
    { _id: "satt_002", staff: "user_teacher_002", date: "10/20/2026", status: "present" },
    { _id: "satt_003", staff: "user_teacher_003", date: "10/20/2026", status: "present" },
    { _id: "satt_004", staff: "user_teacher_004", date: "10/20/2026", status: "present" },
    { _id: "satt_005", staff: "user_teacher_005", date: "10/20/2026", status: "present" },
    { _id: "satt_006", staff: "user_teacher_006", date: "10/20/2026", status: "late" },
  ];

  return {
    users,
    notices,
    exams,
    events,
    fees,
    timetable,
    materials,
    marks,
    attendance,
    staffAttendance,
  };
};

function loadCollection(name, initial) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + name);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn("Storage load error:", e);
  }
  saveCollection(name, initial);
  return [...initial];
}

function saveCollection(name, data) {
  try {
    localStorage.setItem(STORAGE_PREFIX + name, JSON.stringify(data));
  } catch (e) {
    console.warn("Storage save error:", e);
  }
}

export class EduPlusMockStore {
  constructor() {
    const defaults = createDefaultSchoolDataset();
    this.users = loadCollection("users", defaults.users);
    this.notices = loadCollection("notices", defaults.notices);
    this.exams = loadCollection("exams", defaults.exams);
    this.events = loadCollection("events", defaults.events);
    this.fees = loadCollection("fees", defaults.fees);
    this.timetable = loadCollection("timetable", defaults.timetable);
    this.materials = loadCollection("materials", defaults.materials);
    this.marks = loadCollection("marks", defaults.marks);
    this.attendance = loadCollection("attendance", defaults.attendance);
    this.staffAttendance = loadCollection("staffAttendance", defaults.staffAttendance);
  }

  resetToDefaults() {
    const defaults = createDefaultSchoolDataset();
    this.users = defaults.users;
    this.notices = defaults.notices;
    this.exams = defaults.exams;
    this.events = defaults.events;
    this.fees = defaults.fees;
    this.timetable = defaults.timetable;
    this.materials = defaults.materials;
    this.marks = defaults.marks;
    this.attendance = defaults.attendance;
    this.staffAttendance = defaults.staffAttendance;

    saveCollection("users", this.users);
    saveCollection("notices", this.notices);
    saveCollection("exams", this.exams);
    saveCollection("events", this.events);
    saveCollection("fees", this.fees);
    saveCollection("timetable", this.timetable);
    saveCollection("materials", this.materials);
    saveCollection("marks", this.marks);
    saveCollection("attendance", this.attendance);
    saveCollection("staffAttendance", this.staffAttendance);
  }

  // --- AUTOMATIC GENERATORS FOR DEMO ---

  autoGenerateFullSchool() {
    this.resetToDefaults();
    this.generateBatchStudents(8);
    this.simulateAttendanceToday();
    this.generateExamMarks();
    this.simulateFeeCollection();
    return {
      success: true,
      studentsCount: this.users.filter((u) => u.role === "student").length,
      staffCount: this.users.filter((u) => u.role === "teacher").length,
      timetableCount: this.timetable.length,
      marksCount: this.marks.length,
      feesCount: this.fees.length,
    };
  }

  generateBatchStudents(count = 5) {
    const firstNames = ["Aarav", "Ishaan", "Vihaan", "Aditi", "Zara", "Kavya", "Rahul", "Samarth", "Ananya", "Diya", "Reyansh", "Meera"];
    const lastNames = ["Gupta", "Malhotra", "Singhania", "Chopra", "Joshi", "Bansal", "Mehta", "Aggarwal", "Pandey", "Saxena"];
    const classes = ["10", "9", "Grade 12", "3"];
    const sections = ["A", "B", "C"];
    const bloods = ["A+", "B+", "O+", "AB+", "O-"];

    const newStudents = [];
    const existingCount = this.users.filter((u) => u.role === "student").length;

    for (let i = 0; i < count; i++) {
      const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
      const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
      const fullName = `${fn} ${ln}`;
      const cls = classes[Math.floor(Math.random() * classes.length)];
      const sec = sections[Math.floor(Math.random() * sections.length)];
      const roll = String(existingCount + i + 10);
      const studentId = `user_gen_${Date.now()}_${i}`;

      const st = {
        _id: studentId,
        name: fullName,
        email: `${fn.toLowerCase()}.${ln.toLowerCase()}${Math.floor(Math.random() * 900 + 100)}@school.com`,
        role: "student",
        rollNo: roll,
        class: cls,
        section: sec,
        bloodGroup: bloods[Math.floor(Math.random() * bloods.length)],
        guardianContact: `98${Math.floor(Math.random() * 89999999 + 10000000)}`,
        fatherName: `Mr. ${ln}`,
        motherName: `Mrs. ${ln}`,
        dob: "2009-08-15",
        gender: i % 2 === 0 ? "Male" : "Female",
        currentAddress: `Tower ${i + 1}, Metro Heights, Sector ${i + 20}`,
        permanentAddress: `Tower ${i + 1}, Metro Heights, Sector ${i + 20}`,
        enrollmentNo: `ENR-2025-${roll}`,
        academicSession: "2025-2026",
        profileImage: STUDENT_AVATARS[i % STUDENT_AVATARS.length],
        status: "Active",
        createdAt: new Date().toISOString(),
      };

      this.users.unshift(st);
      newStudents.push(st);

      // Auto generate fee row for new student
      this.fees.push({
        _id: `fee_gen_${st._id}`,
        student: { _id: st._id, name: st.name, rollNo: st.rollNo, class: st.class, section: st.section },
        class: st.class,
        section: st.section,
        month: "October",
        year: "2026",
        totalAmount: 4800,
        paidAmount: Math.random() > 0.3 ? 4800 : Math.random() > 0.5 ? 2400 : 0,
        settlementStatus: Math.random() > 0.3 ? "PAID" : Math.random() > 0.5 ? "PARTIAL" : "PENDING",
      });

      // Auto generate sample marks
      const subjects = ["Mathematics", "Physics", "Chemistry", "English Literature"];
      subjects.forEach((sub, sIdx) => {
        const score = Math.floor(Math.random() * 25 + 75);
        this.marks.push({
          _id: `mark_gen_${st._id}_${sIdx}`,
          student: { _id: st._id, name: st.name, rollNo: st.rollNo, class: st.class, section: st.section },
          class: st.class,
          section: st.section,
          assessmentType: "1st Sessional",
          subject: sub,
          marksObtained: score,
          maxMarks: 100,
          remarks: score >= 90 ? "Excellent understanding." : "Solid conceptual effort.",
          year: "2026",
        });
      });
    }

    saveCollection("users", this.users);
    saveCollection("fees", this.fees);
    saveCollection("marks", this.marks);
    return newStudents;
  }

  simulateAttendanceToday() {
    const todayStr = (() => {
      const d = new Date();
      return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}/${d.getFullYear()}`;
    })();

    const students = this.users.filter((u) => u.role === "student");
    let markedCount = 0;

    students.forEach((st, idx) => {
      const isAbsent = idx % 15 === 0;
      const isLate = idx % 8 === 0 && !isAbsent;
      const status = isAbsent ? "absent" : isLate ? "late" : "present";

      const existingIdx = this.attendance.findIndex((a) => a.student === st._id && a.date === todayStr);
      if (existingIdx !== -1) {
        this.attendance[existingIdx].status = status;
      } else {
        this.attendance.push({
          _id: `att_today_${st._id}`,
          student: st._id,
          class: st.class,
          section: st.section,
          date: todayStr,
          status,
          period: "Daily (Full Day)",
        });
      }
      markedCount++;
    });

    // Staff today
    const teachers = this.users.filter((u) => u.role === "teacher");
    teachers.forEach((t) => {
      const existing = this.staffAttendance.find((sa) => sa.staff === t._id && sa.date === todayStr);
      if (existing) {
        existing.status = "present";
      } else {
        this.staffAttendance.push({
          _id: `satt_today_${t._id}`,
          staff: t._id,
          date: todayStr,
          status: "present",
        });
      }
    });

    saveCollection("attendance", this.attendance);
    saveCollection("staffAttendance", this.staffAttendance);
    return { success: true, markedCount, date: todayStr };
  }

  generateExamMarks() {
    const students = this.users.filter((u) => u.role === "student");
    const subjects = ["Mathematics", "Physics", "Chemistry", "English Literature", "Computer Applications"];
    const terms = ["1st Sessional", "2nd Sessional"];

    students.forEach((st) => {
      terms.forEach((term) => {
        subjects.forEach((sub, sIdx) => {
          const exists = this.marks.some(
            (m) =>
              (typeof m.student === "object" ? m.student._id : m.student) === st._id &&
              m.assessmentType === term &&
              m.subject === sub
          );
          if (!exists) {
            const score = Math.floor(Math.random() * 26 + 72);
            this.marks.push({
              _id: `mark_auto_${st._id}_${term}_${sIdx}`,
              student: { _id: st._id, name: st.name, rollNo: st.rollNo, class: st.class, section: st.section },
              class: st.class,
              section: st.section,
              assessmentType: term,
              subject: sub,
              marksObtained: score,
              maxMarks: 100,
              remarks: score >= 90 ? "Superior subject command." : score >= 80 ? "Very good performance." : "Satisfactory progress.",
              year: "2026",
            });
          }
        });
      });
    });

    saveCollection("marks", this.marks);
    return { success: true, totalMarks: this.marks.length };
  }

  simulateFeeCollection() {
    let collectedCount = 0;
    this.fees = this.fees.map((f) => {
      if (f.settlementStatus !== "PAID") {
        collectedCount++;
        return {
          ...f,
          paidAmount: f.totalAmount,
          settlementStatus: "PAID",
        };
      }
      return f;
    });
    saveCollection("fees", this.fees);
    return { success: true, collectedCount };
  }

  // --- AUTH ---
  login(identifier, password, loginType) {
    const idClean = String(identifier || "").trim().toLowerCase();
    const user = this.users.find((u) => {
      const matchEmail = (u.email || "").toLowerCase() === idClean;
      const matchRoll = String(u.rollNo || "").toLowerCase() === idClean;
      return matchEmail || matchRoll;
    });

    if (!user) {
      // In demo mode: if user enters anything, let them log in as demo user matching role
      if (loginType === "student") {
        const student = this.users.find((u) => u.role === "student") || this.users[0];
        return {
          _id: student._id,
          name: student.name,
          email: student.email,
          role: student.role,
          rollNo: student.rollNo,
          class: student.class,
          section: student.section,
          profileImage: student.profileImage,
          token: "mock_token_" + student._id,
        };
      } else {
        const admin = this.users.find((u) => u.role === "admin") || this.users[0];
        return {
          _id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
          rollNo: admin.rollNo,
          profileImage: admin.profileImage,
          token: "mock_token_" + admin._id,
        };
      }
    }

    if (loginType === "student" && user.role !== "student") {
      throw new Error("Please switch to the Staff / Admin login tab");
    }
    if (loginType === "staff" && user.role === "student") {
      throw new Error("Please switch to the Student login tab");
    }

    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      rollNo: user.rollNo,
      class: user.class,
      section: user.section,
      profileImage: user.profileImage,
      token: "mock_jwt_token_" + user._id + "_" + Date.now(),
    };
  }

  register(payload) {
    const { name, email, role, rollNo, class: cls, section } = payload;
    const newUser = {
      _id: "user_" + Date.now(),
      name,
      email,
      role: role || "student",
      rollNo: rollNo || String(this.users.filter((u) => u.role === "student").length + 1),
      class: cls || "10",
      section: section || "A",
      status: "Active",
      profileImage: STUDENT_AVATARS[0],
      createdAt: new Date().toISOString(),
    };

    this.users.unshift(newUser);
    saveCollection("users", this.users);

    return {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      token: "mock_jwt_token_" + newUser._id,
    };
  }

  // --- STATS ---
  getDashboardStats() {
    const totalStudents = this.users.filter((u) => u.role === "student").length;
    const totalStaff = this.users.filter((u) => u.role === "teacher").length;
    const totalExams = this.exams.length;
    const totalNotices = this.notices.length;

    const totalCollection = this.fees.reduce((acc, f) => acc + (Number(f.paidAmount) || 0), 0);
    const totalPending = this.fees.reduce(
      (acc, f) => acc + Math.max(0, (Number(f.totalAmount) || 0) - (Number(f.paidAmount) || 0)),
      0
    );

    const facultyAttendancePercent = 94;

    return {
      totalStudents,
      totalStaff,
      totalExams,
      totalNotices,
      facultyAttendancePercent,
      monthRevenue: totalCollection,
      feeArrears: totalPending,
      totalCollection,
      totalPending,
    };
  }

  // --- STUDENTS ---
  getStudents(filters = {}) {
    let list = this.users.filter((u) => u.role === "student");
    if (filters.class && filters.class !== "All Classes") {
      list = list.filter((s) => s.class === filters.class);
    }
    if (filters.section && filters.section !== "All Sections") {
      list = list.filter((s) => s.section === filters.section);
    }
    return list;
  }

  getStudentById(id) {
    return this.users.find((u) => u._id === id) || null;
  }

  addStudent(payload) {
    const newStudent = {
      ...payload,
      _id: "user_student_" + Date.now(),
      role: "student",
      status: "Active",
      profileImage: payload.profileImage || STUDENT_AVATARS[Math.floor(Math.random() * STUDENT_AVATARS.length)],
      academicSession: payload.academicSession || "2025-2026",
      createdAt: new Date().toISOString(),
    };
    this.users.unshift(newStudent);
    saveCollection("users", this.users);
    return newStudent;
  }

  updateStudent(id, updates) {
    const idx = this.users.findIndex((u) => u._id === id);
    if (idx === -1) throw new Error("Student not found");
    const updated = { ...this.users[idx], ...updates, updatedAt: new Date().toISOString() };
    this.users[idx] = updated;
    saveCollection("users", this.users);
    return updated;
  }

  deleteStudent(id) {
    this.users = this.users.filter((u) => u._id !== id);
    saveCollection("users", this.users);
    return { success: true };
  }

  // --- STAFF ---
  getStaff() {
    return this.users.filter((u) => u.role === "teacher" || u.role === "admin");
  }

  addStaff(payload) {
    const newStaff = {
      ...payload,
      _id: "user_teacher_" + Date.now(),
      role: payload.role || "teacher",
      profileImage: payload.profileImage || TEACHER_AVATARS[Math.floor(Math.random() * TEACHER_AVATARS.length)],
      status: "Active",
      createdAt: new Date().toISOString(),
    };
    this.users.push(newStaff);
    saveCollection("users", this.users);
    return newStaff;
  }

  updateStaff(id, updates) {
    const idx = this.users.findIndex((u) => u._id === id);
    if (idx === -1) throw new Error("Staff not found");
    const updated = { ...this.users[idx], ...updates, updatedAt: new Date().toISOString() };
    this.users[idx] = updated;
    saveCollection("users", this.users);
    return updated;
  }

  deleteStaff(id) {
    this.users = this.users.filter((u) => u._id !== id);
    saveCollection("users", this.users);
    return { success: true };
  }

  // --- EXAMS ---
  getExams() {
    return this.exams;
  }

  addExam(payload) {
    const newExam = {
      ...payload,
      _id: "exam_" + Date.now(),
      academicSession: "2025-2026",
      createdAt: new Date().toISOString(),
    };
    this.exams.unshift(newExam);
    saveCollection("exams", this.exams);
    return newExam;
  }

  deleteExam(id) {
    this.exams = this.exams.filter((e) => e._id !== id);
    saveCollection("exams", this.exams);
    return { success: true };
  }

  // --- NOTICES ---
  getNotices(category) {
    if (!category || category === "All Notice Categories" || category === "All") return this.notices;
    return this.notices.filter((n) => (n.category || "").toLowerCase() === category.toLowerCase());
  }

  addNotice(payload) {
    const newNotice = {
      ...payload,
      _id: "notice_" + Date.now(),
      publishedBy: { _id: "user_admin_001", name: "System Administrator", role: "admin" },
      createdAt: new Date().toISOString(),
    };
    this.notices.unshift(newNotice);
    saveCollection("notices", this.notices);
    return newNotice;
  }

  // --- EVENTS ---
  getEvents() {
    return this.events;
  }

  addEvent(payload) {
    const newEvent = {
      ...payload,
      _id: "event_" + Date.now(),
      createdAt: new Date().toISOString(),
    };
    this.events.unshift(newEvent);
    saveCollection("events", this.events);
    return newEvent;
  }

  // --- FEES (Supports both ClassFees and FinanceControl contracts) ---
  getFees(filters = {}) {
    let rows = this.fees.map((f) => {
      const studentObj =
        typeof f.student === "object"
          ? f.student
          : this.users.find((u) => u._id === f.student) || { name: "Student", rollNo: "0" };
      return {
        _id: f._id,
        studentId: studentObj._id,
        name: studentObj.name,
        rollNo: studentObj.rollNo,
        class: f.class,
        section: f.section,
        month: f.month,
        year: f.year,
        totalAmount: Number(f.totalAmount) || 0,
        paidAmount: Number(f.paidAmount) || 0,
        settlementStatus: f.settlementStatus || "PENDING",
      };
    });

    if (filters.class && filters.class !== "All Classes") {
      rows = rows.filter((f) => String(f.class).trim().toLowerCase() === String(filters.class).trim().toLowerCase());
    }
    if (filters.section && filters.section !== "All Sections") {
      rows = rows.filter((f) => String(f.section).trim().toUpperCase() === String(filters.section).trim().toUpperCase());
    }
    if (filters.month) {
      rows = rows.filter((f) => f.month.toLowerCase() === filters.month.toLowerCase());
    }

    // If no explicit fee records exist for this filter combination, auto-populate for all matching students
    if (rows.length === 0) {
      const matchingStudents = this.users.filter(
        (u) =>
          u.role === "student" &&
          (!filters.class || filters.class === "All Classes" || String(u.class).toLowerCase() === String(filters.class).toLowerCase()) &&
          (!filters.section || filters.section === "All Sections" || String(u.section).toUpperCase() === String(filters.section).toUpperCase())
      );

      const targetMonth = filters.month || "October";
      const targetYear = filters.year || "2026";

      rows = matchingStudents.map((s, idx) => {
        const total = 6500;
        const isPaid = idx % 4 !== 0;
        const isPartial = idx % 4 === 0 && idx % 2 === 0;
        const paid = isPaid ? total : isPartial ? 3500 : 0;
        const settlementStatus = isPaid ? "PAID" : isPartial ? "PARTIAL" : "PENDING";
        return {
          _id: `fee_dyn_${s._id}_${targetMonth}`,
          studentId: s._id,
          name: s.name,
          rollNo: s.rollNo,
          class: s.class,
          section: s.section,
          month: targetMonth,
          year: targetYear,
          totalAmount: total,
          paidAmount: paid,
          settlementStatus,
        };
      });
    }

    const actualRevenue = rows.reduce((acc, f) => acc + f.paidAmount, 0);
    const targetRevenue = rows.reduce((acc, f) => acc + f.totalAmount, 0);
    const arrears = Math.max(0, targetRevenue - actualRevenue);

    return {
      actualRevenue,
      targetRevenue,
      arrears,
      ledger: rows,
    };
  }

  getStudentFees(studentId) {
    let studentRecords = this.fees.filter((f) => {
      const sId = typeof f.student === "object" ? f.student?._id : f.student;
      return sId === studentId;
    });

    let records = studentRecords.map((f) => ({
      _id: f._id,
      month: f.month,
      year: f.year,
      totalAmount: Number(f.totalAmount) || 0,
      paidAmount: Number(f.paidAmount) || 0,
      settlementStatus: f.settlementStatus || "PENDING",
    }));

    if (records.length === 0) {
      records = [
        { _id: `fee_rec_1_${studentId}`, month: "Quarter 1 (Apr-Jun)", year: "2025", totalAmount: 18500, paidAmount: 18500, settlementStatus: "PAID" },
        { _id: `fee_rec_2_${studentId}`, month: "Quarter 2 (Jul-Sep)", year: "2025", totalAmount: 18500, paidAmount: 18500, settlementStatus: "PAID" },
        { _id: `fee_rec_3_${studentId}`, month: "Quarter 3 (Oct-Dec)", year: "2025", totalAmount: 18500, paidAmount: 12000, settlementStatus: "PARTIAL" },
        { _id: `fee_rec_4_${studentId}`, month: "Quarter 4 (Jan-Mar)", year: "2026", totalAmount: 18500, paidAmount: 0, settlementStatus: "PENDING" },
      ];
    }

    const totalPaid = records.reduce((sum, r) => sum + r.paidAmount, 0);
    const totalDue = records.reduce((sum, r) => sum + Math.max(0, r.totalAmount - r.paidAmount), 0);

    return {
      records,
      totalPaid,
      totalDue,
    };
  }

  updateFee(id, updates) {
    const idx = this.fees.findIndex((f) => f._id === id);
    if (idx === -1) {
      const newFee = { ...updates, _id: id || "fee_" + Date.now() };
      this.fees.push(newFee);
      saveCollection("fees", this.fees);
      return newFee;
    }
    this.fees[idx] = { ...this.fees[idx], ...updates };
    saveCollection("fees", this.fees);
    return this.fees[idx];
  }

  // --- TIMETABLE ---
  getTimetable(filters = {}) {
    const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const PERIODS = [
      "LEC.01",
      "LEC.02",
      "LEC.03",
      "LEC.04",
      "LEC.05",
      "LEC.06",
      "LEC.07",
      "LEC.08",
      "LEC.09",
    ];

    let list = this.timetable || [];
    if (filters.class && filters.class !== "All Classes") {
      list = list.filter((t) => String(t.class).trim().toLowerCase() === String(filters.class).trim().toLowerCase());
    }
    if (filters.section && filters.section !== "All Sections") {
      list = list.filter((t) => String(t.section).trim().toUpperCase() === String(filters.section).trim().toUpperCase());
    }

    // If no timetable slots exist for this class & section, auto-generate standard weekly lectures
    if (list.length === 0 && filters.class && filters.section) {
      const cls = filters.class;
      const sec = filters.section;
      const subjectsPool = [
        { name: "Advanced Mathematics", code: "MATH-101", type: "Theory", faculty: "Dr. Charu Sarswat", facCode: "FAC-123456", dept: "Mathematics" },
        { name: "Modern Physics", code: "PHYS-101", type: "Theory", faculty: "Dr. Vikram Sethi", facCode: "FAC-123457", dept: "Science" },
        { name: "English Literature", code: "ENG-101", type: "Theory", faculty: "Mrs. Clara Woods", facCode: "FAC-123458", dept: "Humanities" },
        { name: "Computer Applications", code: "CS-101", type: "Practical", faculty: "Mr. Alex Tan", facCode: "FAC-123459", dept: "IT & Computing" },
        { name: "Chemistry Lab", code: "CHEM-LAB", type: "Practical", faculty: "Dr. Neha Verma", facCode: "FAC-123460", dept: "Science" },
        { name: "Social Sciences", code: "SOC-101", type: "Theory", faculty: "Mr. Rajan Nair", facCode: "FAC-123461", dept: "Social Studies" },
      ];

      DAYS.forEach((d, dIdx) => {
        PERIODS.slice(0, 5).forEach((p, pIdx) => {
          const s = subjectsPool[(dIdx + pIdx) % subjectsPool.length];
          const entry = {
            _id: `tt_${cls}_${sec}_${d}_${p}`,
            class: cls,
            section: sec,
            day: d,
            period: p,
            subjectName: s.name,
            subjectCode: s.code,
            subjectType: s.type,
            facultyName: s.faculty,
            facultyCode: s.facCode,
            department: s.dept,
          };
          list.push(entry);
        });
      });
    }

    const grid = {};
    DAYS.forEach((day) => {
      grid[day] = {};
      PERIODS.forEach((p) => {
        grid[day][p] = null;
      });
    });

    list.forEach((e) => {
      if (grid[e.day]) {
        grid[e.day][e.period] = {
          _id: e._id,
          subjectName: e.subjectName,
          subjectCode: e.subjectCode,
          subjectType: e.subjectType || "Theory",
          facultyName: e.facultyName,
          facultyCode: e.facultyCode,
          department: e.department,
        };
      }
    });

    return {
      days: DAYS,
      periods: PERIODS,
      grid,
      entries: list,
    };
  }

  assignTimetableSlot(payload) {
    const { class: cls, section, day, period } = payload;
    const idx = this.timetable.findIndex(
      (t) => t.class === cls && t.section === section && t.day === day && t.period === period
    );

    if (idx !== -1) {
      this.timetable[idx] = { ...this.timetable[idx], ...payload };
    } else {
      this.timetable.push({ ...payload, _id: "tt_" + Date.now() });
    }
    saveCollection("timetable", this.timetable);
    return { success: true };
  }

  deleteTimetableSlot(slotId) {
    this.timetable = this.timetable.filter((t) => t._id !== slotId);
    saveCollection("timetable", this.timetable);
    return { success: true };
  }

  // --- MATERIALS (Supports class and targetClass filters) ---
  getMaterials(filters = {}) {
    let list = this.materials;
    const cls = filters.targetClass || filters.class;
    if (cls && cls !== "All Classes" && cls !== "") {
      list = list.filter((m) => m.targetClass === cls || m.targetClass === "All Classes");
    }
    if (filters.category && filters.category !== "All" && filters.category !== "") {
      list = list.filter((m) => m.category === filters.category);
    }
    if (filters.subject && filters.subject !== "All" && filters.subject !== "") {
      list = list.filter((m) => (m.subject || "").toLowerCase().includes(filters.subject.toLowerCase()));
    }
    return list;
  }

  addMaterial(payload) {
    const newMat = {
      ...payload,
      _id: "mat_" + Date.now(),
      uploadedBy: { name: "Dr. Charu Sarswat", role: "teacher" },
      createdAt: new Date().toISOString(),
    };
    this.materials.unshift(newMat);
    saveCollection("materials", this.materials);
    return newMat;
  }

  // --- MARKS (Supports SessionalMarks ledger contract AND student arrays) ---
  getMarks(filters = {}) {
    let rawMarks = this.marks.map((m) => {
      const studentObj =
        typeof m.student === "object"
          ? m.student
          : this.users.find((u) => u._id === m.student) || { name: "Student", rollNo: "0" };
      return {
        _id: m._id,
        studentId: studentObj._id,
        name: studentObj.name,
        rollNo: studentObj.rollNo,
        class: m.class,
        section: m.section,
        assessmentType: m.assessmentType,
        subject: m.subject,
        marksObtained: Number(m.marksObtained) || 0,
        maxMarks: Number(m.maxMarks) || 100,
        remarks: m.remarks || "",
        status: Number(m.marksObtained) >= (Number(m.maxMarks) || 100) * 0.33 ? "PASS" : "FAIL",
      };
    });

    if (filters.class && filters.class !== "All Classes") {
      rawMarks = rawMarks.filter((m) => String(m.class).toLowerCase() === String(filters.class).toLowerCase());
    }
    if (filters.section && filters.section !== "All Sections") {
      rawMarks = rawMarks.filter((m) => String(m.section).toUpperCase() === String(filters.section).toUpperCase());
    }
    if (filters.assessmentType) {
      rawMarks = rawMarks.filter((m) => m.assessmentType === filters.assessmentType);
    }
    if (filters.subject) {
      rawMarks = rawMarks.filter((m) => m.subject.toLowerCase() === filters.subject.toLowerCase());
    }

    // If no marks exist for this specific combination, synthesize ledger for all students in the class
    if (rawMarks.length === 0) {
      const matchingStudents = this.users.filter(
        (u) =>
          u.role === "student" &&
          (!filters.class || filters.class === "All Classes" || String(u.class).toLowerCase() === String(filters.class).toLowerCase()) &&
          (!filters.section || filters.section === "All Sections" || String(u.section).toUpperCase() === String(filters.section).toUpperCase())
      );

      const targetSubject = filters.subject || "Mathematics";
      const targetAssessment = filters.assessmentType || "1st Sessional";
      const baseScores = [95, 88, 92, 85, 78, 96, 73, 84, 91, 87, 82, 89];

      rawMarks = matchingStudents.map((s, idx) => {
        const score = baseScores[idx % baseScores.length];
        return {
          _id: `mark_dyn_${s._id}_${targetSubject}_${targetAssessment}`,
          studentId: s._id,
          name: s.name,
          rollNo: s.rollNo,
          class: s.class,
          section: s.section,
          assessmentType: targetAssessment,
          subject: targetSubject,
          marksObtained: score,
          maxMarks: 100,
          remarks: score >= 90 ? "Excellent subject command and analytical precision." : score >= 80 ? "Consistent conceptual grasp and active class participation." : "Good effort; needs more practice with problem-solving sets.",
          status: score >= 33 ? "PASS" : "FAIL",
        };
      });
    }

    // Return format expected by SessionalMarks.jsx
    return {
      totalStudents: rawMarks.length,
      ledger: rawMarks,
    };
  }

  getStudentMarks(studentId) {
    let studentMarks = this.marks
      .filter((m) => {
        const sId = typeof m.student === "object" ? m.student?._id : m.student;
        return sId === studentId;
      })
      .map((m) => ({
        _id: m._id,
        subject: m.subject,
        assessmentType: m.assessmentType,
        marksObtained: Number(m.marksObtained) || 0,
        maxMarks: Number(m.maxMarks) || 100,
        remarks: m.remarks || "",
        status: Number(m.marksObtained) >= (Number(m.maxMarks) || 100) * 0.33 ? "PASS" : "FAIL",
      }));

    if (studentMarks.length === 0) {
      studentMarks = [
        { _id: `mark_s1_${studentId}`, subject: "Mathematics", assessmentType: "1st Sessional", marksObtained: 92, maxMarks: 100, remarks: "Top-tier performance in algebraic geometry.", status: "PASS" },
        { _id: `mark_s2_${studentId}`, subject: "Physics", assessmentType: "1st Sessional", marksObtained: 88, maxMarks: 100, remarks: "Clear understanding of dynamics and optics.", status: "PASS" },
        { _id: `mark_s3_${studentId}`, subject: "Chemistry", assessmentType: "1st Sessional", marksObtained: 85, maxMarks: 100, remarks: "Proficient in chemical equations and stoichiometry.", status: "PASS" },
        { _id: `mark_s4_${studentId}`, subject: "English Literature", assessmentType: "1st Sessional", marksObtained: 89, maxMarks: 100, remarks: "Thoughtful critical essays and vocabulary.", status: "PASS" },
        { _id: `mark_s5_${studentId}`, subject: "Computer Applications", assessmentType: "1st Sessional", marksObtained: 96, maxMarks: 100, remarks: "Exemplary algorithmic thinking and programming.", status: "PASS" },
      ];
    }

    return studentMarks;
  }

  saveMarks(entries) {
    if (!Array.isArray(entries)) return { success: true };
    for (const entry of entries) {
      const idx = this.marks.findIndex((m) => m._id === entry._id);
      if (idx !== -1) {
        this.marks[idx] = { ...this.marks[idx], ...entry };
      }
    }
    saveCollection("marks", this.marks);
    return { success: true };
  }

  // --- ATTENDANCE (Roll call & summary contracts) ---
  getAttendanceRoll(cls, section, date) {
    const students = this.users.filter(
      (u) => u.role === "student" && (cls ? u.class === cls : true) && (section ? u.section === section : true)
    );

    const rollList = students.map((s) => {
      const record = this.attendance.find((a) => a.student === s._id && a.date === date);
      return {
        _id: record?._id || `temp_${s._id}`,
        studentId: s._id,
        rollNo: s.rollNo,
        name: s.name,
        class: s.class,
        section: s.section,
        status: record?.status || "present",
      };
    });

    return {
      totalStudents: rollList.length,
      rollList,
    };
  }

  saveAttendance(cls, section, date, records) {
    if (Array.isArray(records)) {
      for (const rec of records) {
        const sId = rec.studentId || (typeof rec.student === "object" ? rec.student._id : rec.student);
        const idx = this.attendance.findIndex((a) => a.student === sId && a.date === date);
        if (idx !== -1) {
          this.attendance[idx].status = rec.status;
        } else {
          this.attendance.push({
            _id: "att_" + Date.now() + Math.random(),
            student: sId,
            class: cls,
            section: section,
            date: date,
            status: rec.status,
            period: "Daily (Full Day)",
          });
        }
      }
      saveCollection("attendance", this.attendance);
    }
    return { success: true };
  }

  getStudentAttendance(studentId) {
    const records = this.attendance
      .filter((a) => a.student === studentId)
      .map((a) => ({
        _id: a._id,
        date: a.date,
        period: a.period || "Daily (Full Day)",
        status: a.status,
      }));

    const totalRecords = records.length || 24;
    const totalPresent = records.filter((r) => r.status === "present").length || Math.round(totalRecords * 0.94);
    const percentage = totalRecords > 0 ? Math.round((totalPresent / totalRecords) * 100) : 94;

    return {
      records:
        records.length > 0
          ? records
          : [
              { _id: "att_d1", date: "10/20/2026", period: "Daily (Full Day)", status: "present" },
              { _id: "att_d2", date: "10/19/2026", period: "Daily (Full Day)", status: "present" },
              { _id: "att_d3", date: "10/18/2026", period: "Daily (Full Day)", status: "late" },
              { _id: "att_d4", date: "10/17/2026", period: "Daily (Full Day)", status: "present" },
            ],
      totalRecords,
      totalPresent,
      percentage,
    };
  }

  getAttendanceSummary(filters = {}) {
    const students = this.users.filter(
      (u) =>
        u.role === "student" &&
        (!filters.class || filters.class === "All Classes" || u.class === filters.class) &&
        (!filters.section || filters.section === "All Sections" || u.section === filters.section)
    );

    const daysInMonth = 31;
    const sheet = students.map((s) => {
      const days = {};
      for (let day = 1; day <= daysInMonth; day++) {
        const dStr = String(day).padStart(2, "0");
        const formattedDate = `10/${dStr}/2026`;
        const rec = this.attendance.find((a) => a.student === s._id && a.date === formattedDate);
        if (rec) {
          days[dStr] = rec.status;
        } else {
          // Default weekday realistic attendance
          const isWeekend = day % 7 === 0 || day % 7 === 6;
          days[dStr] = isWeekend ? "holiday" : (day + parseInt(s.rollNo || "1")) % 19 === 0 ? "absent" : "present";
        }
      }
      return {
        _id: s._id,
        studentId: s._id,
        name: s.name,
        rollNo: s.rollNo,
        class: s.class,
        section: s.section,
        days,
      };
    });

    return {
      daysInMonth,
      sheet,
    };
  }

  // --- STAFF ATTENDANCE ---
  getStaffAttendance(date) {
    const teachers = this.users.filter((u) => u.role === "teacher");
    const registry = teachers.map((t) => {
      const rec = this.staffAttendance.find((sa) => sa.staff === t._id && sa.date === date);
      return {
        _id: t._id,
        name: t.name,
        primarySubject: t.primarySubject || "Faculty",
        teacherId: t.teacherId || "—",
        status: rec?.status || "present",
      };
    });

    return {
      totalActive: registry.length,
      registry,
    };
  }

  saveStaffAttendance(date, entries) {
    if (Array.isArray(entries)) {
      for (const entry of entries) {
        const sId = entry.staffId || entry._id;
        const idx = this.staffAttendance.findIndex((sa) => sa.staff === sId && sa.date === date);
        if (idx !== -1) {
          this.staffAttendance[idx].status = entry.status;
        } else {
          this.staffAttendance.push({
            _id: "satt_" + Date.now() + Math.random(),
            staff: sId,
            date,
            status: entry.status,
          });
        }
      }
      saveCollection("staffAttendance", this.staffAttendance);
    }
    return { success: true };
  }
}

// Global singleton instance
export const mockStore = new EduPlusMockStore();
