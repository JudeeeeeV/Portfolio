const About = () => {
  const highlights = [
    "Fullstack Development",
    "AI and Blockchain Integration",
    "Cloud and Backend Systems"
  ];

  return (
    <section id="about" className="section-container">
      <span className="section-label">01. About</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg leading-relaxed text-secondary mb-6">
            I am a Computer Science student at Cebu Institute of Technology - University based in Cebu City, Philippines. I enjoy building practical software systems, from full-stack web applications to real-time systems, AI-powered tools, and blockchain-based platforms.
          </p>
          <p className="text-lg leading-relaxed text-secondary">
            I am currently looking for software engineering internship opportunities where I can contribute to production-level systems and continue growing as an engineer.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          {highlights.map((item, index) => (
            <div key={index} className="p-4 border border-border bg-card rounded-md font-medium text-primary hover:-translate-y-1 hover:shadow-md hover:bg-border transition-all duration-300 cursor-default">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;