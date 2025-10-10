import "./contact.css"
import ContactCard from "./ContactCard"
import { LuNewspaper } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi"
import { AiOutlineLinkedin } from "react-icons/ai";
import Resume from "../../assets/Alexander_Agu_CV.pdf";
import { useState } from "react";
import ContactInput from "./ContactInput";

interface Ilinks {
  link: string,
  icon: any,
  name: string
}

export const iconLinks: Ilinks[] = [
  {
    name: "alexander.agu.dev@gmail.com",
    link: "mailto:alexander.agu.dev@gmail.com",
    icon: <HiOutlineMail />
  },
  {
    name: "Alexander-Agu",
    link: "https://github.com/Alexander-Agu",
    icon: <FiGithub />
  },
  {
    name: "alexander-agu-b1968630a",
    link: "https://www.linkedin.com/in/alexander-agu-b1968630a",
    icon: <AiOutlineLinkedin />
  },
  {
    name: "Alexander Agu's CV",
    link: Resume,
    icon: <LuNewspaper />
  }
];


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  return (
    <section id="contact" className="bg-black p-5 flex flex-col items-center justify-center gap-7
      lg:flex-row lg:p-[4rem] 2xl:p-[6rem]
    ">
      <div className="w-full h-full">
        <p className="text-[#ffffff8e] inter">• Contacts</p>
        <h2 className="text-[#ffffff] inter text-[3rem] lg:text-[5em] xl:text-[7em]">GET IN TOUCH</h2>

        <div className="w-full">
          {
            iconLinks.map((x, index) => {
              const {link, icon, name} = x;
              return <ContactCard key={index} link={link} contact={name} icon={icon}/>
            })
          }
        </div>
      </div>


      <div className="w-full h-full flex items-center justify-center">
          <div className="p-2 lg:p-5 w-full flex flex-col items-start justify-center gap-5 bg-[rgb(31,31,33)]">
            <p className="text-[#ffffff] inter">Send Message</p>


            <ContactInput input={name} setInput={setName} placeholder="Naruto Uzumaki" name="Name" />
            <ContactInput input={email} setInput={setEmail} placeholder="uzumaki@gmail.com" name="Email" />

            <div className="w-full flex flex-col items-start justify-center gap-3">
              <p className="text-[#ffffff] inter">Message</p>

              <textarea onChange={(e)=>{setMessage(e.target.value)}} value={message} name="message" id="" className="w-full border-none outline-none p-2 bg-[#424242] text-[#ffffff] inter" cols={60} rows={6}></textarea>
            </div>

            <button className="w-full h-[40px] p-2 bg-[#424242] outline-none border-none flex items-center justify-center text-[#ffffff] inter">
              Send Message
            </button>
          </div>
      </div>
      
    </section>
  )
}