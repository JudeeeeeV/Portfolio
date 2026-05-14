const ProjectCard = ({ project }) => {
  const { title, category, description, techStack, role, achievement, github, live, featured } = project;

  if (featured) {
    return (
      <div className="group relative overflow-hidden col-span-1 md:col-span-2 border border-border bg-card p-8 rounded-lg hover:-translate-y-1 transition-transform duration-300">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            <div className="text-xs font-bold tracking-widest text-secondary uppercase">{category}</div>
            <h3 className="text-2xl font-bold">{title}</h3>
            {achievement && (
              <div className="inline-block px-3 py-1 bg-primary text-bg text-xs font-bold rounded-md">
                🏆 {achievement}
              </div>
            )}
            <p className="text-secondary leading-relaxed">{description}</p>
            <div className="text-sm font-medium pt-2">Role: <span className="text-secondary font-normal">{role}</span></div>
          </div>
          <div className="flex-1 space-y-6 lg:border-l border-border lg:pl-8">
            <div className="flex items-center justify-center h-full">
              <div>
                <h4 className="text-sm font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs border border-border rounded text-secondary bg-bg">
                      {tech}
                    </span>
                  ))}
                </div>                
              </div>
              
            </div>
            <div className="flex gap-4 pt-4">
              {live && <a href={live} className="text-sm font-medium hover:text-secondary underline underline-offset-4 relative z-30">Live Demo</a>}
            </div>
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden border border-border bg-card p-6 rounded-lg flex flex-col hover:-translate-y-1 transition-transform duration-300">
      <div className="text-xs font-bold tracking-widest text-secondary uppercase mb-2">{category}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      
      <div className="space-y-4 mt-auto">
        <div className="text-sm font-medium">Role: <span className="text-secondary font-normal">{role}</span></div>
        <div className="flex flex-wrap gap-2">
          {techStack.map(tech => (
            <span key={tech} className="px-2 py-1 text-xs border border-border rounded text-secondary bg-bg">
              {tech}
            </span>
          ))}
        </div>
      </div>


    </div>
  );
};

export default ProjectCard;