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
        className="min-h-screen flex items-center justify-center relative pt-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto py-12 sm:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#02010e] mb-4 sm:mb-6">
              John Doe
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Full Stack Developer & Designer
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              I'm a passionate full-stack developer with 5+ years of experience
              in building scalable web applications. I specialize in React,
              Node.js, and cloud technologies.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#02010e] text-white rounded-lg hover:bg-[#02010e]/90 transition-colors text-sm sm:text-base"
              >
                Get in Touch
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#02010e] text-[#02010e] rounded-lg hover:bg-[#02010e]/10 transition-colors text-center text-sm sm:text-base"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#02010e] to-[#d8ff00] opacity-10 blur-2xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#02010e]/10">
                <img
                  src="https://source.unsplash.com/random/800x800?portrait&sig=1"
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
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
                className="flex items-start gap-4 p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-md transition-shadow backdrop-blur-lg"
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
      <section id="experience" className="py-20">
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
                className="flex items-start gap-4 p-6 bg-white/80 rounded-lg shadow-lg hover:shadow-md transition-shadow backdrop-blur-sm"
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
      <section
        id="projects"
        className="py-12 sm:py-20 animate-slide-up px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-[#02010e]">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="group relative bg-white/80 p-4 sm:p-6 rounded-lg 
                hover:shadow-xl transition-all duration-500 transform 
                hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${project * 200}ms` }}
              >
                <div className="aspect-video mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/800x600?tech&sig=${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#02010e]">
                  Project Title {project}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
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
        className="py-20 bg-black/95 rounded-t-[50px] scroll-mt-16 animate-slide-up"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Skills
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "AWS",
              "Docker",
              "GraphQL",
              "MongoDB",
              "Redis",
              "Git",
              "REST API",
            ].map((skill, index) => (
              <div
                key={skill}
                className="group p-3 sm:p-4 bg-transparent border border-white/20 rounded-lg text-center 
                hover:bg-white/10 transition-all duration-300 transform hover:scale-105 
                hover:border-white/40 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span
                  className="text-[#fbfdf2] font-medium text-xs sm:text-sm 
                group-hover:text-[#d8ff00] transition-colors"
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 sm:py-20 bg-black/95 animate-slide-up px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
            Certifications
          </h2>
          <div className="space-y-0">
            {[
              {
                title: "AWS Solutions Architect",
                issuer: "Amazon Web Services",
                date: "2023",
                credential: "Credential ID: AWS-123456",
              },
              {
                title: "Google Analytics Expert",
                issuer: "Google",
                date: "2023",
                credential: "Credential ID: GA-789012",
              },
              {
                title: "Meta Marketing Professional",
                issuer: "Meta",
                date: "2022",
                credential: "Credential ID: META-345678",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="border-y border-white/20 py-3 hover:bg-white/5 transition-colors"
              >
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        <span className="text-gray-500 text-xs">•</span>
                        <p className="text-gray-500 text-xs">
                          {cert.credential}
                        </p>
                      </div>
                    </div>
                    <span className="text-[#d8ff00] text-sm font-medium">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 bg-black/95 animate-slide-up px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Digital Marketing",
                description:
                  "Strategic social media management, SEO optimization, and targeted advertising campaigns.",
                icon: "📱",
              },
              {
                title: "Website Design",
                description:
                  "Custom responsive websites with modern UI/UX principles and seamless functionality.",
                icon: "💻",
              },
              {
                title: "Copy Writing",
                description:
                  "Engaging content creation, brand storytelling, and SEO-optimized writing.",
                icon: "✍️",
              },
              {
                title: "Video Editing",
                description:
                  "Professional video editing, motion graphics, and visual storytelling.",
                icon: "🎥",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-transparent border border-white/20 rounded-lg p-6 
                hover:bg-white/10 hover:border-white/40 transition-all duration-300 
                animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#d8ff00] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="py-12 sm:py-20 bg-black/95 scroll-mt-16 animate-slide-up px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
            Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-transparent border border-white/20 rounded-lg overflow-hidden 
                hover:bg-white/10 hover:border-white/40 
                transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${post * 200}ms` }}
              >
                <div className="h-48 sm:h-56 overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/800x800?writing&sig=${post}`}
                    alt={`Blog post ${post}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="text-[#d8ff00] text-sm">
                    Mar {post}, 2024
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 mb-2 line-clamp-2">
                    Blog Post Title {post}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base line-clamp-2 mb-4">
                    A brief preview of the blog post content that might span
                    multiple lines...
                  </p>
                  <button className="mt-auto text-[#d8ff00] hover:text-[#d8ff00]/80 transition-colors text-sm sm:text-base">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resume Section */}
      <section className="py-12 sm:py-20 bg-black/95 animate-slide-up px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
            Video Resume
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-transparent border border-white/20 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your-video-id"
                title="Video Resume"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm sm:text-base">
                Watch my video resume to learn more about my journey, skills,
                and passion for technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-20 bg-black scroll-mt-16 animate-slide-up px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-white">
            Get in Touch
          </h2>
          <a
            href="mailto:abc@gmail.com"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#d8ff00] text-black text-lg sm:text-xl font-bold rounded-lg hover:bg-[#d8ff00]/90 transition-colors"
          >
            abc@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex justify-center space-x-6">
              {[
                {
                  Icon: Github,
                  link: "https://github.com/shresthacodes",
                  label: "GitHub",
                },
                {
                  Icon: Twitter,
                  link: "https://twitter.com/theshrestharaj",
                  label: "Twitter",
                },
                {
                  Icon: Linkedin,
                  link: "https://www.linkedin.com/in/yourusername",
                  label: "LinkedIn",
                },
                {
                  Icon: Mail,
                  link: "mailto:abc@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, link, label }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#d8ff00] transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center mt-4">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
