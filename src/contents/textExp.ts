type Experience = {
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    company: "Cybage Software Pvt Ltd, DLF Commercial Developers Ltd",
    role: "Senior Software Engineer",
    duration: "Aug 2021 - Present",
    location: "Hyderabad",
    responsibilities: [
      "Created various components and page layouts in React using functional components and hooks.",
      "Handled data fetching logic with efficiency.",
      "Designed pixel-perfect components/layouts as per client-provided designs.",
      "Created custom hooks for reusable code.",
      "Gathered and analyzed requirements in collaboration with onsite team.",
      "Managed business logic and bound data to the view.",
      "Optimized pages for faster loading performance.",
      "Used Git for version control and file management.",
    ],
  },
  {
    company: "AskIITians Web Pvt Ltd",
    role: "Frontend Developer",
    duration: "Mar 2020 - Aug 2021",
    location: "Noida, Sec-6",
    responsibilities: [
      "Developed UI for the company’s new recruitment product.",
      "Created UI for the admin section.",
      "Developed new user-facing features using React.js, SASS, and Bootstrap.",
      "Managed day-to-day tasks using Trello cards.",
      "Maintained codebase using Git (Version Control System).",
    ],
  },
  {
    company: "Arena Animation",
    role: "Web Designing and Development Trainer",
    duration: "May 2018 - Mar 2020",
    location: "Preet Vihar, New Delhi",
    responsibilities: [
      "Developed frontend and backend using HTML5, CSS3, Bootstrap, JavaScript, JQuery, JQuery Plugin, PHP, and MySQL with W3C standards.",
      "Delivered training of frontend and backend technologies to students.",
      "Guided students in creating projects and portfolios.",
      "Developed company’s personal website using HTML, CSS3, JavaScript & PHP.",
    ],
  },
  {
    company: "GC Web Services",
    role: "UI Developer",
    duration: "May 2017 - May 2018",
    responsibilities: [
      "Developed complete UI and frontend of company website using HTML5, CSS3, JavaScript, Bootstrap, JQuery, JQuery Plugins, WordPress, and W3C standards.",
      "Optimized website for maximum speed and performance.",
      "Minified CSS and JavaScript for reduced loading time.",
      "Resolved console errors and optimized images.",
      "Improved overall page performance.",
    ],
  },
  {
    company: "Xperia Technologies Pvt Ltd",
    role: "Web Designer",
    duration: "Aug 2016 - Apr 2017",
    responsibilities: [
      "Worked as a Web Designer with skills in HTML5, CSS3, JavaScript, JQuery, and Bootstrap 3.",
    ],
  },
];
