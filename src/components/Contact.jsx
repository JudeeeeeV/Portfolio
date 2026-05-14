const Contact = () => {
  const linkClass =
    'relative w-fit transition-colors hover:text-secondary after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full';

  return (
    <section id="contact" className="section-container border-t border-border">
      <span className="section-label">07. Contact</span>

      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s build something useful.
        </h2>

        <p className="text-lg text-secondary mb-10 leading-relaxed">
          I am currently looking for software engineering internship opportunities where I can contribute to real-world systems and grow as a developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-12 items-center sm:items-start">
          <a
            href="mailto:valencia.judemikaell@gmail.com"
            className="px-8 py-4 bg-primary text-bg font-medium rounded-md text-center hover:opacity-90 hover:-translate-y-1 hover:shadow-md transition-all duration-300 w-full sm:w-auto"
          >
            Say Hello
          </a>

          <div className="flex flex-row flex-wrap justify-center sm:justify-start items-center text-sm font-medium gap-6 sm:mt-4">
            <a
              href="mailto:valencia.judemikaell@gmail.com"
              className={linkClass}
            >
              Email
            </a>

            <a
              href="https://linkedin.com/in/valenciajudemikael"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/JudeeeeeV"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;