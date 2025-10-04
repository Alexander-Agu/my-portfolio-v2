import Stack from "../../UI/Stack/Stack"
import AboutCard from "../AboutCard/AboutCard"
import "./about.css"

export default function About() {
  return (
    <section className="
            min-h-[100dvh] w-[100%] bg-black
            flex flex-col items-center justify-center gap-1
        ">

        <div className="flex flex-col items-center justify-center p-7">
            <h2 className="text-[#ECECEC] nonito font-extrabold text-[2rem]">About me.</h2>
            <div className="w-[100px] h-[5px] bg-[#ff6f3c] text-center" >

            </div>
        </div>

        <div className="w-[100%] p-7 flex flex-col items-center justify-center gap-7">
            <AboutCard />
            <AboutCard />
            <AboutCard />
        </div>

        <p className="text-[#9CA3AF] nonito p-7">
            I'm Alexander Agu, a South African full-stack developer and mentor passionate about building impactful solutions. At <span className="text-[#ECECEC] font-bold">WeThinkCode</span> (Sep 2024 – Dec 2025), I sharpened my skills in Agile teamwork, brownfield development, and version control, while building a strong base in Python, Java OOP, and web development. Today, I channel that experience into mentoring and guiding the next generation of developers <span className="text-[#ff6f3c] font-semibold">driven to create, eager to learn, and always building.</span>
        </p>

        <div className="w-full p-7">
            <h2 className="text-[#ECECEC] font-bold">Stack</h2>

            <div className="w-full flex flex-wrap justify-start gap-2">
                <Stack stack={"React"} />
                <Stack stack={"ASP.NET"} />
                <Stack stack={"Tailwind css"} />
                <Stack stack={"React"} />
                <Stack stack={"ASP.NET"} />
                <Stack stack={"Tailwind css"} />
            </div>

        </div>
    </section>
  )
}