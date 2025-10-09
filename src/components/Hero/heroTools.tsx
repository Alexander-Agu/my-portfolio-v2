import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi"
import { AiOutlineLinkedin } from "react-icons/ai";
import Resume from "../../assets/Alexander_Agu_CV.pdf";

interface Ilinks {
    link: string,
    icon: any
}

export const iconLinks: Ilinks[] = [
    {
        link: "mailto:alexander.agu.dev@gmail.com",
        icon: <HiOutlineMail />
    },
    {
        link: "https://github.com/Alexander-Agu",
        icon: <FiGithub />
    },
    {
        link: "https://www.linkedin.com/in/alexander-agu-b1968630a",
        icon: <AiOutlineLinkedin />
    },
    {
        link: Resume,
        icon: "CV"
    }
];