"use client";

import Link from "next/link";

const projects = [
  {
    number: "001",
    title: "Ceda Autosupply Dashboard",
    type: "Side Project",
    description:
      "An inventory and procurement management system tailored for auto supply shops. Built with React 18 + Vite and powered by Supabase, it provides seamless inventory control, supplier and purchase order management, reporting, and barcode scanning..",
    stack: ["React", "Vite", "Express.js", "Supabase", "PostgreSQL"],
    highlight: true,
    link: "https://github.com/hmgyoo/ceda-autosupply-dashboard",
  },
  {
    number: "002",
    title: "Health Declaration Form for PLM",
    type: "Capstone project",
    description:
      "Local Health Declaration Form to be used for PLM in order to monitor the health of their students.",
    stack: ["Flutter", "Firebase"],
    highlight: false,
    link: "https://github.com/hmgyoo/Capstone-Project-Health-Declaration-Form-",
  },
  {
    number: "003",
    title: "CodePush Implementation for React Native",
    type: "Work Project",
    description:
      "Demonstration on how to implement CodePush into React Native, as well as setting it up on Android and iOS.",
    stack: [
      "React Native",
      "Microsoft App Center",
      "CodePush",
      "Android",
      "iOS",
    ],
    highlight: false,
    link: "https://github.com/hmgyoo/CodePush-Demo",
  },
  {
    number: "004",
    title: "Mangga Go",
    type: "Esp32 Project",
    description:
      "ManggaGo: A Smart Solution for Identifying Mango Leaf Ailments using Tensorflow and FastAPI.",
    stack: ["Esp32", "Python", "FastAPI", "TensorFlow", "OpenCV"],
    highlight: false,
    link: "https://github.com/hmgyoo/ManggaGo",
  },
  {
    number: "005",
    title: "PooPatrol",
    type: "Thesis Project",
    description:
      "An AI powered surveillance system developed using Python and YOLOv8 to capture live stream inference of dog litter in Barangay 506, Manila.",
    stack: [
      "Python",
      "JavaScript",
      "YOLOv8",
      "OpenCV",
      "Flask",
      "TensorFlow",
      "Express.js",
    ],
    highlight: true,
    link: "https://github.com/hmgyoo/PooPatrol-",
  },
  {
    number: "006",
    title: "Shapii Delivery",
    type: "Final Internship Project",
    description:
      "An ecommerce React Native mobile app where the user can add to cart and buy their selected items utilizing the FakeStore API.",
    stack: ["React Native"],
    highlight: false,
    link: "https://github.com/hmgyoo/Shapii-Delivery",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="rule-heavy mb-1" />
      <div className="flex items-baseline justify-between mb-16">
        <span
          className="font-display text-xs italic opacity-40"
          style={{ color: "var(--ink)" }}
        >
          04
        </span>
        <span
          className="font-mono text-xs tracking-widest uppercase opacity-40"
          style={{ color: "var(--ink)" }}
        >
          Projects
        </span>
      </div>

      <div className="mb-10">
        <h2
          className="font-display tracking-tighter"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            color: "var(--ink)",
          }}
        >
          Things I've Built
        </h2>
      </div>

      {/* Projects grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px items-stretch"
        style={{ backgroundColor: "var(--border)" }}
      >
        {projects.map((project) => (
          <Link
            key={project.number}
            href={project.link}
            target="_blank"
            className="block h-full"
          >
            <div
              className="p-8 card-hover relative h-full flex flex-col"
              style={{
                backgroundColor: project.highlight ? "var(--ink)" : "var(--bg)",
              }}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="font-mono text-xs opacity-30"
                  style={{
                    color: project.highlight ? "var(--bg)" : "var(--ink)",
                  }}
                >
                  {project.number}
                </span>
                <span
                  className="font-mono text-xs tracking-widest uppercase px-2 py-0.5"
                  style={{
                    backgroundColor: project.highlight
                      ? "var(--accent)"
                      : "transparent",
                    color: project.highlight ? "var(--ink)" : "var(--muted)",
                    border: project.highlight
                      ? "none"
                      : "1px solid var(--border)",
                  }}
                >
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display text-lg leading-tight tracking-tight mb-3"
                style={{
                  color: project.highlight ? "var(--bg)" : "var(--ink)",
                }}
              >
                {project.title} ↗
              </h3>

              {/* Description */}
              <p
                className="font-body text-sm leading-relaxed mb-6"
                style={{
                  color: project.highlight ? "var(--bg)" : "var(--ink)",
                  opacity: 0.6,
                }}
              >
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-0.5"
                    style={{
                      border: `1px solid ${project.highlight ? "rgba(245,242,237,0.2)" : "var(--border)"}`,
                      color: project.highlight
                        ? "rgba(245,242,237,0.5)"
                        : "var(--muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
