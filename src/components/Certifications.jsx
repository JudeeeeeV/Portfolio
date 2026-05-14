import { certifications } from '../data/certifications';
const Certifications = () => {
  return (
    <>
      {/* Education & Certifications Grid */}
      <section id="education_certification" className="section-container border-t border-border">
        <span className="section-label">03. Education & Certification</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b border-border pb-4">Education</h3>
            <div className="space-y-6 border-l-2 border-border pl-4">
              <div className="relative group">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <h4 className="text-lg font-bold">
                  <a 
                    href="https://www.cit.edu" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="relative w-fit inline-flex items-center gap-1 hover:text-secondary transition-colors before:absolute before:left-0 before:-bottom-1 before:h-[1px] before:w-full before:bg-border after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
                  >
                    Cebu Institute of Technology - University
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    >
                      <path d="M7 7h10v10"/>
                      <path d="M7 17 17 7"/>
                    </svg>
                  </a>
                </h4>
                <p className="text-primary font-medium mt-1">Bachelor of Science in Computer Science</p>
                <p className="text-secondary text-sm mt-2">August 2023 – Present · Cebu, Philippines</p>
              </div>
            </div>
          </div>

          {/* Certifications Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b border-border pb-4">Certifications</h3>
            <div className="space-y-6 border-l-2 border-border pl-4">
              {certifications.map(cert => (
                <div key={cert.id} className="relative group">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h4 className="text-base font-medium">
                    {cert.url ? (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="relative w-fit inline-flex items-center gap-1 hover:text-secondary transition-colors before:absolute before:left-0 before:-bottom-1 before:h-[1px] before:w-full before:bg-border after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
                      >
                        {cert.name}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="opacity-70 group-hover:opacity-100 transition-opacity"
                        >
                          <path d="M7 7h10v10"/>
                          <path d="M7 17 17 7"/>
                        </svg>
                      </a>
                    ) : (
                      cert.name
                    )}
                  </h4>
                  <p className="text-secondary text-sm mt-1">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Certifications;