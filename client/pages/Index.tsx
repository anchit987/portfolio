import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Brain,
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = [
    { name: "Java", icon: Code, color: "text-orange-500" },
    { name: "Python", icon: Code, color: "text-green-300" },
    { name: "Golang", icon: Code, color: "text-blue-400" },
    { name: "Spring Boot", icon: Server, color: "text-green-500" },
    { name: "AWS", icon: Globe, color: "text-orange-400" },
    { name: "Kubernetes", icon: Database, color: "text-blue-500" },
    { name: "Terraform", icon: Server, color: "text-purple-400" },
    { name: "Kong/Envoy", icon: Globe, color: "text-neon-blue" },
    { name: "Flutter", icon: Smartphone, color: "text-blue-300" },
    { name: "CI/CD", icon: Server, color: "text-pink-400" },
  ];

  const projects = [
    {
      title: "AI Powered ATS-Friendly Resume Builder 🚀",
      description:
        "Web app that converts existing resumes + context into ATS-friendly CVs. Integrated with LLMs to generate professional summaries and enrich missing details.",
      image: "/placeholder.svg",
      tech: ["FastAPI", "React", "LLMs", "Python"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "API Analytics Dashboard",
      description:
        "Built API analytics dashboard for API Gateway using Elasticsearch, Kibana, AWS, improving monitoring and visibility at Goldman Sachs.",
      image: "/placeholder.svg",
      tech: ["Elasticsearch", "Kibana", "AWS", "Python"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Kong Plugin Testing Framework",
      description:
        "Developed penetration testing framework for Kong plugins, ensuring compatibility and security for API Gateway systems.",
      image: "/placeholder.svg",
      tech: ["Kong", "Python", "Security Testing", "API Gateway"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "GitHub Copilot Automation",
      description:
        "Designed and automated workflows for GitHub Copilot onboarding, improving adoption efficiency across the firm.",
      image: "/placeholder.svg",
      tech: ["GitHub", "Automation", "Python", "CI/CD"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const experience = [
    {
      company: "Goldman Sachs",
      role: "Analyst, Engineering - Payments Platform",
      duration: "Aug 2024 - Present",
      highlights: [
        "Redesigning the legacy Reference Data stack to be cloud-ready with AWS + Spring Boot",
        "Centralized intercompany logic to streamline reporting and compliance",
        "Contributed to migration of legacy applications to modern stack, mitigating tech risk findings",
      ],
    },
    {
      company: "Goldman Sachs",
      role: "Analyst, Engineering - Developer Productivity",
      duration: "Feb 2024 - Aug 2024",
      highlights: [
        "Designed and automated workflows for GitHub Copilot onboarding, improving adoption efficiency",
        "Contributed to firmwide adoption efforts: hackathons, training, open office hours",
        "Built a notification + deactivation service for inactive users, cutting license costs",
      ],
    },
    {
      company: "Goldman Sachs",
      role: "Analyst, Engineering - API Platform",
      duration: "Jul 2023 - Feb 2024",
      highlights: [
        "Developed penetration testing framework for Kong plugins, ensuring compatibility and security",
        "Proposed and built a POC for tracking API Engine (Kong) instances across the firm",
        "Maintained Apache Httpd package with 30+ dependencies, supporting business needs and closing tech risk",
      ],
    },
    {
      company: "Goldman Sachs",
      role: "Seasonal Intern - API Platform",
      duration: "Feb 2023 - Jun 2023",
      highlights: [
        "Built POC for Envoy Proxy as an API runtime engine",
        "Developed custom internal plugins to support firm-specific API use cases",
      ],
    },
    {
      company: "Goldman Sachs",
      role: "Summer Intern - API Platform",
      duration: "May 2022 - Jul 2022",
      highlights: [
        "Built API analytics dashboard for API Gateway using Elasticsearch, Kibana, AWS, improving monitoring and visibility",
        "Automated data ingestion + monitoring workflows, reducing manual overhead",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center particle-animation overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="space-y-4">
                <p className="text-neon-blue text-lg font-medium">👋 Hi, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Anchit Gangrade
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  Software Engineer at Goldman Sachs
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  I specialize in backend development, cloud infrastructure, and automation. I've worked across Payments Platform, API Platform, and Developer Productivity teams, where I've modernized systems, automated workflows, and built scalable solutions.
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  I'm passionate about solving complex engineering problems, designing cloud-ready systems, and creating tools that improve developer productivity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
                >
                  Let's Connect
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href="mailto:anchit.gangrade@example.com"
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com"
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 animate-float"></div>
                <div className="absolute inset-0 w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-neon-blue to-neon-purple opacity-20 blur-xl"></div>
                <img
                  src="/placeholder.svg"
                  alt="Anchit Gangrade"
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full object-cover border-4 border-neon-blue/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-8">Professional Summary</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Software Engineer with experience in building and modernizing large-scale systems at Goldman Sachs. Skilled in Java, Python, Golang, Spring Boot, AWS, Kubernetes, Terraform, and API Gateways (Kong/Envoy).
              </p>
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p className="font-semibold mb-2">Strong track record in:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                    <span>Modernizing legacy platforms to cloud-ready architectures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                    <span>Designing developer productivity tools and automations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                    <span>Building scalable, cost-efficient APIs and backend systems</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                    <span>Collaborating in fast-paced engineering projects that drive impact</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center space-x-4 text-muted-foreground">
                <MapPin className="h-5 w-5 text-neon-blue" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors group"
                  >
                    <tech.icon
                      className={`h-5 w-5 ${tech.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 gradient-border overflow-hidden"
              >
                <div className="relative z-10 h-full">
                  <div className="aspect-video bg-muted/20 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple"></div>

              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-8 mb-12"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-effect">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-neon-blue font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-lg text-muted-foreground font-medium">
                      {exp.company}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start space-x-2"
                        >
                          <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

          <div className="max-w-3xl mx-auto">
            <Card className="gradient-border overflow-hidden">
              <div className="relative z-10">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-effect">
                      <Brain className="h-8 w-8 text-primary-foreground" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <h3 className="text-2xl font-bold text-neon-blue">🎓 Bachelor of Technology</h3>
                        <span className="text-muted-foreground font-medium">2019 - 2023</span>
                      </div>

                      <p className="text-xl font-semibold">Computer Science and Engineering</p>
                      <p className="text-lg text-muted-foreground">Shri G. S. Institute of Technology and Science, Indore</p>

                      <div className="flex items-center space-x-4 pt-2">
                        <Badge variant="secondary" className="text-sm font-medium">
                          GPA: 8.04/10
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Get In Touch
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Let's work together
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in hearing about new opportunities and
                    exciting projects. Whether you have a question or just want
                    to say hi, feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:anchit.gangrade@example.com"
                        className="text-muted-foreground hover:text-neon-blue transition-colors"
                      >
                        anchit.gangrade@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a
                        href="https://github.com"
                        className="text-muted-foreground hover:text-neon-blue transition-colors"
                      >
                        github.com/anchitgangrade
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a
                        href="https://linkedin.com"
                        className="text-muted-foreground hover:text-neon-blue transition-colors"
                      >
                        linkedin.com/in/anchitgangrade
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-muted/20 border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-muted/20 border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="bg-muted/20 border-border min-h-[120px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full glow-effect">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground">
              © 2024 Anchit Gangrade. All rights reserved.
            </p>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="mailto:anchit.gangrade@example.com"
                className="text-muted-foreground hover:text-neon-blue transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-neon-blue transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-neon-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
