import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section-container border-t border-border">
      <span className="section-label">06. Technical Skills</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 border border-border bg-card rounded-md text-sm font-medium text-primary hover:-translate-y-1 hover:shadow-md hover:bg-border transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;