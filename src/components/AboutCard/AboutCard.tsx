import "./aboutCard.css"
import { HiMiniCodeBracket } from "react-icons/hi2";

export default function AboutCard() {
  return (
    <div className="
        w-[320px] h-[250px] bg-[rgba(255,255,255,0.05)]
        border border-[rgba(255,255,255,0.10)] rounded-[5px]
        flex flex-col items-center justify-evenly
    ">
        <div className="bg-[rgba(255,111,60,0.30)] w-[60px] h-[60px] flex items-center justify-center rounded-full">
            <HiMiniCodeBracket className="text-[#FF6F3C] text-[1.8rem]" />
        </div>

        <h2 className="text-[1.5rem] text-center text-[#ECECEC] font-bold">Full-Stack Developer</h2>

        <p className="text-[#D1D5DB] nonito w-[90%] text-center">
            Passionate about creating elegant solutions to complex problems
        </p>
    </div>
  )
}