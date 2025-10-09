import { MapPin, Calendar } from "lucide-react";

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
        <div className="inter">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-green-500 bg-green-300 text-green-600">
                {icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {type}
              </h3>
            </div>


            <div className="relative pl-8">
              <div className="">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {name}
                  </h4>
                  <p className="text-green-400 font-medium mb-3">{company}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span>{timeSpan}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-gray-700">
                  {
                    results.map((x, index) => {
                      
                      return  <p className="flex items-start gap-2" key={index}>
                        <span className="text-green-500 mt-1.5">•</span>
                        <span>{x}</span>
                      </p>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
  )
}