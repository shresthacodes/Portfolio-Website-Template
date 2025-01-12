import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  GraduationCap,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Dot Grid Background Pattern */}
      <div
        className="fixed inset-0 -z-10 bg-[#e7edf0] opacity-50"
        style={{
          backgroundImage: "radial-gradient(#02010e 1.3px, transparent 0.5px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-[#02010e]">Portfolio</span>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "Education",
                "Experience",
                "Projects",
                "Skills",
                "Blog",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-[#02010e] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#02010e] hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {[
                  "Home",
                  "Education",
                  "Experience",
                  "Projects",
                  "Skills",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-600 hover:text-[#02010e] transition-colors text-left px-2 py-1"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-16"
      >
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="mb-6 flex justify-center"></div>
          <h1 className="text-6xl font-bold text-[#02010e] mb-6">John Doe</h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer & Designer
          </p>
          <p className="text-gray-600 mb-8">
            I'm a passionate full-stack developer with 5+ years of experience in
            building scalable web applications. I specialize in React, Node.js,
            and cloud technologies, focusing on creating elegant solutions for
            complex problems.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[#02010e] text-white rounded-lg hover:bg-[#02010e]/90 transition-colors">
              Get in Touch
            </button>
            <button className="px-6 py-3 border-2 border-[#02010e] text-[#02010e] rounded-lg hover:bg-[#02010e]/10 transition-colors">
              View Resume
            </button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-18">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#02010e]">
            Education
          </h2>
          <div className="space-y-8">
            {[
              {
                year: "2018 - 2022",
                degree: "Bachelor of Science in Computer Science",
                school: "University of Technology",
                description: "Graduated with First Class Honours",
              },
              {
                year: "2016 - 2018",
                degree: "Associate Degree in Software Development",
                school: "Tech Institute",
                description: "Dean's List",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-md transition-shadow  backdrop-blur-lg "
              >
                <div className="p-3 bg-[#02010e] rounded-full">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                  <h3 className="text-xl font-semibold text-[#02010e]">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#02010e]">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                year: "2022 - Present",
                role: "Senior Full Stack Developer",
                company: "Tech Solutions Inc.",
                description: "Leading development of enterprise applications",
              },
              {
                year: "2020 - 2022",
                role: "Frontend Developer",
                company: "Digital Innovations",
                description: "Developed responsive web applications",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-md transition-shadow  backdrop-blur-sm"
              >
                <div className="p-3 bg-[#02010e] rounded-full">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <span className="text-sm text-gray-500">{exp.year}</span>
                  <h3 className="text-xl font-semibold text-[#02010e]">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#02010e]">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative bg-white/80 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md"
              >
                <div className="aspect-video mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/800x600?tech&sig=${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#02010e]">
                  Project Title {project}
                </h3>
                <p className="text-gray-600 text-sm">
                  A brief description of the project and the technologies used.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-[#02010e] rounded-t-[50px] scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "AWS",
              "Docker",
              "GraphQL",
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 bg-white/10 rounded-lg text-center hover:bg-white/20 transition-colors"
              >
                <span className="text-[#fbfdf2] font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black/95 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="aspect-square bg-transparent border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-colors"
              >
                <div className="h-1/2 overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/800x800?writing&sig=${post}`}
                    alt={`Blog post ${post}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 h-1/2 flex flex-col">
                  <span className="text-[#d8ff00] text-sm">
                    Mar {post}, 2024
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-2 line-clamp-2">
                    Blog Post Title {post}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    A brief preview of the blog post content that might span
                    multiple lines...
                  </p>
                  <button className="mt-auto text-[#d8ff00] hover:text-[#d8ff00]/80 transition-colors text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">Get in Touch</h2>
          <a href="mailto:abc@gmail.com">
            <button className="px-8 py-4 bg-[#d8ff00] text-black text-xl font-bold rounded-lg hover:bg-[#d8ff00]/90 transition-colors">
              abc@gmail.com
            </button>
          </a>
          <div className="mt-12 flex justify-center space-x-6">
            {[
              { Icon: Github, link: "https://github.com/shresthacodes" },
              { Icon: Twitter, link: "https://twitter.com/theshrestharaj" },
              {
                Icon: Linkedin,
                link: "https://www.linkedin.com/in/yourusername",
              },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security for opening new tabs
                className="text-gray-200 hover:text-white transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-200">© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
