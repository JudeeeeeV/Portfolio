import devconPic from '../assets/devcon_kids_org_picture.png';

const Experience = () => {
  return (
    <section id="experience" className="section-container border-t border-border">
      <span className="section-label">05. Organizational Experience</span>
      <div className="max-w-4xl">
        <div className="border-l-2 border-border pl-6 relative group">
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-bg border-4 border-primary rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          
          <h3 className="text-2xl font-bold flex flex-wrap items-center gap-2">
            Volunteer 
            <span className="text-secondary text-lg font-medium">@</span> 
            <a 
              href="https://www.devconkids.org/" 
              target="_blank" 
              rel="noreferrer" 
              className="relative w-fit inline-flex items-center gap-1 hover:text-secondary transition-colors before:absolute before:left-0 before:-bottom-1 before:h-[1px] before:w-full before:bg-border after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
            >
              DEVCON Kids Cebu Chapter
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
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
          </h3>
          
          <p className="text-primary font-medium mt-2 italic">"Inspire, Enable, Empower"</p>
          
          <p className="text-secondary text-lg leading-relaxed mt-4 mb-6">
            DEVCON Kids is an international non-profit org aiming to make computer science accessible and fun for kids. With a focus on kids from underserved communities, we aim to teach the valuable skills necessary for them to participate in an ever-digital future – and thrive in it.
          </p>
          
          <div className="rounded-xl overflow-hidden border border-border max-w-2xl mt-4">
            <img 
              src={devconPic} 
              alt="DEVCON Kids Cebu Chapter" 
              className="w-full h-auto object-cover max-h-[400px] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
