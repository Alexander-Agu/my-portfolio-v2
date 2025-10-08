import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";

type resumeCardProps = {
  icon: React.ReactNode,
  type: string,
  name: string,
  company: string,
  timeSpan: string,
  location: string,
  results: Array<string>
  
};

export default function ResumeCard({icon, type, name, company, timeSpan, location, results}:resumeCardProps) {
  return (
        <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--green-light))] flex items-center justify-center">
                {icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {type}
              </h3>
            </div>


            <div className="relative pl-8">
              <div className="absolute left-0 top-0">
                <div className="timeline-marker"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="resume-card">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {name}
                  </h4>
                  <p className="text-[hsl(var(--green))] font-medium mb-3">{company}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{timeSpan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-gray-700">

                  {
                    results.map((x, index) => {
                      
                      return  <p className="flex items-start gap-2" key={index}>
                        <span className="text-[hsl(var(--green))] mt-1.5">•</span>
                        <span>{x}</span>
                      </p>
                    })
                  }

                  {/* <p className="flex items-start gap-2">
                    <span className="text-[hsl(var(--green))] mt-1.5">•</span>
                    <span>Applied Agile methodologies, focusing on teamwork, collaboration, and iterative delivery</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[hsl(var(--green))] mt-1.5">•</span>
                    <span>Practiced version control with Git/GitLab in team-based projects</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[hsl(var(--green))] mt-1.5">•</span>
                    <span>Gained programming experience with Python and Object-Oriented Programming (OOP) in Java</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[hsl(var(--green))] mt-1.5">•</span>
                    <span>Studied web development principles and practices</span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
  )
}