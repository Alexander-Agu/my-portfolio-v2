import { GraduationCap, Briefcase } from "lucide-react";

export const education = [
    {
        icon: <GraduationCap className="w-6 h-6 text-[hsl(var(--green))]" />,
        type: "Education",
        name: "National diploma in Software Engineering (NQF Level 6), SAQA Qualification ID: 119458",
        company: "WeThinkCode",
        timeSpan: "Sep 2024 – Dec 2025",
        location: "Gauteng, Rosebank",
        results: [
            "Learned about brownfield development, adapting and extending existing systems",
            "Applied Agile methodologies, focusing on teamwork, collaboration, and iterative delivery",
            "Practiced version control with Git/GitLab in team-based projects",
            "Gained programming experience with Python and Object-Oriented Programming (OOP) in Java",
            "Studied web development principles and practices"
        ]
    }
]

export const experience = [
    {
        icon: <Briefcase className="w-6 h-6 text-[hsl(var(--green))]" />,
        type: "Experience",
        name: "Technical Mentor",
        company: "WeThinkCode",
        timeSpan: "Sep 2025 – Dec 2025",
        location: "Gauteng, Rosebank",
        results: [
            "Guided first-year students through core programming concepts and project-based learning, ensuring they built a strong technical foundation",
            "Provided one-on-one and group mentorship, offering feedback and support on coding practices, debugging, and problem-solving",
            "Facilitated collaborative learning by encouraging teamwork, code reviews, and knowledge sharing among students",
            "Helped students adopt industry best practices in software development, including version control, clean code principles, and effective use of development tools"
        ]
    }
]