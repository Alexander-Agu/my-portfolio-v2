import "./iconLink.css";

type IconLinkProps = {
    link: string,
    icon: any
};

export default function IconLink({link, icon}: IconLinkProps) {
  return (
    <a href={link} className="
        w-[40px] h-[40px]  text-black text-[1.3rem]
        border border-black rounded-full
        flex items-center justify-center
        hover:bg-black hover:text-white
    " download={icon === "CV"}>
        {icon}
    </a>
  )
}