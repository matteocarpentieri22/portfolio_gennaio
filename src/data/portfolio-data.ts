export const personalInfo = {
    name: "Matteo Carpentieri",
    title: "Computer Engineer",
    roles: ["AI Engineer", "Computer Engineer"],
    bio: "I am a young computer engineer specializing in Artificial Intelligence and Robotics. I enjoy solving complex themes and tackling complex challenges, always looking for innovative solutions. My passions are football and fashion.",
    email: "matteo.carpentieri22@gmail.com",
    linkedin: "https://www.linkedin.com/in/matteo-carpentieri-179231271",
    location: "Abano Terme, Italy",
};

export const skills = {
    programming: ["Java", "C/C++", "Python"],
    ai: [
        "Natural Language Processing",
        "Machine Learning",
        "Computer Vision and 3D Data",
        "Generative AI (LLMs, Prompt Engineering, Fine-Tuning)",
        "RAG Systems & LangChain",
    ],
    robotics: [
        "Basic Principles of Robotics",
        "Manipulators and Robots",
        "Autonomous Robotics",
    ],
    database: [
        "SQL",
        "Ontological Model Design",
        "Apache Spark",
        "Clustering",
        "Streaming",
    ],
    web: ["HTML", "CSS", "JavaScript", "PHP", "React"],
};

export const experience = [
    {
        id: 1,
        role: "Consultant - Generative AI and Web Development",
        company: "Laife Reply",
        location: "Padova, Italy",
        period: "September 2025 - Present",
        description: "Working on an innovative project for IOV (Istituto Oncologico Veneto). Developing a web application with AI chatbot using RAG architecture for oncological patient support.",
        technologies: ["React", "TypeScript", "Python", "LangChain", "RAG"],
    },
    {
        id: 2,
        role: "Machine Learning Development",
        company: "Profactor",
        location: "Steyr, Austria",
        period: "October 2024 - December 2024",
        description: "Developed and fine-tuned Deep Learning models to classify defects in carbon fiber composites using photometric stereo modalities.",
        technologies: ["PyTorch", "Computer Vision", "Deep Learning", "Python"],
    },
    {
        id: 3,
        role: "Web Development",
        company: "Metheos Informatica",
        location: "San Giorgio in Bosco, Italy",
        period: "March 2023 - July 2023",
        description: "Web application development for Transport Companies, Shipping and Logistic management using Visual Basic (VB.NET).",
        technologies: ["Visual Basic", "VB.NET", "Web Development"],
    },
    {
        id: 4,
        role: "Database Development",
        company: "Office Information Technologies",
        location: "Montegrotto Terme, Italy",
        period: "February 2018 - March 2018",
        description: "Creating relational tables, operational flows and testing spaces for database management systems.",
        technologies: ["SQL", "Database Design", "Testing"],
    },
];

export const projects = [
    {
        id: 1,
        title: "Comparative Analysis Between ML Models and GCNN For Accident Severity Classification In London Intersections",
        description: "Developed a comparative analysis of ML models (SVM, Random Forest, K-NN) and Graph Convolutional Networks for accident severity classification using road and accident data from London. Optimized dataset processing with BallTree for efficient proximity searches.",
        technologies: ["Graph Convolutional Networks", "SVM", "Random Forest", "K-NN", "BallTree", "Python"],
        category: "Academic Project",
    },
    {
        id: 2,
        title: "SAGRONE",
        description: "Servlet-based web application designed to streamline the food ordering process at local festivals. Users can pre-order dishes in advance, and the app generates a QR code to present at the cashier for quick payment, reducing wait times and improving the overall festival experience.",
        technologies: ["Java Servlets", "Web Development", "QR Code Generation", "Database"],
        category: "Academic Project",
    },
    {
        id: 3,
        title: "Sport video analysis",
        description: "Computer vision systems to identify and track players on sports teams and generate semantic information about the game, such as understanding the boundaries of the playing field and the context of a game action",
        technologies: ["Computer Vision", "Deep Learning", "Video Analysis", "Python"],
        category: "Academic Project",
    },
    {
        id: 4,
        title: "3D Computer Vision and Point Cloud Processing",
        description: "Implemented algorithms for stereo matching, structure from motion, point cloud registration, and deep learning-based 3D descriptors",
        technologies: ["3D Computer Vision", "Point Cloud", "Deep Learning", "Python"],
        category: "Academic Project",
    },
    {
        id: 5,
        title: "Autonomous Robot Navigation and Obstacle Detection",
        description: "Developed a ROS-based navigation system for the Tiago robot, implementing an Action Client/Server architecture to autonomously move in a dynamic environment while detecting and mapping obstacles using LiDAR sensors",
        technologies: ["ROS", "MoveIt", "LiDAR", "SLAM", "Python"],
        category: "Robotics Project",
    },
    {
        id: 6,
        title: "Robotic Manipulation and Object Delivery",
        description: "Implemented a pick-and-place system for an assistive robot using ROS and MoveIt, integrating AprilTag object detection and motion planning for autonomous fetching and placement of objects in a simulated environment.",
        technologies: ["ROS", "MoveIt", "AprilTag Detection", "Motion Planning", "Python"],
        category: "Robotics Project",
    },
];

export const education = [
    {
        id: 1,
        degree: "Master's Degree in Computer Engineering",
        specialization: "Artificial Intelligence and Robotics",
        institution: "University of Padua",
        location: "Padua, Italy",
        period: "2022 - 2025",
        thesis: "Thesis: Deep Learning-based Defect Type Classification of Carbon Fiber Composites in Photometric Stereo Modalities",
    },
    {
        id: 2,
        degree: "Bachelor Degree in Computer Engineering",
        institution: "University of Padua",
        location: "Padua, Italy",
        period: "2018 - 2022",
        thesis: "Thesis: Neural Networks, General Structure and Forward Models",
    },
    {
        id: 3,
        degree: "High School Graduation in Computer Science and Telecommunications",
        institution: "ITI Francesco Severi",
        location: "Padua, Italy",
        period: "2013 - 2018",
    },
];
