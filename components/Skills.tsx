"use client";

const skillGroups = [
  {
    category: "Mobile",
    description: "Cross-platform first",
    skills: [
      { name: "React Native", level: 95 },
      { name: "Flutter", level: 75 },
      { name: "Native iOS / Android", level: 45 },
    ],
  },
  {
    category: "Frontend",
    description: "Web interfaces",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React + Vite", level: 88 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    category: "Backend",
    description: "Server & data",
    skills: [
      { name: "Express.js", level: 80 },
      { name: "Supabase", level: 82 },
      { name: "SQL / PostgreSQL", level: 78 },
      { name: "Python", level: 60 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    category: "Infrastructure",
    description: "Cloud & tooling",
    skills: [
      { name: "AWS", level: 65 },
      { name: "Vercel", level: 88 },
      { name: "Git / CI/CD", level: 85 },
      { name: "Machine Learning", level: 60 },
    ],
  },
  {
    category: "Other",
    description: "Broader toolkit",
    skills: [
      { name: "Arduino / Hardware", level: 65 },
      { name: "C++", level: 45 },
      { name: "Java", level: 42 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="font-body text-sm" style={{ color: "var(--ink)" }}>
          {name}
        </span>
        <span
          className="font-mono text-xs opacity-30"
          style={{ color: "var(--ink)" }}
        >
          {level}
        </span>
      </div>
      <div className="h-px w-full" style={{ backgroundColor: "var(--border)" }}>
        <div
          className="h-px transition-all duration-700"
          style={{
            width: `${level}%`,
            backgroundColor:
              level >= 80
                ? "var(--ink)"
                : level >= 60
                  ? "var(--muted)"
                  : "var(--border)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="rule-heavy mb-1" />
      <div className="flex items-baseline justify-between mb-16">
        <span
          className="font-display text-xs italic opacity-40"
          style={{ color: "var(--ink)" }}
        >
          03
        </span>
        <span
          className="font-mono text-xs tracking-widest uppercase opacity-40"
          style={{ color: "var(--ink)" }}
        >
          Skills
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: headline */}
        <div className="lg:col-span-4">
          <h2
            className="font-display tracking-tighter leading-tight mb-6"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--ink)",
            }}
          >
            Tools &<br />
            <span className="italic">Territories</span>
          </h2>
          <p
            className="font-body text-sm leading-relaxed opacity-60 mb-8"
            style={{ color: "var(--ink)" }}
          >
            A map of the technologies I navigate daily, occasionally, and have
            survived. Depth over breadth — but breadth when it counts.
          </p>

          {/* Highlight callout */}
          <div
            className="p-4 border-l-2"
            style={{
              borderColor: "var(--accent)",
              backgroundColor: "var(--card)",
            }}
          >
            <p
              className="font-mono text-xs tracking-wider uppercase mb-1"
              style={{ color: "var(--accent2)" }}
            >
              Primary Stack
            </p>
            <p
              className="font-body text-sm opacity-70"
              style={{ color: "var(--ink)" }}
            >
              Next.js · React · React Native · Next.js · Supabase · Express.js
            </p>
          </div>
        </div>

        {/* Right: skill groups grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div
                className="flex items-baseline gap-3 mb-5 pb-3 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <h3
                  className="font-display text-base"
                  style={{ color: "var(--ink)" }}
                >
                  {group.category}
                </h3>
                <span
                  className="font-mono text-xs opacity-30 uppercase tracking-wider"
                  style={{ color: "var(--ink)" }}
                >
                  — {group.description}
                </span>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
