import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkClass =
    'relative w-fit hover:text-secondary transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full';

  const mobileLinkClass =
    'block hover:text-secondary transition-colors';

  return (
    <nav className="fixed top-0 w-full bg-bg/80 backdrop-blur-md border-b border-border z-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={() => setIsOpen(false)}
          className="font-bold text-lg tracking-tight hover:text-secondary transition-colors"
        >
          JUDEV.
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className={desktopLinkClass}>
              About
            </a>
            <a href="#projects" className={desktopLinkClass}>
              Projects
            </a>
            <a href="#education_certification" className={desktopLinkClass}>
              Education & Certifications
            </a>
            <a href="#achievements" className={desktopLinkClass}>
              Achievements
            </a>
            <a href="#experience" className={desktopLinkClass}>
              Org Experience
            </a>
            <a href="#skills" className={desktopLinkClass}>
              Skills
            </a>
            <a href="#contact" className={desktopLinkClass}>
              Contact
            </a>
          </div>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden w-full bg-bg/80 backdrop-blur-md border-border transition-all duration-300 ease-in-out grid ${
          isOpen ? 'grid-rows-[1fr] border-t opacity-100' : 'grid-rows-[0fr] border-t-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 py-2 flex flex-col text-sm font-medium">
            <a
              href="#top"
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClass} py-3 border-b border-border`}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClass} py-3 border-b border-border`}
            >
              About
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClass} py-3 border-b border-border`}
            >
              Projects
            </a>

            <a
              href="#education_certification"
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClass} py-3 border-b border-border`}
            >
              Education & Certifications
            </a>

            <a
              href="#achievements"
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClass} py-3 border-b border-border`}
            >
              Achievements
            </a>

            <a
              href="#experience"
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClass} py-3 border-b border-border`}
            >
              Org Experience
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClass} py-3 border-b border-border`}
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClass} py-3`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;