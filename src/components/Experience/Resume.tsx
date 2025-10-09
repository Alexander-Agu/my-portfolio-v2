import ResumeCard from "./ResumeCard";
import { education, experience } from "./ResumeTools";

const Resume = () => {
  return (
    <section id="resume" className="section-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Resume
          </h2>
          <p className="text-gray-600 text-lg">My professional journey and education</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {
            experience.map((x, index) => {
              const {icon, type, name, timeSpan, company, location, results} = x;

              return <ResumeCard key={index}
                icon={icon}
                type={type}
                name={name}
                timeSpan={timeSpan}
                location={location}
                results={results}
                company={company}
              />
            })
          }
          
          {
            education.map((x, index) => {
              const {icon, type, name, timeSpan, company, location, results} = x;

              return <ResumeCard key={index}
                icon={icon}
                type={type}
                name={name}
                timeSpan={timeSpan}
                location={location}
                results={results}
                company={company}
              />
            })
          }


        </div>
      </div>
    </section>
  );
};

export default Resume;
