"use client";

const works = [
  {
    index: "01",
    title: "Software Developer II — Xure",
    subtitle: "Apr 2025 – Present · Full-time · On-site, Philippines",
    description:
      "Leading development and optimization of core mobile features while expanding into web development and AWS services. Actively contributing technical insights to product planning, and mentoring interns through code reviews and hands-on training.",
    tags: [
      "React Native",
      "Next.js",
      "AWS",
      "iOS",
      "Android",
      "XCode",
      "Android Studio",
      "CI/CD",
      "REST API",
    ],
    accent: true,
    stat: "3 mobile apps, 1 website",
    statLabel: "Shipped and Maintained",
  },
  {
    index: "02",
    title: "Mobile Developer — Xure",
    subtitle: "Sep 2024 – Apr 2025 · 8 mos · On-site, Philippines",
    description:
      "Led mobile development for core applications at Xure Deal PTE LTD, overseeing feature development, bug fixing, and CI. Conducted feasibility research for new features and provided cross-app support to ensure seamless performance.",
    tags: ["React Native", "iOS", "Android", "CI/CD", "REST API"],
    accent: false,
    stat: "8 mos",
    statLabel: "Lead",
  },
  {
    index: "03",
    title: "Mobile Developer — Datadynamix Inc.",
    subtitle: "Feb 2024 – Sep 2024 · 8 mos · Hybrid, Philippines",
    description:
      "Started as a research intern then transitioned to a part-time mobile developer. Integrated AWS CloudFront for media delivery, implemented Redux for state management, researched OTA updates via CodePush, and built core auth features.",
    tags: ["React Native", "Redux", "AWS CloudFront", "REST API", "CodePush"],
    accent: false,
    stat: "1 major and 3 minor feature releases",
    statLabel: "Growth",
  },
  {
    index: "04",
    title: "Chief Operations Officer — GDSC PLM",
    subtitle: "Jul 2023 – Jul 2024 · 1 yr · On-site",
    description:
      "Member of a 7-person executive board leading a 100+ member Google Developer Student Club. Oversaw all operational aspects of technical event programming, cross-functional coordination, and document governance.",
    tags: ["Leadership", "Event Planning", "Operations", "Communication"],
    accent: false,
    stat: "100+",
    statLabel: "Members",
  },
  {
    index: "05",
    title: "Events Lead — GDSC PLM",
    subtitle: "Sep 2022 – Jul 2023 · 11 mos · Hybrid",
    description:
      "Planned and executed 10+ hackathons, workshops, and speaker sessions per year. Hosted a 100+ participant hackathon with 10+ industry judges, recruited and managed a 15+ person volunteer team.",
    tags: ["Event Management", "Leadership", "Project Management"],
    accent: false,
    stat: "10+",
    statLabel: "Events",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="rule-heavy mb-1" />
      <div className="flex items-baseline justify-between mb-16">
        <span
          className="font-display text-xs italic opacity-40"
          style={{ color: "var(--ink)" }}
        >
          02
        </span>
        <span
          className="font-mono text-xs tracking-widest uppercase opacity-40"
          style={{ color: "var(--ink)" }}
        >
          Work
        </span>
      </div>

      {/* Featured work header */}
      <div className="mb-12">
        <h2
          className="font-display tracking-tighter"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            color: "var(--ink)",
          }}
        >
          Selected Experience
        </h2>
      </div>

      {/* Work list — editorial rows */}
      <div className="space-y-0">
        {works.map((work, i) => (
          <article
            key={work.index}
            className="grid grid-cols-12 gap-6 py-10 border-b group cursor-default"
            style={{ borderColor: "var(--border)" }}
          >
            {/* Index */}
            <div className="col-span-1 hidden md:flex items-start pt-1">
              <span
                className="font-mono text-xs opacity-30"
                style={{ color: "var(--ink)" }}
              >
                {work.index}
              </span>
            </div>

            {/* Main content */}
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-start gap-3 mb-3">
                <h3
                  className="font-display text-xl leading-tight tracking-tight group-hover:opacity-70 transition-opacity"
                  style={{ color: "var(--ink)" }}
                >
                  {work.title}
                </h3>
                {work.accent && (
                  <span
                    className="shrink-0 font-mono text-xs px-2 py-0.5 mt-1"
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "var(--ink)",
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <p
                className="font-mono text-xs tracking-wider uppercase opacity-40 mb-4"
                style={{ color: "var(--ink)" }}
              >
                {work.subtitle}
              </p>
              <p
                className="font-body text-sm leading-relaxed opacity-60 max-w-md"
                style={{ color: "var(--ink)" }}
              >
                {work.description}
              </p>
            </div>

            {/* Tags */}
            <div className="col-span-12 md:col-span-4 flex flex-wrap gap-2 content-start">
              {work.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stat */}
            <div className="col-span-12 md:col-span-1 hidden md:flex flex-col items-end justify-start">
              <span
                className="font-display text-lg italic"
                style={{ color: "var(--accent2)" }}
              >
                {work.stat}
              </span>
              <span
                className="font-mono text-xs opacity-40"
                style={{ color: "var(--ink)" }}
              >
                {work.statLabel}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
