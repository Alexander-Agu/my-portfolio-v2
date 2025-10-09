import { motion } from "motion/react";
import IconLink from "../../UI/IconLink/IconLink";
import "./hero.css";
import { iconLinks } from "./heroTools";
import { FaLocationPin } from "react-icons/fa6";


export default function Hero() {
  return (
    <section className="
    bg-[#ECECEC] h-[100dvh] w-[100%] overflow-hidden
    flex flex-col gap-[0.2rem] items-center justify-center

    lg:items-end lg:justify-start lg:flex-row
    ">
        <article className="inter
            w-[100%] p-[1rem]
            flex flex-col items-center justify-start

            lg:w-auto gap-0 lg:justify-between
        ">
        <div className="flex flex-col leading-none">
            
        <motion.p className="title m-0"
            variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.25}}
        >
            Hi I'm
        </motion.p>


        <motion.p className="title m-0"
            variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.30}}
        >
            Alexander Agu
        </motion.p>
        </div>
            

            <motion.div className="
                min-w-[100%] 
                flex flex-row items-center justify-center gap-1

                lg:justify-start
            "
            
                variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: 0.35}}
            >
                <p className="skill">Frontend React</p>
                <p>|</p>
                <p className="skill">Backend ASP.NET</p>
                <p>|</p>
                <p className="skill">Indie Game Developer</p>
            </motion.div>
        </article>

        <motion.article className="inter
            w-[100%] p-[1rem]
            flex flex-col items-center justify-start

            lg:w-auto
        "
                variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.30}}
        >
            <p className="w-[250px] text-center text-[16px]">I’m a full-stack developer passionate about creating seamless and engaging front-end experiences.</p>
            <br />

            <motion.div className="flex flex-row items-center gap-1"
            >
                <FaLocationPin />
                <p>Based in Gauteng, Rosebank</p>
            </motion.div>


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
        </motion.article>
    </section>
  )
}