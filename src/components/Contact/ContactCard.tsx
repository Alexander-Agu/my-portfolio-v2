import "./contact.css"

type contactCardProps = {
    contact: string,
    link: string,
    icon: React.ReactNode
}

export default function ContactCard({contact, link, icon}:contactCardProps) {
  return (
    <div className="
        pt-7 pb-7 w-full border-b border-b-[#ffffff5e]
    ">
        <a href={link} className="
            text-white inter flex flex-row items-center justify-start gap-3
            lg:
        ">
            {icon}
            {contact}
        </a>
    </div>
  )
}