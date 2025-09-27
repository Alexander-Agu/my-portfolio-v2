import IconLink from "../../UI/IconLink/IconLink";
import "./hero.css";
import { iconLinks } from "./heroTools";
import { FaLocationPin } from "react-icons/fa6";


export default function Hero() {
  return (
    <section className="
    bg-[#ECECEC] h-[100dvh] w-[100%]
    flex flex-col gap-[0.2rem] items-center justify-center

    lg:items-end lg:justify-start lg:flex-row
    ">
        <article className="inter
            w-[100%] p-[1rem]
            flex flex-col items-center justify-start

            lg:w-auto gap-0 lg:justify-between
        ">
        <div className="flex flex-col leading-none">
        <p className="title m-0">Hi I'm</p>
        <p className="title m-0">Alexander Agu</p>
        </div>
            

            <div className="
                min-w-[100%] 
                flex flex-row items-center justify-center gap-1

                lg:justify-start
            ">
                <p className="skill">Frontend React</p>
                <p>|</p>
                <p className="skill">Backend ASP.NET</p>
                <p>|</p>
                <p className="skill">Indie Game Developer</p>
            </div>
        </article>

        <article className="inter
            w-[100%] p-[1rem]
            flex flex-col items-center justify-start

            lg:w-auto
        ">

            <div className="flex flex-row items-center gap-1">
                <FaLocationPin />
                <p>Based in Gauteng, Rosebank</p>
            </div>


            <div className="
                flex flex-row items-center justify-center gap-3 p-3 
            ">
                {
                    iconLinks.map((x, index) => {
                        const {link, icon} = x;
                        return <IconLink key={index} link={link} icon={icon}  />
                    })
                }
            </div>
        </article>
    </section>
  )
}