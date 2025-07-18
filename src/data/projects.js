// Featured projects for home page
export const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered-Email-Reply-Generator",
    description:
      "Designed to automate email responses using artificial intelligence. Integrates with Gmail to read incoming emails and generate contextually appropriate replies, streamlining email management and enhancing productivity.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Spring Boot", "React", "Tailwind CSS"],
    features: [
      "Utilizes AI models to craft relevant email replies",
      "Provides a user-friendly interface for managing email interactions",
      "Use chrome extension connects securely to Gmail accounts to fetch and respond to emails",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management system with role-based access control for doctors, administrators and patients using Java, JSP, and MySQL.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Java", "JSP", "HTML", "CSS"],
    features: [
      "Role-based access control for doctors, administrators, and patients",
      "MySQL database architecture for patient records and appointments",
      "Secure authentication and authorization using JSP",
      "CRUD operations for managing patients, appointments, and doctor details",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Educare",
    description:
      "An educational learning platform providing access to courses, internships, and training opportunities for students using Spring Boot.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Spring Boot", "HTML", "CSS", "Database"],
    features: [
      "Course application system with automated confirmation emails",
      "Admin notification system for new applications",
      "Access to courses, internships, and training opportunities",
      "Ongoing development with planned features like online book storage",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
]

// All projects for projects page
export const allProjects = [
  {
    id: 1,
    title: "AI-Powered-Email-Reply-Generator",
    description:
      "Designed to automate email responses using artificial intelligence. Integrates with Gmail to read incoming emails and generate contextually appropriate replies, streamlining email management and enhancing productivity.",
    image: "/img/em.png?height=200&width=400",
    technologies: ["Spring Boot", "React", "Tailwind CSS", "Gmail API"],
    category: ["AI/ML", "Web Development"], // <-- now an array
    // category: "Web Development",
    features: [
      "Utilizes AI models to craft relevant email replies",
      "Provides a user-friendly interface for managing email interactions",
      "Chrome extension connects securely to Gmail accounts",
      "Contextual response generation based on email content",
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "Completed",
  },
  {
    id: 2,
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management system with role-based access control for doctors, administrators and patients using Java, JSP, and MySQL.",
    image: "/img/hospital.png?height=200&width=400",
    technologies: ["Java", "JSP", "HTML", "CSS", "MySQL"],
    category: "Web Development",
    features: [
      "Role-based access control for doctors, administrators, and patients",
      "MySQL database architecture for patient records and appointments",
      "Secure authentication and authorization using JSP",
      "CRUD operations for managing patients, appointments, and doctor details",
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "Completed",
  },
  {
    id: 3,
    title: "Educare",
    description:
      "An educational learning platform providing access to courses, internships, and training opportunities for students using Spring Boot.",
    image: "/img/Educare.png?height=200&width=400",
    technologies: ["Spring Boot", "HTML", "CSS", "Database", "Email Integration"],
    category: "Web Development",
    features: [
      "Course application system with automated confirmation emails",
      "Admin notification system for new applications",
      "Access to courses, internships, and training opportunities",
      "Ongoing development with planned features like online book storage",
    ],
    githubUrl: "#",
    liveUrl: "#",
    status: "In Progress",
  },

  {
    id: 4,
    title: "Dev-Hotel-Management",
    description:
      "A comprehensive hotel management system with user and employee authentication, secure registration, and database management using Spring Framework.dashboard that aggregates data from multiple platforms and provides analytics.",
    image: "/img/Hotel.png?height=200&width=400",
    technologies: ["HTML", "CSS", "JavaScript", "MySql"],
    category: "Web Development",
    features: [
     "User and employee authentication and authorization",
          "Secure registration and login with data validation",
          "MySQL database management system",
          "Seamless data flow between frontend and backend",
    ],
    githubUrl: "https://github.com/debmalya06/Dev-Hotel-Management",
    liveUrl: "#",
    status: "Completed",
  },
]
